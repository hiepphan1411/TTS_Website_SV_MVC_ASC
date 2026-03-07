const dormitoryData = {
  months: [
    "Tháng 9/2025",
    "Tháng 10/2025",
    "Tháng 11/2025",
    "Tháng 12/2025",
    "Tháng 1/2026",
    "Tháng 2/2026",
    "Tháng 3/2026",
    "Tháng 4/2026",
  ],
  buildings: [
    { id: "day-h1", name: "Dãy H1", roomCount: 49 },
    { id: "day-h2", name: "Dãy H2", roomCount: 18 },
    { id: "day-h3", name: "Dãy H3", roomCount: 22 },
    { id: "day-h4", name: "Dãy H4", roomCount: 30 },
    { id: "day-h5", name: "Dãy H5", roomCount: 50 },
  ],
  floors: [
    { id: 1, name: "Tầng 1", roomCount: 5 },
    { id: 2, name: "Tầng 2", roomCount: 8 },
    { id: 3, name: "Tầng 3", roomCount: 15 },
    { id: 4, name: "Tầng 4", roomCount: 16 },
    { id: 4, name: "Tầng 5", roomCount: 4 },
    { id: 4, name: "Tầng 6", roomCount: 2 },
  ],
  rooms: [
    {
      id: "ktx1-402",
      building: "day-h1",
      floor: 1,
      code: "KTX1-402",
      capacity: 6,
      beds: [
        { id: "G01", status: "available" },
        { id: "G02", status: "occupied" },
        { id: "G03", status: "available" },
        { id: "G04", status: "available" },
        { id: "G05", status: "occupied" },
        { id: "G06", status: "available" },
      ],
    },
    {
      id: "ktx1-403",
      building: "day-h1",
      floor: 1,
      code: "KTX1-403",
      capacity: 4,
      beds: [
        { id: "G01", status: "available" },
        { id: "G02", status: "occupied" },
        { id: "G03", status: "available" },
        { id: "G04", status: "occupied" },
      ],
    },
    {
      id: "ktx1-406",
      building: "day-h1",
      floor: 1,
      code: "KTX1-406",
      capacity: 6,
      beds: [
        { id: "G01", status: "available" },
        { id: "G02", status: "available" },
        { id: "G03", status: "available" },
        { id: "G04", status: "available" },
        { id: "G05", status: "available" },
        { id: "G06", status: "available" },
      ],
    },
    {
      id: "ktx1-407",
      building: "day-h1",
      floor: 1,
      code: "KTX1-407",
      capacity: 6,
      beds: [
        { id: "G01", status: "available" },
        { id: "G02", status: "available" },
        { id: "G03", status: "available" },
        { id: "G04", status: "available" },
        { id: "G05", status: "available" },
        { id: "G06", status: "available" },
      ],
    },
    {
      id: "ktx1-408",
      building: "day-h1",
      floor: 1,
      code: "KTX1-408",
      capacity: 6,
      beds: [
        { id: "G01", status: "occupied" },
        { id: "G02", status: "occupied" },
        { id: "G03", status: "available" },
        { id: "G04", status: "available" },
        { id: "G05", status: "occupied" },
        { id: "G06", status: "available" },
      ],
    },
  ],
  prices: [
    {
      id: 1,
      facility: "Cơ sở chính",
      floor: "Tòa nhà KTX2",
      building: "1",
      code: "KTX1-402",
      bed: "G03",
      monthYear: "9/2025",
      price: 200000,
    },
    {
      id: 2,
      facility: "Cơ sở chính",
      floor: "Tòa nhà KTX2",
      building: "1",
      code: "KTX1-402",
      bed: "G03",
      monthYear: "10/2025",
      price: 200000,
    },
    {
      id: 3,
      facility: "Cơ sở chính",
      floor: "Tòa nhà KTX2",
      building: "1",
      code: "KTX1-402",
      bed: "G03",
      monthYear: "11/2025",
      price: 200000,
    },
    {
      id: 4,
      facility: "Cơ sở chính",
      floor: "Tòa nhà KTX2",
      building: "1",
      code: "KTX1-402",
      bed: "G03",
      monthYear: "12/2025",
      price: 200000,
    },
  ],
};

function renderMonthTabs() {
  const monthTabsContainer = document.getElementById("monthTabs");

  const tabsHTML = dormitoryData.months
    .map(
      (month, index) => `
      <button type="button" class="dorm-month-tab ${index === 0 ? "active" : ""}">
        ${month}
      </button>
    `,
    )
    .join("");

  monthTabsContainer.innerHTML = tabsHTML;

  monthTabsContainer.querySelectorAll(".dorm-month-tab").forEach((tab) => {
    tab.addEventListener("click", () => selectMonth(tab));
  });
}

