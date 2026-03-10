(function ($) {
    'use strict';

    function showDetail(data) {

        $('#detailCode').text(data.code);
        $('#detailDate').text(data.date);
        $('#detailStatus').text(data.status);
        $('#detailTotal').text(data.amount);

        if (data.status === 'Thành công') {
            $('#detailStatus')
                .removeClass()
                .addClass('info-value success');
        }
        var modal = new bootstrap.Modal(document.getElementById('detailModal'));
        modal.show();
    }

    $(function () {

        $(document).on('click', '.view-detail-btn', function () {

            var data = {
                code: $(this).data('code'),
                date: $(this).data('date'),
                status: $(this).data('status'),
                amount: $(this).data('amount')
            };

            showDetail(data);

        });

    });

})(jQuery);