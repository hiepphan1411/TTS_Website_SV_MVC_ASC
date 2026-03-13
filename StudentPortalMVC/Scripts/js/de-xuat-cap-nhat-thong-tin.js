const $ = window.jQuery;
const bootstrap = window.bootstrap;

// Declare variables
let clearFamilyForm = function () {
    $('#familyName').val('');
    $('#familyRelation').val('');
    $('#familyBirthYear').val('');
    $('#familyPhone').val('');
};

let clearCertificateForm = function () {
    $('#certNumber').val('');
    $('#certDate').val('');
    $('#certType').val('Không');
    $('#certProvince').val('Chọn nơi sinh');
};

function removeCertificate(button) {
    if (confirm('Bạn có chắc chắn muốn xóa bằng cấp này không?')) {
        $(button)
            .closest('.col-md-6')
            .fadeOut(300, function () {
                $(this).remove();
                showNotification('Xóa bằng cấp thành công', 'info');
            });
    }
}

function addCertificateItem() {
    const certificateHTML = `
        <div class="col-md-6 mb-3" style="display: none;">
            <div class="certificate-item-wrapper position-relative">
                <button
                    class="btn-remove-certificate"
                    onclick="removeCertificate(this)"
                    title="Xóa"
                >
                    <i class="fas fa-times"></i>
                </button>
                <div class="row g-3">
                    <div class="col-12">
                        <label class="form-label fw-500 mb-2">Số hiệu văn bằng</label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder=""
                            value=""
                        />
                    </div>
                    <div class="col-12">
                        <label class="form-label fw-500 mb-2">Ngày cấp</label>
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="01/01/2004"
                                value=""
                            />
                            <span class="input-group-text bg-white border-start-0">
                                <i class="far fa-calendar-alt text-muted"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    $('#certificateList').append(certificateHTML);
    $('#certificateList .col-md-6:last').fadeIn(300);
    showNotification('Đã thêm bằng cấp mới', 'success');
}

function removeFamily(button) {
    if (confirm('Bạn có chắc chắn muốn xóa thông tin gia đình này không?')) {
        $(button)
            .closest('.col-md-6')
            .fadeOut(300, function () {
                $(this).remove();
                showNotification('Xóa thông tin gia đình thành công', 'info');
            });
    }
}

function addFamilyItem() {
    const familyHTML = `
        <div class="col-md-6 mb-3" style="display: none;">
            <div class="family-item-wrapper position-relative">
                <button
                    class="btn-remove-family"
                    onclick="removeFamily(this)"
                    title="Xóa"
                >
                    <i class="fas fa-times"></i>
                </button>
                <div class="row g-3">
                    <div class="col-6">
                        <label class="form-label fw-500 mb-2">Họ và tên nhân thân</label>
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Nhập họ tên"
                            value=""
                        />
                    </div>
                    <div class="col-6">
                        <label class="form-label fw-500 mb-2">Mối quan hệ</label>
                        <select class="form-select">
                            <option selected>Chọn</option>
                            <option>Cha</option>
                            <option>Mẹ</option>
                            <option>Anh</option>
                            <option>Em</option>
                            <option>Chị</option>
                        </select>
                    </div>
                    <div class="col-6">
                        <label class="form-label fw-500 mb-2">Năm sinh</label>
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="yyyy"
                                value=""
                            />
                            <span class="input-group-text bg-white border-start-0">
                                <i class="far fa-calendar-alt text-muted"></i>
                            </span>
                        </div>
                    </div>
                    <div class="col-6">
                        <label class="form-label fw-500 mb-2">Số điện thoại di động</label>
                        <input
                            type="tel"
                            class="form-control"
                            placeholder="Nhập số điện thoại"
                            value=""
                        />
                    </div>
                </div>
            </div>
        </div>
    `;

    $('#familyList').append(familyHTML);
    $('#familyList .col-md-6:last').fadeIn(300);
    showNotification('Đã thêm quan hệ gia đình mới', 'success');
}

function showNotification(message, type = 'info') {
    const alertClass =
        type === 'success'
            ? 'alert-success'
            : type === 'error'
                ? 'alert-danger'
                : 'alert-info';

    const alertHTML = `
        <div class="alert ${alertClass} alert-dismissible fade show" role="alert" style="position: fixed; top: 20px; right: 20px; z-index: 9999; min-width: 280px; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);">
            ${escapeHtml(message)}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    $('body').append(alertHTML);

    setTimeout(() => {
        $('.alert:last').fadeOut(300, function () {
            $(this).remove();
        });
    }, 4000);
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}