function selectMonth(tabElement) {
  document
    .querySelectorAll(".dorm-month-tab")
    .forEach((tab) => tab.classList.remove("active"));
  tabElement.classList.add("active");
}

function renderBuildingList() {
  const buildingListContainer = document.getElementById("buildingList");

  const buildingListTitle = `
    <span class="secondary-label">DANH SÁCH DÃY NHÀ</span>
  `;

  const buildingsHTML = dormitoryData.buildings
    .map(
      (building, index) => `
      <button type="button" 
        class="dorm-building-item ${index === 0 ? "active" : ""}" 
        data-building-id="${building.id}">
        <span>${building.name}</span>
        <span class="dorm-building-count">${building.roomCount}</span>
      </button>
    `,
    )
    .join("");

  // Check if close button exists, preserve it
  const closeBtn = buildingListContainer.querySelector(".dorm-building-close");
  const closeBtnHTML = closeBtn ? closeBtn.outerHTML : "";

  buildingListContainer.innerHTML =
    closeBtnHTML + buildingListTitle + buildingsHTML;

  buildingListContainer
    .querySelectorAll(".dorm-building-item")
    .forEach((buildingDiv) => {
      buildingDiv.addEventListener("click", () => selectBuilding(buildingDiv));
    });

  renderFloorTabs("day-h1");
}

function selectBuilding(buildingElement) {
  document
    .querySelectorAll(".dorm-building-item")
    .forEach((item) => item.classList.remove("active"));
  buildingElement.classList.add("active");
  renderFloorTabs(buildingElement.dataset.buildingId);

  // Close building list on mobile after selection
  if (window.innerWidth <= 576) {
    const toggleBtn = document.getElementById("buildingToggle");
    const buildingList = document.getElementById("buildingList");
    if (buildingList) {
      toggleBtn.classList.remove("d-none");
      buildingList.classList.remove("show");
    }
  }
}

function renderFloorTabs(buildingId) {
  const floorTabsContainer = document.getElementById("floorTabsContainer");

  const tabsHTML = dormitoryData.floors
    .map(
      (floor, index) => `
      <button type="button" 
        class="dorm-floor-tab ${index === 0 ? "active" : ""}" 
        data-floor-id="${floor.id}">
        ${floor.name} (${floor.roomCount})
      </button>
    `,
    )
    .join("");

  const contentsHTML = dormitoryData.floors
    .map(
      (floor, index) => `
      <div class="dorm-floor-content ${index === 0 ? "active" : ""}" data-floor-id="${floor.id}">
        <div class="dorm-room-grid" data-floor="${floor.id}"></div>
      </div>
    `,
    )
    .join("");

  floorTabsContainer.innerHTML = `
    <div class="dorm-floor-tabs">
      ${tabsHTML}
    </div>
    ${contentsHTML}
  `;

  floorTabsContainer.querySelectorAll(".dorm-floor-tab").forEach((tab) => {
    tab.addEventListener("click", () => selectFloor(tab, buildingId));
  });

  renderRoomGrid(buildingId, 1);
}

function selectFloor(tabElement, buildingId) {
  const floorId = parseInt(tabElement.dataset.floorId);

  document
    .querySelectorAll(".dorm-floor-tab")
    .forEach((tab) => tab.classList.remove("active"));
  tabElement.classList.add("active");

  document
    .querySelectorAll(".dorm-floor-content")
    .forEach((content) => content.classList.remove("active"));
  document
    .querySelector(`.dorm-floor-content[data-floor-id="${floorId}"]`)
    .classList.add("active");

  renderRoomGrid(buildingId, floorId);
}

function renderRoomGrid(buildingId, floorId) {
  const roomGridContainer = document.querySelector(
    `.dorm-floor-content[data-floor-id="${floorId}"] .dorm-room-grid`,
  );
  if (!roomGridContainer) return;

  const filteredRooms = dormitoryData.rooms.filter(
    (room) => room.building === buildingId && room.floor === floorId,
  );

  const roomsHTML = filteredRooms
    .map((room) => {
      const bedsHTML = room.beds
        .map(
          (bed) => `
          <div class="dorm-bed-item" data-bed-id="${bed.id}" data-room-id="${room.id}" data-status="${bed.status}">
            <i class="fas fa-user dorm-bed-icon ${bed.status}"></i>
            <span class="dorm-bed-label">${bed.id}</span>
          </div>
        `,
        )
        .join("");

      return `
        <div class="dorm-room-card">
          <div class="dorm-room-card-header">
            <span class="dorm-room-code">${room.code}</span>
            <span class="dorm-room-capacity">PHÒNG ${room.capacity} NGƯỜI</span>
          </div>
          <div class="dorm-bed-grid">
            ${bedsHTML}
          </div>
        </div>
      `;
    })
    .join("");

  roomGridContainer.innerHTML = roomsHTML;

  roomGridContainer.querySelectorAll(".dorm-bed-item").forEach((bedItem) => {
    if (bedItem.dataset.status === "available") {
      bedItem.addEventListener("click", () => selectBed(bedItem));
    }
  });
}

