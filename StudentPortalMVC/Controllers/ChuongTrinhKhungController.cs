using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using StudentPortalMVC.Models;
using StudentPortalMVC.Models.repository;

namespace StudentPortalMVC.Controllers
{
    public class ChuongTrinhKhungController : Controller
    {
        private static readonly JsonSerializerSettings _camelCase = new JsonSerializerSettings
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver()
        };

        // GET: /ChuongTrinhKhung/
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetProgressData()
        {
            var raw = GetRawData();
            var result = BuildProgressData(raw);
            return Content(JsonConvert.SerializeObject(result, _camelCase), "application/json");
        }

        public ActionResult GetHocKyData()
        {
            var raw = GetRawData();
            var result = BuildHocKyData(raw);
            return Content(JsonConvert.SerializeObject(result, _camelCase), "application/json");
        }

        public ActionResult GetKhoiKienThucData()
        {
            var raw = GetRawData();
            var result = BuildKhoiKienThucData(raw);
            return Content(JsonConvert.SerializeObject(result, _camelCase), "application/json");
        }


        private List<SP_WEB_XemChuongTrinhKhung> GetRawData()
        {
            var repo = new ChuongTrinhKhungRepository();
            return repo.GetAll();
        }

        public ActionResult GetCTKData()
        {
            var repo = new ChuongTrinhKhungRepository();
            var data = repo.GetAll();
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        private static ChuongTrinhKhungData BuildProgressData(List<SP_WEB_XemChuongTrinhKhung> raw)
        {
            int totalCredits = raw.Sum(x => x.DVHT ?? 0);
            int completedCredits = raw.Where(x => x.IsDat == true).Sum(x => x.DVHT ?? 0);

            int currentCredits = raw.Where(x => x.TrangThaiHocTap == 1 && x.IsDat == null)
                                      .Sum(x => x.DVHT ?? 0);
            int remainingCredits = totalCredits - completedCredits - currentCredits;

            int pctCompleted = totalCredits > 0 ? (int)Math.Round((double)completedCredits / totalCredits * 100) : 0;
            int pctCurrent = totalCredits > 0 ? (int)Math.Round((double)currentCredits / totalCredits * 100) : 0;
            int pctRemaining = 100 - pctCompleted - pctCurrent;

            int startYear = int.TryParse(ConfigurationManager.AppSettings["ChuongTrinhKhung:NamBatDau"], out int y) ? y : DateTime.Now.Year - 2;

            var semesterGroups = raw.GroupBy(x => x.HocKy ?? 0).OrderBy(g => g.Key);
            var timeline = new List<TimelineSemester>();
            string currentAcademicYear = string.Empty;

            foreach (var group in semesterGroups)
            {
                int semNo = group.Key;
                int semTotal = group.Sum(x => x.DVHT ?? 0);
                int semDone = group.Where(x => x.IsDat == true).Sum(x => x.DVHT ?? 0);
                int semCurrent = group.Where(x => x.TrangThaiHocTap == 1 && x.IsDat == null).Sum(x => x.DVHT ?? 0);
                int semProgress = semTotal > 0 ? (int)Math.Round((double)(semDone + semCurrent) / semTotal * 100) : 0;

                string status;
                if (semDone == semTotal && semTotal > 0)
                    status = "completed";
                else if (semCurrent > 0 || group.Any(x => x.TrangThaiHocTap == 1))
                    status = "active";
                else
                    status = "upcoming";

                string year = GetAcademicYear(semNo, startYear);
                if (status == "active")
                    currentAcademicYear = year;

                timeline.Add(new TimelineSemester
                {
                    Semester = semNo,
                    Year = year,
                    Status = status,
                    Progress = semProgress,
                    CompletedCredits = semDone,
                    CurrentCredits = semCurrent,
                    TotalCredits = semTotal
                });
            }


            if (string.IsNullOrEmpty(currentAcademicYear) && timeline.Count > 0)
                currentAcademicYear = timeline.Last(t => t.Status == "completed").Year;


            var knowledgeBlocks = raw
                .Where(x => x.IDKhoiKienThuc.HasValue)
                .GroupBy(x => new { x.IDKhoiKienThuc, x.TenKhoiKienThuc })
                .OrderBy(g => g.Key.IDKhoiKienThuc)
                .Select(g => new KnowledgeBlock
                {
                    IDKhoiKienThuc = g.Key.IDKhoiKienThuc ?? 0,
                    Code = g.Key.IDKhoiKienThuc.ToString(),
                    Name = g.Key.TenKhoiKienThuc ?? string.Empty,
                    TotalCredits = g.Sum(x => x.DVHT ?? 0),
                    CompletedCredits = g.Where(x => x.IsDat == true).Sum(x => x.DVHT ?? 0),
                    CurrentCredits = g.Where(x => x.TrangThaiHocTap == 1 && x.IsDat == null).Sum(x => x.DVHT ?? 0),
                    RequiredCredits = g.First().SoTCBatBuoc ?? 0,
                    ElectiveCredits = g.First().SoTCTuChon ?? 0,
                })
                .ToList();

            return new ChuongTrinhKhungData
            {
                ProgressData = new ProgressData
                {
                    TotalCredits = totalCredits,
                    CompletedCredits = completedCredits,
                    CurrentCredits = currentCredits,
                    RemainingCredits = remainingCredits,
                    ProgressDiff = "+0%"
                },
                CurrentAcademicYear = currentAcademicYear,
                ChartData = new ChartData
                {
                    Completed = pctCompleted,
                    Current = pctCurrent,
                    Remaining = pctRemaining
                },
                KnowledgeBlocks = knowledgeBlocks,
                TimelineData = timeline
            };
        }

        private static HocKyData BuildHocKyData(List<SP_WEB_XemChuongTrinhKhung> raw)
        {
            var semesters = raw
                .GroupBy(x => x.HocKy ?? 0)
                .OrderBy(g => g.Key)
                .Select(g =>
                {
                    var mandatoryList = g.Where(x => x.IsBatBuoc == true).ToList();
                    var electiveList = g.Where(x => x.IsBatBuoc != true).ToList();

                    return new SemesterCurriculum
                    {
                        Semester = g.Key,
                        MandatoryCredits = g.First().SoTCBatBuoc ?? 0,
                        ElectiveCredits = g.First().SoTCTuChon ?? 0,
                        Mandatory = MapCourses(mandatoryList),
                        Elective = MapCourses(electiveList)
                    };
                })
                .ToList();

            return new HocKyData { Semesters = semesters };
        }

        private static KhoiKienThucData BuildKhoiKienThucData(List<SP_WEB_XemChuongTrinhKhung> raw)
        {
            var mandatoryList = raw.Where(x => x.IsBatBuoc == true).ToList();
            var electiveList = raw.Where(x => x.IsBatBuoc != true).ToList();

            var electiveGroups = electiveList
                .GroupBy(x => x.SoNhomTuChon ?? 1)
                .OrderBy(g => g.Key)
                .ToList();

            return new KhoiKienThucData
            {
                ProfessionalEducation = new ProfessionalEducation
                {
                    Mandatory = MapCourses(mandatoryList),
                    Elective = new ElectiveBlocks
                    {
                        Block1 = electiveGroups.Count > 0 ? MapCourses(electiveGroups[0].ToList()) : new List<Course>(),
                        Block2 = electiveGroups.Count > 1 ? MapCourses(electiveGroups[1].ToList()) : new List<Course>()
                    }
                }
            };
        }

        private static List<Course> MapCourses(List<SP_WEB_XemChuongTrinhKhung> items)
        {
            return items.Select((item, idx) => new Course
            {
                Stt = idx + 1,
                Semester = item.HocKy ?? 0,
                IDKhoiKienThuc = item.IDKhoiKienThuc ?? 0,
                KnowledgeBlock = item.TenKhoiKienThuc,
                MaMonHoc = item.MaMonHoc,
                CourseName = item.TenMonHoc,
                CourseCode = item.MaHocPhan,
                SoTinChi = item.SoTinChi,
                Credits = item.DVHT ?? 0,
                TheoryHours = item.SoTietLyThuyet ?? 0,
                PracticeHours = item.SoTietThucHanh ?? 0,
                SoTietTHBT = item.SoTietTHBT,
                Prerequisite = item.HocPhanTienQuyet,
                Equivalent = item.MaHocPhanTuongDuong,
                Replacement = item.HocPhanTruoc,
                CoRequisite = item.HocPhanSongHanh,
                IsBatBuoc = item.IsBatBuoc == true,
                KhongTinhDiemTBC = item.KhongTinhDiemTBC,
                SoNhomTuChon = item.SoNhomTuChon,
                DiemTongKet = item.DiemTongKet,
                IsDat = item.IsDat,
                IsDuSTCNhomTC = item.IsDuSTCNhomTC,
                TrangThaiHocTap = item.TrangThaiHocTap,
                Completed = item.IsDat == true,
                IDHinhThucThi = item.IDHinhThucThi,
                TenHinhThucThi = item.TenHinhThucThi,
                IDLoaiHinhGiangDay = item.IDLoaiHinhGiangDay,
                TenLoaiHinhGiangDay = item.TenLoaiHinhGiangDay,
                IDDeCuongMonHoc = item.IDDeCuongMonHoc,
                UrlDeCuongMonHoc = item.UrlDeCuongMonHoc,
                IDDeCuongHocPhan = item.IDDeCuongHocPhan,
            }).ToList();
        }

        /// <summary>
        /// Tính năm học từ số thứ tự học kỳ, giả sử 2 học kỳ/năm.
        /// </summary>
        private static string GetAcademicYear(int semesterNo, int startYear)
        {
            int offset = (semesterNo - 1) / 2;
            return $"{startYear + offset}-{startYear + offset + 1}";
        }
    }
}

