let rowCounter = 2;

document.addEventListener("DOMContentLoaded", function () {
    initializeRowClickHandlers();

    const btnPropose = document.querySelector(".btn-propose");
    if (btnPropose) {
        btnPropose.addEventListener("click", handlePropose);
    }

    const btnCancel = document.querySelector(".btn-cancel");
    if (btnCancel) {
        btnCancel.addEventListener("click", handleCancel);
    }
});

function initializeRowClickHandlers() {
    const mainRows = document.querySelectorAll(".main-row");

    mainRows.forEach((row) => {
        row.addEventListener("click", function (e) {
            if (e.target.type === "checkbox") {
                return;
            }

            const rowId = this.getAttribute("data-row");
            const detailRow = document.getElementById("detail-" + rowId);

            document.querySelectorAll(".detail-row").forEach((dr) => {
                if (dr.id !== "detail-" + rowId) {
                    dr.classList.remove("show");
                }
            });

            detailRow.classList.toggle("show");
        });
    });
}

function handlePropose() {
    rowCounter++;
    const currentDate = new Date();
    const dateStr = `${String(currentDate.getHours()).padStart(2, "0")}:${String(currentDate.getMinutes()).padStart(2, "0")} ${String(currentDate.getDate()).padStart(2, "0")}/${String(currentDate.getMonth() + 1).padStart(2, "0")}/${currentDate.getFullYear()}`;
    const yesterdayDate = new Date(currentDate);
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterdayStr = `${String(yesterdayDate.getDate()).padStart(2, "0")}/${String(yesterdayDate.getMonth() + 1).padStart(2, "0")}/${yesterdayDate.getFullYear()}`;

    const tbody = document.querySelector(".data-table tbody");
    const newRowId = rowCounter;

    const mainRow = document.createElement("tr");
    mainRow.className = "main-row";
    mainRow.setAttribute("data-row", newRowId);
    mainRow.innerHTML = `
    <td>
      <input type="checkbox" onclick="event.stopPropagation()" />
    </td>
    <td>${newRowId}</td>
    <td>ĐƯỢT XÉT TN KHÓA 46 TEST</td>
    <td>Đợt xét TN Khóa 46 Test</td>
    <td>${dateStr}</td>
    <td>Đã đề xuất, chờ duyệt</td>
    <td>${yesterdayStr}</td>
    <td>-</td>
    <td><span class="badge-success">Đạt</span></td>
    <td>-</td>
  `;

    // Tạo detail row
    const detailRow = document.createElement("tr");
    detailRow.className = "detail-row";
    detailRow.id = `detail-${newRowId}`;
    detailRow.innerHTML = `
    <td colspan="10">
      <div class="detail-content">
        <div class="detail-tabs">
          <span
            class="detail-tab active"
            onclick="showTab(event, 'tab${newRowId}-1')"
            >Chi tiết kết quả</span
          >
          <span
            class="detail-tab"
            onclick="showTab(event, 'tab${newRowId}-2')"
            >Danh sách hồ sơ đính kèm</span
          >
        </div>

        <div id="tab${newRowId}-1" class="tab-content active">
          <div class="detail-grid">
            <div class="detail-item">
              <span class="detail-label">SỐ TC CTĐT:</span>
              <span class="detail-value">140</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">ĐIỂM TBC TL HỆ 10:</span>
              <span class="detail-value">7.77</span>
            </div>
            <div class="detail-item">
              <span class="detail-label"
                >ĐIỂM RÈN LUYỆN TOÀN KHÓA:</span
              >
              <span class="detail-value neutral"></span>
            </div>

            <div class="detail-item">
              <span class="detail-label"
                >SỐ TC PHẢI TÍCH LŨY:</span
              >
              <span class="detail-value">129</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">ĐIỂM TBC TL HỆ 4:</span>
              <span class="detail-value">3.13</span>
            </div>
            <div class="detail-item">
              <span class="detail-label"
                >XẾP LOẠI RÈN LUYỆN TOÀN KHÓA:</span
              >
              <span class="detail-value neutral"></span>
            </div>

            <div class="detail-item">
              <span class="detail-label">SỐ TC ĐÃ HỌC:</span>
              <span class="detail-value">146</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">TỶ LỆ HỌC LẠI:</span>
              <span class="detail-value">0</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">GHI CHÚ HÀ BẤT TN:</span>
              <span class="detail-value neutral"></span>
            </div>

            <div class="detail-item">
              <span class="detail-label">SỐ TC TÍCH LŨY:</span>
              <span class="detail-value">131</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">CÔNG NỢ:</span>
              <span class="detail-value">0</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">KẾT QUẢ:</span>
              <span class="detail-value">Đạt</span>
            </div>

            <div class="detail-item">
              <span class="detail-label">SỐ TC KHÔNG ĐẠT:</span>
              <span class="detail-value">0</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">XẾP LOẠI:</span>
              <span class="detail-value">Khá</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">GHI CHÚ:</span>
              <span class="detail-value neutral"></span>
            </div>
          </div>
        </div>

        <div id="tab${newRowId}-2" class="tab-content">
          <table class="data-table">
            <thead>
              <tr>
                <th style="width: 60px">STT</th>
                <th>HỒ SƠ ĐÍNH KÈM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="2">
                  <div class="empty-state">
                    Không có dữ liệu hiện thi
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </td>
  `;

    tbody.appendChild(mainRow);
    tbody.appendChild(detailRow);

    mainRow.addEventListener("click", function (e) {
        if (e.target.type === "checkbox") {
            return;
        }

        const rowId = this.getAttribute("data-row");
        const detailRow = document.getElementById("detail-" + rowId);

        document.querySelectorAll(".detail-row").forEach((dr) => {
            if (dr.id !== "detail-" + rowId) {
                dr.classList.remove("show");
            }
        });

        detailRow.classList.toggle("show");
    });

    alert("Đề xuất đăng ký tốt nghiệp thành công");
}

function handleCancel() {
    const checkedBoxes = document.querySelectorAll(
        '.data-table tbody .main-row input[type="checkbox"]:checked',
    );

    if (checkedBoxes.length === 0) {
        alert("Vui lòng chọn đăng ký xét tốt nghiệp để hủy");
        return;
    }

    checkedBoxes.forEach((checkbox) => {
        const mainRow = checkbox.closest(".main-row");
        const rowId = mainRow.getAttribute("data-row");
        const detailRow = document.getElementById("detail-" + rowId);

        mainRow.remove();
        if (detailRow) {
            detailRow.remove();
        }
    });

    updateRowNumbers();
}

function updateRowNumbers() {
    const mainRows = document.querySelectorAll(".main-row");
    mainRows.forEach((row, index) => {
        const sttCell = row.querySelector("td:nth-child(2)");
        if (sttCell) {
            sttCell.textContent = index + 1;
        }
    });
}

function showTab(event, tabId) {
    const detailContent = event.target.closest(".detail-content");

    detailContent.querySelectorAll(".detail-tab").forEach((tab) => {
        tab.classList.remove("active");
    });

    event.target.classList.add("active");

    detailContent.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.remove("active");
    });

    document.getElementById(tabId).classList.add("active");
}