function selectBed(bedElement) {
  document.querySelectorAll(".dorm-bed-icon").forEach((icon) => {
    if (icon.classList.contains("selected")) {
      icon.classList.remove("selected");
      icon.classList.add("available");
    }
  });

  const icon = bedElement.querySelector(".dorm-bed-icon");
  icon.classList.remove("available");
  icon.classList.add("selected");

  const roomId = bedElement.dataset.roomId;
  const bedId = bedElement.dataset.bedId;
  const room = dormitoryData.rooms.find((r) => r.id === roomId);

  const selectedRoomDiv = document.getElementById("selectedRoom");
  selectedRoomDiv.innerHTML = `
    <div class="dorm-selected-room-info">
      <div class="dorm-selected-room-header">
        <i class="fas fa-bed"></i>
        <div class="dorm-selected-room-text pe-2">
            <span class="secondary-label">NƠI Ở ĐÃ CHỌN:</span>
            <span class="selected-room-text">Giường ${bedId} - Phòng ${room.code}</span>
        </div>
      </div>
      <div class="custom-grid">
        <div>
          <span class="secondary-label">TẦNG:</span>
          <span class="selected-room-text">1</span>
        </div>
        <div>
          <span class="secondary-label">DÃY NHÀ:</span>
          <span class="selected-room-text">H1</span>
        </div>  
        <div>
          <span class="secondary-label">CƠ SỞ:</span>
          <span class="selected-room-text">Cơ sở chính</span>
        </div>
        <div>
          <span class="secondary-label">LOẠI PHÒNG:</span>
          <span class="selected-room-text">5 người</span>
        </div>
      </div>
    </div>
  `;
}

function renderPriceTable() {
  const priceTableBody = document.getElementById("priceTableBody");
  priceTableBody.innerHTML = "";

  let totalPrice = 0;

  dormitoryData.prices.forEach((price, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="text-center">${index + 1}</td>
      <td>${price.facility}</td>
      <td>${price.floor}</td>
      <td class="text-center">${price.building}</td>
      <td class="text-center">${price.code}</td>
      <td class="text-center">${price.bed}</td>
      <td>${price.monthYear}</td>
      <td class="text-end">${price.price.toLocaleString()} VND</td>
    `;
    priceTableBody.appendChild(row);
    totalPrice += price.price;
  });

  const totalPriceElement = document.getElementById("totalPrice");
  totalPriceElement.textContent = `${totalPrice.toLocaleString()} VND`;
}

function setupEventListeners() {
  const dormForm = document.getElementById("dormForm");
  const cancelBtn = dormForm.querySelector(".dorm-btn-secondary");
  const submitBtn = dormForm.querySelector(".dorm-btn-primary");

  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (confirm("Bạn chắc chắn muốn hủy đăng ký?")) {
      dormForm.reset();
      renderMonthTabs();
      renderBuildingList();
      renderRoomGrid();
      renderPriceTable();
    }
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    submitRegistration();
  });
}

function submitRegistration() {
  const formData = {
    academicYear: document.getElementById("academicYear").value,
    registrationRound: document.getElementById("registrationRound").value,
    registrationDate: document.getElementById("registrationDate").value,
    housingType: document.getElementById("housingType").value,
    bedNumber: document.getElementById("bedNumber").value,
    additionalNotes: document.getElementById("additionalNotes").value,
    selectedMonth: document.querySelector(".dorm-month-tab.active")
      ?.textContent,
    selectedBuilding: document.querySelector(".dorm-building-item.active")
      ?.textContent,
    selectedRoom: document.querySelector(".dorm-room-item.selected")
      ?.textContent,
  };

  if (
    !formData.academicYear ||
    !formData.registrationRound ||
    !formData.registrationDate
  ) {
    alert("Vui lòng điền đầy đủ thông tin bắt buộc");
    return;
  }
  alert("Đăng ký nội trú thành công!");
}

document.addEventListener("DOMContentLoaded", () => {
  renderMonthTabs();
  renderBuildingList();
  renderPriceTable();
  setupEventListeners();
  setupMobileToggle();
});

function setupMobileToggle() {
  const toggleBtn = document.getElementById("buildingToggle");
  const closeBtn = document.getElementById("buildingClose");
  const buildingList = document.getElementById("buildingList");

  if (toggleBtn && buildingList) {
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.add("d-none");
      buildingList.classList.add("show");
      // Scroll to building list
      if (window.innerWidth <= 576) {
        buildingList.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });

    const closeSidebar = () => {
      toggleBtn.classList.remove("d-none");
      buildingList.classList.remove("show");
    };

    if (closeBtn) {
      closeBtn.addEventListener("click", closeSidebar);
    }
  }
}
