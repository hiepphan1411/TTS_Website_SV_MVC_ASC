using System.Data.Entity;

namespace StudentPortalMVC.Models
{
    public class StudentPortalDbContext : DbContext
    {
        public StudentPortalDbContext() : base("TempDbsContext")
        {
        }
        
        public DbSet<SP_WEB_XemChuongTrinhKhung> ChuongTrinhKhung { get; set; }
    }
}
