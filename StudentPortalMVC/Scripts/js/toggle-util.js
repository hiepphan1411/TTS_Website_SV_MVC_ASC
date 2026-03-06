function toggleSection(header) {
    const icon = header.querySelector(".section-icon");
    const content = header.nextElementSibling;
    const summary = header.querySelector(".section-summary");

    document.querySelectorAll(".section-header").forEach((h) => {
        if (h !== header) {
            h.classList.remove("expanded");
            h.querySelector(".section-icon").classList.remove("rotated");
            h.nextElementSibling.classList.remove("active");

            const otherSummary = h.querySelector(".section-summary");
            if (otherSummary) {
                const summaryContent = otherSummary.querySelector(
                    '[id^="attendance-summary-"]',
                );
                if (summaryContent) {
                    summaryContent.style.display = "flex";
                }
            }
        }
    });

    const isExpanding = !header.classList.contains("expanded");
    header.classList.toggle("expanded");
    icon.classList.toggle("rotated");
    content.classList.toggle("active");

    if (summary) {
        const summaryContent = summary.querySelector('[id^="attendance-summary-"]');
        if (summaryContent) {
            summaryContent.style.display = isExpanding ? "none" : "flex";
        }
    }
}

$(function () {
    var tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]'),
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

window.toggleSection = toggleSection;
