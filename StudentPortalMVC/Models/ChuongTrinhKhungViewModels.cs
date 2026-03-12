using System.Collections.Generic;

namespace StudentPortalMVC.Models
{
    public class ProgressData
    {
        public int TotalCredits { get; set; }
        public int CompletedCredits { get; set; }
        public int CurrentCredits { get; set; }
        public int RemainingCredits { get; set; }
        public string ProgressDiff { get; set; }
    }

    public class ChartData
    {
        public int Completed { get; set; }
        public int Current { get; set; }
        public int Remaining { get; set; }
    }

    public class KnowledgeBlock
    {
        public int IDKhoiKienThuc { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public int CompletedCredits { get; set; }
        public int CurrentCredits { get; set; }
        public int TotalCredits { get; set; }
        public int RequiredCredits { get; set; }
        public int ElectiveCredits { get; set; }
    }

    public class TimelineSemester
    {
        public int Semester { get; set; }
        public string Year { get; set; }
        public string Status { get; set; }
        public int Progress { get; set; }
        public int CompletedCredits { get; set; }
        public int TotalCredits { get; set; }
        public int CurrentCredits { get; set; }
    }

    public class Course
    {
        public int Stt { get; set; }
        public int Semester { get; set; }
        public int IDKhoiKienThuc { get; set; }
        public string KnowledgeBlock { get; set; }
        public string MaMonHoc { get; set; }
        public string CourseName { get; set; }
        public string CourseCode { get; set; }
        public string SoTinChi { get; set; }
        public int Credits { get; set; }
        public int TheoryHours { get; set; }
        public int PracticeHours { get; set; }
        public int? SoTietTHBT { get; set; }
        public string Prerequisite { get; set; }
        public string Equivalent { get; set; }
        public string Replacement { get; set; }
        public string CoRequisite { get; set; }
        public bool IsBatBuoc { get; set; }
        public bool? KhongTinhDiemTBC { get; set; }
        public int? SoNhomTuChon { get; set; }
        public decimal? DiemTongKet { get; set; }
        public bool? IsDat { get; set; }
        public bool? IsDuSTCNhomTC { get; set; }
        public int? TrangThaiHocTap { get; set; }
        public bool Completed { get; set; }
        public int? IDHinhThucThi { get; set; }
        public string TenHinhThucThi { get; set; }
        public int? IDLoaiHinhGiangDay { get; set; }
        public string TenLoaiHinhGiangDay { get; set; }
        public int? IDDeCuongMonHoc { get; set; }
        public string UrlDeCuongMonHoc { get; set; }
        public int? IDDeCuongHocPhan { get; set; }
    }

    public class SemesterCurriculum
    {
        public int Semester { get; set; }
        public int MandatoryCredits { get; set; }
        public int ElectiveCredits { get; set; }
        public List<Course> Mandatory { get; set; }
        public List<Course> Elective { get; set; }
    }


    public class ElectiveGroup
    {
        public int GroupNumber { get; set; }
        public List<Course> Courses { get; set; }
    }

    public class KnowledgeBlockSection
    {
        public int IDKhoiKienThuc { get; set; }
        public string Name { get; set; }
        public int MandatoryCredits { get; set; }
        public int ElectiveCredits { get; set; }
        public List<Course> Mandatory { get; set; }
        public List<ElectiveGroup> ElectiveGroups { get; set; }
    }


    public class ChuongTrinhKhungData
    {
        public ProgressData ProgressData { get; set; }
        public string CurrentAcademicYear { get; set; }
        public ChartData ChartData { get; set; }
        public List<KnowledgeBlock> KnowledgeBlocks { get; set; }
        public List<TimelineSemester> TimelineData { get; set; }
    }

    public class HocKyData
    {
        public List<SemesterCurriculum> Semesters { get; set; }
    }

    public class KhoiKienThucData
    {
        public List<KnowledgeBlockSection> Blocks { get; set; }
    }
}