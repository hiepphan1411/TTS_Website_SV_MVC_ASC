let chartData = [];

function getBarPercentage(used, allowed) {
  if (allowed === 0) return 0;
  const percentage = (used / allowed) * 100;
  return Math.min(percentage, 100);
}

function getBarStatus(used, allowed) {
  if (used === 0 || allowed === 0) {
    return "empty";
  }
  const percentage = (used / allowed) * 100;

  if (percentage >= 100) {
    return "danger"; // Red - đã nghỉ >= qui định
  }
  if (percentage > 50) {
    return "warning"; // Yellow - đã nghỉ > 50%
  }
  return "success"; // Green/Blue - còn ổn
}

function renderBarChart(actual, allowed, isValid) {
  const percentage = getBarPercentage(actual, allowed);
  const status = getBarStatus(actual, allowed);

  let bottomText = "";

  // Determine color based on status
  let barColor = "";
  if (status === "danger") {
    barColor = "#E61515";
    bottomText = "Nghỉ quá số phép qui định";
  } else if (status === "warning") {
    barColor = "#F59E0B";
    bottomText = actual + "/" + allowed + " số tiết đã nghỉ";
  } else if (status === "success") {
    barColor = "#3a74f0";
    bottomText = actual + "/" + allowed + " số tiết đã nghỉ";
  } else {
    barColor = "#F1F5F9";
  }

  if (actual > allowed) {
    actual = allowed;
  }

  return `
    <div style="display: flex; flex-direction: column; align-items: start; width:100%; gap: 5px;">
      <div style="flex: 1; min-width: 100%;">
        <div style="position: relative; height: 16px; background-color: #F1F5F9; border-radius: 10px; overflow: hidden;">
          <!-- progress bar -->
          <div style="position: absolute; top: 0; left: 0; height: 100%;
            width: ${percentage}%; background-color: ${barColor}; transition: width 0.3s ease;"></div>

          <!-- percentage text -->
          <span style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
            font-size: 10px; font-weight: 500; color: ${percentage > 50 ? "white" : "#505050"}; z-index: 2;">
            ${percentage}%
          </span>
        </div>
      </div>

      <div style="white-space: nowrap; color: #8E8E8E" class="fw-medium">
        <span>${bottomText}</span>
      </div>
    </div>
  `;
}

window.ChartUtils = {
  getBarPercentage,
  getBarStatus,
  renderBarChart,
};
