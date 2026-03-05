using System.Collections.Generic;

namespace StudentPortalMVC.Models
{
    // Data tiến độ tổng quan
    public class ProgressData
    {
        public int TotalCredits { get; set; }
        public int CompletedCredits { get; set; }
        public int CurrentCredits { get; set; }
        public int RemainingCredits { get; set; }
        public string ProgressDiff { get; set; }
    }

    // Data Chart
    public class ChartData
    {
        public int Completed { get; set; }
        public int Current { get; set; }
        public int Remaining { get; set; }
    }

    // Khối kiến thức
    public class KnowledgeBlock
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public int CompletedCredits { get; set; }
        public int CurrentCredits { get; set; }
        public int TotalCredits { get; set; }
    }

    // TimeLine data
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

    // Khóa học
    public class Course
    {
        public int Stt { get; set; }
        public int Semester { get; set; }
        public string KnowledgeBlock { get; set; }
        public string CourseName { get; set; }
        public string CourseCode { get; set; }
        public string Prerequisite { get; set; }
        public string Equivalent { get; set; }
        public string Replacement { get; set; }
        public int Credits { get; set; }
        public int TheoryHours { get; set; }
        public int PracticeHours { get; set; }
        public bool Completed { get; set; }
    }

    // Chương trình khung học kỳ
    public class SemesterCurriculum
    {
        public int Semester { get; set; }
        public int MandatoryCredits { get; set; }
        public int ElectiveCredits { get; set; }
        public List<Course> Mandatory { get; set; }
        public List<Course> Elective { get; set; }
    }

    // Khối kiến thức
    public class ElectiveBlocks
    {
        public List<Course> Block1 { get; set; }
        public List<Course> Block2 { get; set; }
    }

    public class ProfessionalEducation
    {
        public List<Course> Mandatory { get; set; }
        public ElectiveBlocks Elective { get; set; }
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
        public ProfessionalEducation ProfessionalEducation { get; set; }
    }
}
