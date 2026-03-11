; (function ($) {
    'use strict';

    function toggleMessage(id) {
        var $target = $('#message-' + id);

        $('.message-content').not($target).removeClass('show');
        $target.toggleClass('show');
    }

    function sendReply($btn) {
        var $textarea = $btn.closest('.message-content').find('.reply-input');

        if ($textarea.val().trim()) {
            alert('Phản hồi đã được gửi!');
            $textarea.val('');
        } else {
            alert('Vui lòng nhập nội dung phản hồi');
        }
    }

    function submitMessage() {
        var form = document.getElementById('messageForm');
        if (form.checkValidity()) {
            alert('Gửi tin nhắn thành công!');
            bootstrap.Modal.getInstance(document.getElementById('createMessageModal')).hide();
            form.reset();
            $('.file-attach span').text('File đính kèm');
        } else {
            form.reportValidity();
        }
    }

    $(function () {

        $(document).on('click', '.message-item', function () {
            var id = $(this).closest('.message-card').find('.message-content').attr('id').replace('message-', '');
            toggleMessage(id);
        });

 
        $(document).on('click', '.send-btn', function () {
            sendReply($(this));
        });

        $(document).on('click', '.attach-btn', function () {
            $(this).siblings('input[type="file"]').trigger('click');
        });

        $(document).on('click', '.file-attach', function () {
            $('#messageFileInput').trigger('click');
        });

        $(document).on('change', '#messageFileInput', function () {
            var count = this.files.length;
            if (count > 0) {
                $('.file-attach span').text(count + ' file(s) đã chọn');
            }
        });

        $(document).on('change', 'input[type="file"][id^="replyFile"]', function () {
            var count = this.files.length;
            if (count > 0) {
                $(this).siblings('.attach-btn').html('<i class="bi bi-paperclip"></i> ' + count + ' file(s) đã chọn');
            }
        });

        $(document).on('click', '.btn-modal-submit', submitMessage);
    });

})(jQuery);