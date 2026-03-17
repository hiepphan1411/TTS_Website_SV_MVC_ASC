// News Data Structure
const newsData = {
  featured: {
    id: 1,
    title:
      "Thông báo v/v chức thi lại, thi thiên học kỳ 2 và học kỳ 3 (học kỳ phụ) năm học 2023-2024",
    description:
      "Phòng Đào tạo thông bác đến toàn thể sinh viên về lề hoạch đảng kỳ học phần học kỳ II, năm 2025-2026 như sau. 1. Thời gian mở cổng kỳ: Bắt đầu từ 08 giờ 00 ngày 08 tháng 11 năm 2025 (thứ Năy). 2. Hình thức và địa điểm đăng ký học phần: - Hình thức: Sinh viên đăng ký học phần trực tuyến qua hệ thống quản lý đào tạo của trường. - Địa điểm: Trên trang web chính thức của trường tại địa chỉ http://daotao.iuh.edu.vn. 3. Lệ phí đăng ký học phần lại: - Lệ phí học phần lại được quy định theo quy định hiện hành của trường Đại học Công nghiệp Thành phố Hồ Chí Minh. 4. Thời gian học và thi lại: - Thời gian học phần lại sẽ được thông báo cụ thể sau khi sinh viên hoàn tất việc đăng ký. - Kỳ thi lại sẽ được tổ chức vào cuối kỳ học phần lại, thời gian cụ thể sẽ được thông báo sau. 5. Lưu ý quan trọng: - Sinh viên cần kiểm tra kỹ thông tin cá nhân và các học phần đã đăng ký trước khi xác nhận đăng ký. - Mọi thắc mắc liên quan đến việc đăng ký học phần lại, sinh viên vui lòng liên hệ Phòng Đào tạo để được hỗ trợ. Phòng Đào tạo đề nghị các sinh viên nghiêm túc thực hiện các quy định trên để đảm bảo quyền lợi học tập của mình.",
    date: "25/06/2024",
    image: "",
  },
  list: [
    {
      id: 2,
      title: "TB số 179 V/v đề xuất hoàn xét tốt nghiệp và xét TN",
      date: "25/06/2024",
      image: "",
    },
    {
      id: 3,
      title: "THÔNG BÁO Về việc đón độc nộp học phí Kỳ II, năm học 2023-2024",
      date: "25/01/2024",
      image: "",
    },
    {
      id: 4,
      title: "TB số 179 V/v đề xuất hoàn xét tốt nghiệp và xét TN",
      date: "25/06/2024",
      image: "",
    },
    {
      id: 5,
      title:
        "Thông báo 145/TB-ĐHTNTH-QLĐT V/v Lịch thi, hình thức thi và tổ chức quản lý thi kết thúc học phần Đợt 2,học kỳ II năm học 2023-2024",
      date: "25/06/2024",
      image: "",
    },
    {
      id: 6,
      title: "TB số 179 V/v đề xuất hoàn xét tốt nghiệp và xét TN",
      date: "25/06/2024",
      image: "",
    },
    {
      id: 7,
      title: "TB số 179 V/v đề xuất hoàn xét tốt nghiệp và xét TN",
      date: "25/06/2024",
      image: "",
    },
  ],
  grid: [
    {
      id: 6,
      title: "TB số 179 V/v đề xuất hoàn xét tốt nghiệp và xét TN",
      date: "25/06/2024",
      image: "",
    },
    {
      id: 7,
      title: "TB số 179 V/v đề xuất hoàn xét tốt nghiệp và xét TN",
      date: "25/06/2024",
      image: "",
    },
    {
      id: 8,
      title: "THÔNG BÁO Về việc đón độc nộp học phí Kỳ II, năm học 2023-2024",
      date: "25/01/2024",
      image: "",
    },
    {
      id: 9,
      title:
        "Thông báo 145/TB-ĐHTNTH-QLĐT V/v Lịch thi, hình thức thi và tổ chức lý thi kết thúc...",
      date: "25/06/2024",
      image: "",
    },
    {
      id: 10,
      title:
        "Thông báo 145/TB-ĐHTNTH-QLĐT V/v Lịch thi, hình thức thi và tổ chức lý thi kết thúc...",
      date: "25/06/2024",
      image: "",
    },
    {
      id: 11,
      title:
        "Thông báo 145/TB-ĐHTNTH-QLĐT V/v Lịch thi, hình thức thi và tổ chức lý thi kết thúc...",
      date: "25/06/2024",
      image: "",
    },
  ],
};

const defaultImage = "/Content/images/default-news.jpg";

function renderFeaturedNews(data = newsData.featured) {
  const titleEl = document.getElementById("featuredNewsTitle");
  const dateEl = document.getElementById("featuredNewsDate");
  const descEl = document.getElementById("featuredNewsDescription");
  const imageEl = document.getElementById("featuredNewsImage");

  if (titleEl) titleEl.textContent = data.title;
  if (dateEl) dateEl.textContent = data.date;
  if (descEl) descEl.textContent = data.description;

  if (imageEl) {
    const imageSrc =
      data.image && data.image.trim() !== "" ? data.image : defaultImage;

    imageEl.innerHTML = `<img src="${imageSrc}" alt="News image">`;
  }
}

// Render News List
function renderNewsList(listData = newsData.list) {
  const container = document.getElementById("newsListContainer");

  if (!container) return;

  container.innerHTML = "";

  // Limit 5 news
  const limitedData = listData.slice(0, 5);

  limitedData.forEach((item) => {
    const newsItem = document.createElement("div");
    newsItem.className = "news-list-item";

    const imageSrc =
      item.image && item.image.trim() !== "" ? item.image : defaultImage;

    newsItem.innerHTML = `
      <img class="news-list-item-icon" 
        src="${imageSrc}" 
        onerror="this.onerror=null; this.src='${defaultImage}';"></img>
      <div class="news-list-item-content">
        <div class="news-list-item-title">${item.title}</div>
        <div class="news-list-item-date">${item.date}</div>
      </div>
    `;

    newsItem.addEventListener("click", () => {
      "";
      window.location.href = `/ChiTietTinTuc`;
    });

    container.appendChild(newsItem);
  });
}

// Render News Grid
function renderNewsGrid(gridData = newsData.grid) {
  const container = document.getElementById("newsGridContainer");

  if (!container) return;

  container.innerHTML = "";

  gridData.forEach((item) => {
    const imageSrc =
      item.image && item.image.trim() !== "" ? item.image : defaultImage;

    const newsCard = document.createElement("div");
    newsCard.className = "news-card";
    newsCard.innerHTML = `
      <img class="news-card-image" 
        src="${imageSrc}"
        onerror="this.onerror=null; this.src='${defaultImage}';"></img>
      <div class="news-card-body">
        <div class="news-card-title">${item.title}</div>
        <div class="news-card-date">${item.date}</div>
      </div>
    `;

    newsCard.addEventListener("click", () => {
        window.location.href = newsDetailUrl;
    });

    container.appendChild(newsCard);
  });
}

function handleNewsClick(newsId) {
  console.log("Clicked news item:", newsId);
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedNews();
  renderNewsList();
  renderNewsGrid();

  const viewAllBtn = document.getElementById("viewAllBtn");
  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("View All News clicked");
    });
  }

  const featuredNewsBtn = document.getElementById("featuredNewsBtn");
  if (featuredNewsBtn) {
    featuredNewsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handleNewsClick(newsData.featured.id);
    });
  }
});
