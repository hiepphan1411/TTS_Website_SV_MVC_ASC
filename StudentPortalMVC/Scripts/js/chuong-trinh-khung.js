var ChuongTrinhKhung = (function () {
    'use strict';

    var progressData = null;
    var currentAcademicYear = '';
    var timelineData = [];
    var chartData = null;
    var knowledgeBlocksData = null;

    // Data demo
    var dataUrls = {
        progressData: '',
        hocKy: '',
        khoiKienThuc: '',
    };

    function setUrls(urls) {
        dataUrls = urls;
    }

    function loadProgressData() {
        return $.getJSON(dataUrls.progressData)
            .then(function (data) {
                progressData = data.progressData;
                currentAcademicYear = data.currentAcademicYear;
                timelineData = data.timelineData;
                chartData = data.chartData;
                knowledgeBlocksData = data.knowledgeBlocks;
                return data;
            })
            .fail(function () {
                console.error('Loi khi tai du lieu tien do.');
            });
    }

    function renderProgress() {
        if (!progressData) return;

        var ids = [
            'totalCredits',
            'completedCredits',
            'currentCredits',
            'remainingCredits',
            'progressDiff',
        ];
        var keys = [
            'totalCredits',
            'completedCredits',
            'currentCredits',
            'remainingCredits',
            'progressDiff',
        ];

        $.each(ids, function (i, id) {
            var el = document.getElementById(id);
            if (el) el.textContent = progressData[keys[i]];
        });

        var overallEl = document.getElementById('overallPercentage');
        if (overallEl) {
            var percent = (
                (progressData.completedCredits / progressData.totalCredits) *
                100
            ).toFixed(1);
            overallEl.textContent = percent + '%';
        }
    }

    function initKendoChart() {
        if (!chartData || typeof $ === 'undefined' || !$.fn.kendoChart) return;

        $('#chart').kendoChart({
            chartArea: { height: 30, background: '#f4fbff' },
            legend: { visible: false },
            seriesDefaults: { type: 'bar', stack: true },
            series: [
                { data: [chartData.completed], color: '#2865EB' },
                { data: [chartData.current], color: '#ffb800' },
                { data: [chartData.remaining], color: '#e0e0e0' },
            ],
            valueAxis: {
                min: 0,
                max: 100,
                visible: false,
                majorGridLines: { visible: false },
                minorGridLines: { visible: false },
            },
            categoryAxis: {
                categories: [''],
                visible: false,
                majorGridLines: { visible: false },
                minorGridLines: { visible: false },
            },
            tooltip: { visible: true, template: '#= value #%' },
            dataBound: function () {
                $('#chart svg')
                    .find('rect[fill]')
                    .each(function () {
                        var rect = $(this);
                        if (
                            rect.attr('fill') &&
                            !rect.attr('fill').includes('url')
                        ) {
                            rect.attr('rx', 8);
                            rect.attr('ry', 8);
                        }
                    });
            },
        });
    }

    /* Timeline */

    function getCircleStyles(sem) {
        var completedPercent = (sem.completedCredits / sem.totalCredits) * 100;
        var currentPercent = (sem.currentCredits / sem.totalCredits) * 100;
        var totalPercent = completedPercent + currentPercent;

        var circleClass = '';
        var circleStyle = '';

        if (sem.status === 'completed' && sem.progress === 100) {
            circleClass = 'completed';
        } else if (sem.status === 'active' && sem.completedCredits === 0) {
            circleClass = 'active';
        } else if (
            (sem.status === 'mixed' || totalPercent > 0) &&
            sem.completedCredits > 0 &&
            sem.currentCredits > 0
        ) {
            circleClass = 'partial-mixed';
            circleStyle =
                'style="--progress-green: ' +
                completedPercent +
                '; --progress-total: ' +
                totalPercent +
                '"';
        } else if (
            sem.completedCredits > 0 &&
            sem.completedCredits < sem.totalCredits
        ) {
            circleClass = 'partial-green';
            circleStyle = 'style="--progress-green: ' + completedPercent + '"';
        } else if (sem.currentCredits > 0 && sem.completedCredits === 0) {
            circleClass = 'partial-yellow';
            circleStyle = 'style="--progress-yellow: ' + currentPercent + '"';
        } else {
            circleClass = 'future';
        }

        return {
            circleClass: circleClass,
            circleStyle: circleStyle,
            completedPercent: completedPercent,
            currentPercent: currentPercent,
            totalPercent: totalPercent,
        };
    }

    function buildProgressBarHTML(
        completedPercent,
        currentPercent,
        totalPercent,
    ) {
        var html = '';
        var textClass = '';

        if (completedPercent > 0 && currentPercent > 0) {
            html =
                '<div class="timeline-progress-segment completed" style="width: ' +
                completedPercent +
                '%;"></div>' +
                '<div class="timeline-progress-segment active" style="width: ' +
                currentPercent +
                '%;"></div>';
            textClass = totalPercent > 50 ? 'light' : '';
        } else if (completedPercent > 0) {
            html =
                '<div class="timeline-progress-segment completed" style="width: ' +
                completedPercent +
                '%;"></div>';
            textClass = completedPercent > 50 ? 'light' : '';
        } else if (currentPercent > 0) {
            html =
                '<div class="timeline-progress-segment active" style="width: ' +
                currentPercent +
                '%;"></div>';
            textClass = currentPercent > 50 ? 'light' : '';
        }

        return { html: html, textClass: textClass };
    }

    function renderTimeline() {
        var container = document.getElementById('timelineItems');
        var markersContainer = document.getElementById('timelineYearMarkers');
        var trackProgress = document.getElementById('timelineTrackProgress');

        if (!container || !markersContainer || !trackProgress) return;
        container.innerHTML = '';
        markersContainer.innerHTML = '';

        var yearGroups = {};
        $.each(timelineData, function (_, sem) {
            if (!yearGroups[sem.year]) yearGroups[sem.year] = [];
            yearGroups[sem.year].push(sem);
        });

        var uniqueYears = Object.keys(yearGroups);
        var totalSemesters = timelineData.length;

        var currentYearIndex = $.inArray(currentAcademicYear, uniqueYears);
        if (currentYearIndex >= 0) {
            var firstSemIdx = -1;
            $.each(timelineData, function (i, s) {
                if (s.year === currentAcademicYear && firstSemIdx < 0)
                    firstSemIdx = i;
            });
            trackProgress.style.width =
                ((firstSemIdx + 1) / totalSemesters) * 100 + '%';
        }

        $.each(timelineData, function (_, sem) {
            var item = document.createElement('div');
            item.className = 'timeline-item';
            item.setAttribute('data-semester', sem.semester);
            item.style.cursor = 'pointer';

            var styles = getCircleStyles(sem);
            var progressBar = buildProgressBarHTML(
                styles.completedPercent,
                styles.currentPercent,
                styles.totalPercent,
            );
            var displayPercent = Math.round(styles.totalPercent);
            var displayCredits =
                sem.completedCredits +
                sem.currentCredits +
                '/' +
                sem.totalCredits;

            item.innerHTML =
                '<div class="timeline-circle-wrapper">' +
                '  <div class="timeline-circle ' +
                styles.circleClass +
                '" ' +
                styles.circleStyle +
                '>' +
                '    <span>HK' +
                sem.semester +
                '</span>' +
                '  </div>' +
                '</div>' +
                '<div class="timeline-info">' +
                '  <div class="timeline-semester">H\u1ecdc k\u1ef3 ' +
                sem.semester +
                '</div>' +
                '  <div class="timeline-credits">' +
                displayCredits +
                ' t\u00edn ch\u1ec9</div>' +
                '</div>' +
                '<div class="timeline-progress">' +
                '  <div class="timeline-progress-bar">' +
                progressBar.html +
                '    <div class="timeline-progress-text ' +
                progressBar.textClass +
                '">' +
                displayPercent +
                '%</div>' +
                '  </div>' +
                '</div>';

            container.appendChild(item);
        });

        // Năm bắt đầu
        var startMarker = document.createElement('div');
        startMarker.className = 'timeline-year-marker';
        startMarker.style.left = '0%';
        startMarker.innerHTML =
            '<div class="timeline-year-dot current"></div><div class="timeline-year-label">9/2022</div>';
        markersContainer.appendChild(startMarker);

        // Năm tiếp theo
        $.each(uniqueYears, function (_, year) {
            var firstSemIndex = -1;
            $.each(timelineData, function (i, s) {
                if (s.year === year && firstSemIndex < 0) firstSemIndex = i;
            });
            var positionPercent = ((firstSemIndex + 1) / totalSemesters) * 100;

            var marker = document.createElement('div');
            marker.className = 'timeline-year-marker';
            marker.style.left = positionPercent + '%';

            var dotClass = year <= currentAcademicYear ? 'current' : 'future';
            var semestersList = $.map(yearGroups[year], function (s) {
                return 'HK' + s.semester;
            }).join(', ');

            if (positionPercent === 100) {
                marker.innerHTML = '';
            } else {
                marker.innerHTML =
                    '<div class="timeline-year-dot ' +
                    dotClass +
                    '"></div>' +
                    '<div class="timeline-year-label">' +
                    year +
                    '</div>' +
                    '<div class="timeline-year-semesters">' +
                    semestersList +
                    '</div>';
            }
            markersContainer.appendChild(marker);
        });

        // Năm kết thúc
        var endMarker = document.createElement('div');
        endMarker.className = 'timeline-year-marker';
        endMarker.style.left = '100%';
        endMarker.innerHTML =
            '<div class="timeline-year-dot ' +
            (currentYearIndex >= 0 ? 'future' : 'current') +
            '"></div>' +
            '<div class="timeline-year-label">6/2028</div>';
        markersContainer.appendChild(endMarker);

        var minItemWidth = 140;
        var totalMinWidth = totalSemesters * minItemWidth;
        container.style.minWidth = totalMinWidth + 'px';
        var trackContainerEl = document.querySelector(
            '.timeline-track-container',
        );
        if (trackContainerEl) {
            trackContainerEl.style.minWidth = totalMinWidth + 'px';
        }
    }

    /* Mobile Timeline */
    function handleResize() {
        var isMobile = window.innerWidth <= 768;
        var container = document.querySelector('.timeline-container');
        if (!container) return;

        var wrapper = container.querySelector('.timeline-wrapper');
        var mobileTimeline = container.querySelector('.timeline-mobile');

        if (isMobile) {
            if (wrapper) wrapper.style.display = 'none';
            if (!mobileTimeline) {
                mobileTimeline = document.createElement('div');
                mobileTimeline.className = 'timeline-mobile';
                container.appendChild(mobileTimeline);
            }
            renderMobileTimeline();

            setTimeout(function () {
                $('.timeline-semester-card').on('click', function () {
                    var semester = $(this).attr('data-semester');
                    scrollToSemester(semester);
                });
            }, 100);
        } else {
            if (wrapper) wrapper.style.display = 'block';
            if (mobileTimeline) $(mobileTimeline).remove();
        }
    }

    function renderMobileTimeline() {
        var container = document.querySelector('.timeline-mobile');
        if (!container) return;

        container.innerHTML = '';

        var yearGroups = {};
        $.each(timelineData, function (_, sem) {
            if (!yearGroups[sem.year]) yearGroups[sem.year] = [];
            yearGroups[sem.year].push(sem);
        });

        var uniqueYears = Object.keys(yearGroups);
        var totalYears = uniqueYears.length;
        var currentYearIndex = $.inArray(currentAcademicYear, uniqueYears);

        $.each(uniqueYears, function (yearIndex, year) {
            var yearSems = yearGroups[year];
            var dotClass = year <= currentAcademicYear ? 'current' : 'future';

            var progressPercent = (yearIndex / totalYears) * 100 + 3;
            if (yearIndex === currentYearIndex && currentYearIndex >= 0) {
                container.style.setProperty(
                    '--progress-percent',
                    progressPercent + '%',
                );
            } else if (currentYearIndex < 0) {
                container.style.setProperty('--progress-percent', '100%');
            }

            var yearGroup = document.createElement('div');
            yearGroup.className = 'timeline-year-group';

            var yearMarker = document.createElement('div');
            yearMarker.className = 'timeline-year-marker-mobile';
            yearMarker.innerHTML =
                '<div class="timeline-year-dot ' + dotClass + '"></div>';
            yearGroup.appendChild(yearMarker);

            var semestersContainer = document.createElement('div');
            semestersContainer.className = 'timeline-semesters-horizontal';

            $.each(yearSems, function (_, sem) {
                var card = document.createElement('div');
                card.className = 'timeline-semester-card';
                card.setAttribute('data-semester', sem.semester);
                card.style.cursor = 'pointer';

                var styles = getCircleStyles(sem);
                var progressBar = buildProgressBarHTML(
                    styles.completedPercent,
                    styles.currentPercent,
                    styles.totalPercent,
                );

                if (sem.status === 'completed' && sem.progress === 100)
                    card.classList.add('completed');
                else if (sem.status === 'active') card.classList.add('active');
                else if (sem.status === 'mixed') card.classList.add('mixed');

                var displayPercent = Math.round(styles.totalPercent);
                var displayCredits =
                    sem.completedCredits +
                    sem.currentCredits +
                    '/' +
                    sem.totalCredits;

                card.innerHTML =
                    '<div class="timeline-circle ' +
                    styles.circleClass +
                    '" ' +
                    styles.circleStyle +
                    '>' +
                    '  <span>HK' +
                    sem.semester +
                    '</span>' +
                    '</div>' +
                    '<div class="timeline-info">' +
                    '  <div class="timeline-semester">H\u1ecdc k\u1ef3 ' +
                    sem.semester +
                    '</div>' +
                    '  <div class="timeline-credits">' +
                    displayCredits +
                    ' t\u00edn ch\u1ec9</div>' +
                    '</div>' +
                    '<div class="timeline-progress">' +
                    '  <div class="timeline-progress-bar">' +
                    progressBar.html +
                    '    <div class="timeline-progress-text ' +
                    progressBar.textClass +
                    '">' +
                    displayPercent +
                    '%</div>' +
                    '  </div>' +
                    '</div>' +
                    '<div class="semester-tooltip">' +
                    '  <div class="tooltip-row"><span class="tooltip-label">H\u1ecdc k\u1ef3:</span><span class="tooltip-value">HK' +
                    sem.semester +
                    '</span></div>' +
                    '  <div class="tooltip-row"><span class="tooltip-label">\u0110\u00e3 h\u1ecdc:</span><span class="tooltip-value">' +
                    sem.completedCredits +
                    '/' +
                    sem.totalCredits +
                    ' TC</span></div>' +
                    '  <div class="tooltip-row"><span class="tooltip-label">\u0110ang h\u1ecdc:</span><span class="tooltip-value">' +
                    sem.currentCredits +
                    ' TC</span></div>' +
                    '</div>';

                semestersContainer.appendChild(card);
            });

            yearGroup.appendChild(semestersContainer);
            container.appendChild(yearGroup);
        });
    }

    function addTimelineClickHandlers() {
        $('.timeline-item').on('click', function () {
            var semester = $(this).attr('data-semester');
            scrollToSemester(semester);
        });
    }

    function scrollToSemester(semester) {
        var semesterTab = document.querySelector('.tab-btn:first-child');
        if (semesterTab && !semesterTab.classList.contains('active')) {
            semesterTab.click();
        }

        setTimeout(function () {
            var sections = document.querySelectorAll('.expandable-section');
            var targetSection = null;

            sections.forEach(function (section) {
                var headerText = section.querySelector('.section-header-text');
                if (
                    headerText &&
                    headerText.textContent.indexOf(
                        'H\u1ecdc k\u1ef3 ' + semester,
                    ) >= 0
                ) {
                    targetSection = section;
                }
            });

            if (targetSection) {
                var header = targetSection.querySelector('.section-header');
                if (!header.classList.contains('expanded')) {
                    header.click();
                }

                setTimeout(function () {
                    var headerHeight = 70;
                    var headerEl = document.querySelector('.header-container');
                    if (headerEl) headerHeight = headerEl.offsetHeight;
                    var y =
                        targetSection.getBoundingClientRect().top +
                        window.pageYOffset -
                        headerHeight -
                        20;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                    highlightIncompleteCourses(targetSection);
                }, 100);
            }
        }, 200);
    }

    function highlightIncompleteCourses(section) {
        $('.highlight-incomplete').removeClass('highlight-incomplete');

        $(section)
            .find('tbody tr')
            .each(function () {
                var row = $(this);
                var completedCell = row.find('td:last-child');
                if (
                    completedCell.length &&
                    !completedCell.find('.checkmark').length
                ) {
                    row.addClass('highlight-incomplete');
                    setTimeout(function () {
                        row.removeClass('highlight-incomplete');
                    }, 3000);
                }
            });
    }

    function initBootstrapTooltips() {
        if (typeof bootstrap === 'undefined') return;
        $('[data-bs-toggle="tooltip"]').each(function () {
            new bootstrap.Tooltip(this);
        });
    }

    function getKnowledgeBlocksData() {
        return knowledgeBlocksData;
    }

    function init() {
        return loadProgressData().then(function () {
            renderProgress();
            KhoiKienThuc.renderKnowledgeBlocksOverview();
            initKendoChart();
            renderTimeline();
            handleResize();
            setTimeout(addTimelineClickHandlers, 100);
            initBootstrapTooltips();
        });
    }

    // Public API
    return {
        setUrls: setUrls,
        init: init,
        scrollToSemester: scrollToSemester,
        getCircleStyles: getCircleStyles,
        buildProgressBarHTML: buildProgressBarHTML,
        getKnowledgeBlocksData: getKnowledgeBlocksData,
        handleResize: handleResize,
    };
})();

window.scrollToSemester = function (semester) {
    ChuongTrinhKhung.scrollToSemester(semester);
};

$(window).on('resize', function () {
    ChuongTrinhKhung.handleResize();
});
