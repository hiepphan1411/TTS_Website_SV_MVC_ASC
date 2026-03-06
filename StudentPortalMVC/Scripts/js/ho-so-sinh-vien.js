$(document).ready(function () {
    $('.btn-detail').on('click', function () {
        var title = $(this).data('title');
        $('#detailModalLabel').text(title);
    });

    $('.btn-upload-file').on('click', function () {
        $('#fileInput').click();
    });
});