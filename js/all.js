$(document).ready(function () {
    // 漢堡選單
    $('.ham-icon').click(function(e) {
        e.preventDefault();
        $('.navbar').toggleClass('active')
    })
});