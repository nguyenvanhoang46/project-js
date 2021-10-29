$(() => {
    $('.product-photos-item-link img').click(function() {
        let imgPath = $(this).attr('src');
        $('#main-img').attr('src', imgPath);
    })
})