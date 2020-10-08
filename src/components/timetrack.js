$('document').ready(function($) {
    var currentURL = window.location.origin
    if (currentURL == 'http://reno4.oppo.ru' || currentURL == 'https://reno4.oppo.ru' || currentURL == 'https://www.reno4.oppo.ru') {
        let isLaunch = true
        if (isLaunch) {
            $('.nav-link').removeClass('disabled')
            $('#testYourself').removeClass('d-none')
            $('#oppo-gift a').attr('href', '#product')
            $('#product').removeClass('d-none')
            $('footer').removeClass('d-none')
        }
        let isProd = true
        if (isProd) {
            $('#partners div').removeClass('d-none')
            $('.old-image').addClass('d-none')
            $('.new-image').removeClass('d-none')
            $('.changeBuy').text('Купить')
        }
        if (Date.now() > '1604178000000') {
            //Действия на 00:00 01.11.20 (окончание акции)
        }
    } else {
        $('.nav-link').removeClass('disabled')
        $('#testYourself').removeClass('d-none')
        $('#oppo-gift a').attr('href', '#product')
        $('#product').removeClass('d-none')
        $('footer').removeClass('d-none')
        $('#partners div').removeClass('d-none')
        $('.old-image').addClass('d-none')
        $('.new-image').removeClass('d-none')
        $('.changeBuy').text('Купить')
    }
})