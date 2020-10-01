$('document').ready(function($) {
    $('#menu-button').click(function () {
        $('#mobile-menu').css('transform', 'translateX(-100vw)');
        $('header').css('transform', 'translateX(-100vw)');
        $('#main').css('transform', 'translateX(-100vw)');
        $('#content').css('transform', 'translateX(-100vw)');

    })
    $('#menu-back').click(function () {
        $('#mobile-menu').css('transform', 'translateX(0)');
        $('header').css('transform', 'translateX(0)');
        $('#main').css('transform', 'translateX(0)');
        $('#content').css('transform', 'translateX(0)');
    })
    $('#mobile-menu .nav-link').click(function () {
        $('#mobile-menu').css('transform', 'translateX(0)');
        $('header').css('transform', 'translateX(0)');
        $('#main').css('transform', 'translateX(0)');
        $('#content').css('transform', 'translateX(0)');
    })
})