$(function () {
    bindEventHandlers();
});

function bindEventHandlers() {
    // Modal cleanup
    $(document).on('show.bs.modal', '#familyModal', function () {
        clearFamilyForm();
        $('#familyName').focus();
    });

    $(document).on('show.bs.modal', '#certificateModal', function () {
        clearCertificateForm();
        $('#certNumber').focus();
    });

    $(document).on('input', '#familyPhone', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    $(document).on('input', '#familyBirthYear', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (this.value.length > 4) {
            this.value = this.value.slice(0, 4);
        }
    });

    $('#personalForm').on('submit', function (e) {
        e.preventDefault();
        saveForm($(this));
    });
}

//thêm quan hệ gia đình
function addFamilyMember() {
    const name = $('#familyName').val().trim();
    const relation = $('#familyRelation').val().trim();
    const birthYear = $('#familyBirthYear').val().trim();
    const phone = $('#familyPhone').val().trim();

    if (!name) {
        showNotification('Vui lòng nhập họ và tên nhân thân', 'error');
        $('#familyName').focus();
        return;
    }

    if (!relation) {
        showNotification('Vui lòng chọn mối quan hệ', 'error');
        $('#familyRelation').focus();
        return;
    }

    if (!birthYear || birthYear.length !== 4 || isNaN(birthYear)) {
        showNotification('Vui lòng nhập năm sinh hợp lệ (4 chữ số)', 'error');
        $('#familyBirthYear').focus();
        return;
    }

    if (phone && !/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
        showNotification(
            'Vui lòng nhập số điện thoại hợp lệ (10 chữ số)',
            'error',
        );
        $('#familyPhone').focus();
        return;
    }
    const familyCard = `
        <div class="col-md-6 mb-4">
            <div class="card border-light shadow-sm family-item">
                <div class="card-body">
                    <button type="button" class="btn btn-sm btn-danger float-end" onclick="removeFamily(this)">×</button>
                    <div class="mb-3">
                        <label class="form-label fw-500">Họ và tên nhân thân</label>
                        <input type="text" class="form-control" placeholder="Nhập họ tên" value="${escapeHtml(name)}" readonly>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-500">Mối quan hệ</label>
                        <select class="form-select">
                            <option value="">Chọn</option>
                            <option value="Cha" ${relation === 'Cha' ? 'selected' : ''}>Cha</option>
                            <option value="Mẹ" ${relation === 'Mẹ' ? 'selected' : ''}>Mẹ</option>
                            <option value="Anh" ${relation === 'Anh' ? 'selected' : ''}>Anh</option>
                            <option value="Em" ${relation === 'Em' ? 'selected' : ''}>Em</option>
                            <option value="Chị" ${relation === 'Chị' ? 'selected' : ''}>Chị</option>
                            <option value="Cô" ${relation === 'Cô' ? 'selected' : ''}>Cô</option>
                            <option value="Chú" ${relation === 'Chú' ? 'selected' : ''}>Chú</option>
                            <option value="Dì" ${relation === 'Dì' ? 'selected' : ''}>Dì</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-500">Năm sinh</label>
                        <input type="text" class="form-control" placeholder="yyyy" value="${escapeHtml(birthYear)}" readonly>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-500">Số điện thoại di động</label>
                        <input type="tel" class="form-control" placeholder="Nhập số điện thoại" value="${escapeHtml(phone)}">
                    </div>
                </div>
            </div>
        </div>
    `;

    $('#familyList').append(familyCard);

    clearFamilyForm();

    const familyModal = document.getElementById('familyModal');
    const modal = bootstrap.Modal.getInstance(familyModal);
    if (modal) {
        modal.hide();
    }

    showNotification('Thêm quan hệ gia đình thành công', 'success');
}

