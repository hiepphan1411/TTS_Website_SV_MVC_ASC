using System.Web.Optimization;

namespace StudentPortalMVC
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            // CSS Bundles
            bundles.Add(new StyleBundle("~/bundles/css/lib").Include(
                "~/Content/lib/bootstrap.min.css",
                "~/Content/lib/kendo-ui.common.min.css",
                "~/Content/lib/kendo.default.min.css"
            ));

            bundles.Add(new StyleBundle("~/bundles/css/chuongtrinh").Include(
                "~/Content/chuong-trinh-khung.css"
            ));

            // JS Bundles
            bundles.Add(new ScriptBundle("~/bundles/js/chuongtrinh").Include(
                "~/Scripts/process-chuong-trinh-khung.js",
                "~/Scripts/process-khoi-kien-thuc.js"
            ));
        }
    }
}
