// News Detail Data
const newsDetailData = {
  current: {
    id: 1,
    title:
      "Thông báo v/v tổ chức thi lại, thi cải thiện học kỳ 2 và học kỳ 3 (học kỳ phụ) năm học 2023-2024",
    date: "25/06/2024",
    badge: "THÔNG BÁO",
    intro:
      "Phòng Đào tạo thông báo về việc tổ chức thi lại, thi thiên học kỳ 2 và học kỳ 3 (học kỳ phụ) năm học 2023-2024 như sau:",
    sections: [
      {
        title: "Thời gian thi",
        items: [
          "Thời gian tổ chức thi: Từ ngày 25/07/2024 - 27/07/2024.",
          "Lịch thi từng học phần chính thức ban hành: Thứ 6 ngày 19/07/2024.",
        ],
      },
      {
        title: "Hội trường thi lại, thi cải thiện",
        items: [
          "Địa điểm tổ chức thi: Cơ sở chính",
          "Hội trường thi do Phòng Quản lý đào tạo phụ trách sắp xếp và công bố, sinh viên chủ động theo dõi trên Cổng thông tin sinh viên tại địa chỉ: https://sinhvien.fbu.edu.vn trước ngày thi.",
          "Hội trường tổ chức thi: Cơ sở Dịch Vọng Hậu: Phòng 303.",
        ],
      },
      {
        title: "Đối tượng thi",
        items: ["Sinh viên các khóa còn quyền thi các môn có trong lịch thi."],
      },
      {
        title: "Hình thức đăng ký thi lại, thi cải thiện",
        items: [
          "Thời gian đăng ký: từ ngày 10/07 đến hết 13/07/2024.",
          "Hủy đăng ký thi cải thiện: CBVP viện chuyên ngành gửi danh sách sinh viên hủy đăng ký cải thiện cho phòng QLĐT trước 16h00 Thứ 5 ngày 18/07/2024.",
          "Sinh viên đăng ký tại cổng thông tin sinh viên tại địa chỉ: https://sinhvien.fbu.edu.vn.",
        ],
      },
      {
        title: "Lệ phí dự thi",
        items: [
          "Lệ phí thi lại, thi cải thiện: theo quy định của Nhà trường.",
          "Thời gian hoàn thành lệ phí: trước 16h00 ngày 16/07/2024.",
          "Trong quá trình thực hiện, nếu có vướng mắc phát sinh, các đơn vị/cá nhân phối hợp với các đơn vị liên quan để giải quyết kịp thời.",
        ],
      },
    ],
    attachments: [
      {
        id: 1,
        name: "TB 226 V/v Tổ chức thi lại & thi cải thiện HK2 2023-2024.pdf",
        size: "2.4 MB",
        type: "pdf",
        url: "#",
      },
      {
        id: 2,
        name: "TB 226 V/v Tổ chức thi lại & thi cải thiện HK2 2023-2024.doc",
        size: "1.8 MB",
        type: "doc",
        url: "#",
      },
      {
        id: 3,
        name: "TB 226 V/v Tổ chức thi lại & thi cải thiện HK2 2023-2024.doc",
        size: "2.8 MB",
        type: "doc",
        url: "#",
      },
    ],
  },
  related: [
    {
      id: 2,
      title: "TB số 179 V/v đề xuất hoàn xét tốt nghiệp và xét TN",
      date: "25/06/2024",
    },
    {
      id: 3,
      title: "THÔNG BÁO Về việc đón độc nộp học phí Kỳ II, năm học 2023-2024",
      date: "25/01/2024",
    },
    {
      id: 4,
      title: "TB số 179 V/v đề xuất hoàn xét tốt nghiệp và xét TN",
      date: "25/06/2024",
    },
    {
      id: 5,
      title:
        "Thông báo 145/TB-ĐHTNTH-QLĐT V/v Lịch thi, hình thức thi và tổ chức quản lý thi kết thúc",
      date: "25/06/2024",
    },
  ],
};

function renderNewsDetail(data = newsDetailData.current) {
  const titleEl = document.getElementById("detailNewsTitle");
  const dateEl = document.getElementById("detailNewsDate");
  const introEl = document.getElementById("detailNewsIntro");

  if (titleEl) titleEl.textContent = data.title;
  if (dateEl) dateEl.textContent = data.date;
  if (introEl) introEl.textContent = data.intro;

  renderNewsSections(data.sections);
  renderAttachments(data.attachments);
  renderRelatedNews(newsDetailData.related);
}

// Render sections
function renderNewsSections(sections = []) {
  const container = document.getElementById("detailNewsSections");
  if (!container) return;

  container.innerHTML = "";

  sections.forEach((section, index) => {
    const sectionEl = document.createElement("div");
    sectionEl.className = "detail-section";

    const itemsHTML = section.items
      .map(
        (item) => `
      <div class="detail-section-item">
        <span class="detail-section-item-text">${item}</span>
      </div>
    `,
      )
      .join("");

    sectionEl.innerHTML = `
      <h3 class="detail-section-title" data-number="${index + 1}.">
        ${section.title}
      </h3>
      <div class="detail-section-content">
        ${itemsHTML}
      </div>
    `;

    container.appendChild(sectionEl);
  });
}

function renderAttachments(attachments = []) {
  const container = document.getElementById("detailAttachmentsList");
  const section = document.getElementById("detailAttachmentsSection");

  if (!container || !attachments || attachments.length === 0) {
    if (section) section.style.display = "none";
    return;
  }

  if (section) section.style.display = "block";
  container.innerHTML = "";

  attachments.forEach((attachment) => {
    const attachmentEl = document.createElement("div");
    attachmentEl.className = "detail-attachment-item";

    const iconClass =
      attachment.type === "pdf"
        ? "detail-attachment-icon pdf"
        : "detail-attachment-icon doc";
    const fileIcon =
      attachment.type === "pdf" ? "fas fa-file-pdf" : "fas fa-file-word";

    attachmentEl.innerHTML = `
      <div class="${iconClass}">
        <i class="${fileIcon}"></i>
      </div>
      <div class="detail-attachment-info">
        <div class="detail-attachment-name">${attachment.name}</div>
        <div class="detail-attachment-meta">${attachment.size}</div>
      </div>
      <a href="${attachment.url}" class="detail-attachment-download" title="Download">
        <i class="fas fa-download"></i>
      </a>
    `;

    container.appendChild(attachmentEl);
  });
}

function renderRelatedNews(relatedData = []) {
  const container = document.getElementById("detailRelatedNewsList");
  if (!container) return;

  container.innerHTML = "";

  relatedData.forEach((news) => {
    const itemEl = document.createElement("div");
    itemEl.className = "detail-related-news-item";

    itemEl.innerHTML = `
      <div class="detail-related-news-title">${news.title}</div>
      <div class="detail-related-news-date">${news.date}</div>
    `;

    itemEl.addEventListener("click", () => {
      handleNewsDetailClick(news.id);
    });

    container.appendChild(itemEl);
  });
}

function setNewsDetailData(newsData) {
  if (newsData.current) {
    newsDetailData.current = newsData.current;
  }
  if (newsData.related) {
    newsDetailData.related = newsData.related;
  }
  renderNewsDetail();
}

function handleNewsDetailClick(newsId) {
  console.log("Clicked related news:", newsId);
}

document.addEventListener("DOMContentLoaded", () => {
  renderNewsDetail();
});