// thêm bằng cấp
function addCertificate() {
    const certNumber = $('#certNumber').val().trim();
    const certDate = $('#certDate').val().trim();
    const certType = $('#certType').val().trim();
    const certProvince = $('#certProvince').val().trim();

    if (!certNumber) {
        showNotification('Vui lòng nhập số hiệu văn bằng', 'error');
        $('#certNumber').focus();
        return;
    }

    if (!certDate) {
        showNotification('Vui lòng nhập ngày cấp', 'error');
        $('#certDate').focus();
        return;
    }

    const certificateCard = `
        <div class="card mb-3 border-light shadow-sm certificate-item">
            <div class="card-body">
                <button type="button" class="btn btn-sm btn-danger float-end" onclick="removeCertificate(this)">×</button>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label fw-500">Số hiệu văn bằng</label>
                        <input type="text" class="form-control" placeholder="VD: 123456789" value="${escapeHtml(certNumber)}" readonly>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label fw-500">Ngày cấp</label>
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="dd/mm/yyyy" value="${escapeHtml(certDate)}" readonly>
                            <span class="input-group-text bg-white">📅</span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label class="form-label fw-500">Tên giáo dục</label>
                        <select class="form-select">
                            <option ${certType === 'Không' ? 'selected' : ''}>Không</option>
                            <option ${certType === 'Đại học' ? 'selected' : ''}>Đại học</option>
                            <option ${certType === 'Cao đẳng' ? 'selected' : ''}>Cao đẳng</option>
                            <option ${certType === 'Trung cấp' ? 'selected' : ''}>Trung cấp</option>
                        </select>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label class="form-label fw-500">Nơi sinh Tỉnh/Thành phố</label>
                        <select class="form-select">
                            <option ${certProvince === 'Chọn nơi sinh' ? 'selected' : ''}>Chọn nơi sinh</option>
                            <option ${certProvince === 'Hà Nội' ? 'selected' : ''}>Hà Nội</option>
                            <option ${certProvince === 'TP. Hồ Chí Minh' ? 'selected' : ''}>TP. Hồ Chí Minh</option>
                            <option ${certProvince === 'Đà Nẵng' ? 'selected' : ''}>Đà Nẵng</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    `;

    $('#certificateList').append(certificateCard);

    clearCertificateForm();

    const certificateModal = document.getElementById('certificateModal');
    const modal = bootstrap.Modal.getInstance(certificateModal);
    if (modal) {
        modal.hide();
    }

    showNotification('Thêm bằng cấp thành công', 'success');
}

function saveForm(form) {
    const formData = new FormData(form[0]);
    const data = Object.fromEntries(formData);

    showNotification('Lưu thông tin thành công', 'success');
}

function showNotification(message, type = 'info') {
    const alertClass =
        type === 'success'
            ? 'alert-success'
            : type === 'error'
                ? 'alert-danger'
                : 'alert-info';

    const alertHTML = `
        <div class="alert ${alertClass} alert-dismissible fade show" role="alert" style="position: fixed; top: 20px; right: 20px; z-index: 9999; min-width: 280px; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);">
            ${escapeHtml(message)}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    $('body').append(alertHTML);

    setTimeout(() => {
        $('.alert:last').fadeOut(300, function () {
            $(this).remove();
        });
    }, 4000);
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}

$(document).on('click', '.btn-primary:not([data-bs-toggle])', function (e) {
    if ($(this).text().includes('Lưu')) {
        e.preventDefault();

        showNotification('Lưu thông tin thành công', 'success');
    }
});

$(document).on('click', '.btn-outline-secondary', function (e) {
    e.preventDefault();

    showNotification('Đã hủy các thay đổi', 'info');
});

$(document).on(
    'keypress',
    '.form-control:not(textarea), .form-select',
    function (e) {
        if (e.which === 13) {
            e.preventDefault();
            return false;
        }
    },
);

$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');

    $(this).addClass('active');

    const tabContent = $($(this).attr('data-bs-target'));
    $('.tab-pane').not(tabContent).fadeOut(100);
    tabContent.fadeIn(100);
});

$(window).on('resize', function () {
    if ($(window).width() < 768) {
    } else {
    }
});
