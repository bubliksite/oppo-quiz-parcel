$('document').ready(function($) {
    var currentURL = window.location.origin
    if (currentURL == 'http://reno4.oppo.ru' || currentURL == 'https://reno4.oppo.ru') {
        if (Date.now() > '1601542800000') {
            $('.nav-link a').removeClass('disabled')
            $('#testYourself').removeClass('d-none')
            $('#oppo-gift a').attr('href', '#product')
            $('#product').removeClass('d-none')
            $('footer').removeClass('d-none')
        }
        if (Date.now() > '1601618400000') {
            //$('#partners div').removeClass('d-none')
            //$('.nav-item').removeClass('d-none')
        }
        if (Date.now() > '1602187200000') {
            //Действия на 23:00 08.10.20 (запуск продаж)
        }
        if (Date.now() > '1604178000000') {
            //Действия на 00:00 01.11.20 (окончание акции)
        }
    } else {
        $('.nav-link').removeClass('disabled')
        $('.nav-item').removeClass('d-none')
        $('#testYourself').removeClass('d-none')
        $('#oppo-gift a').attr('href', '#product')
        $('#product').removeClass('d-none')
        $('footer').removeClass('d-none')
        $('#partners div').removeClass('d-none')
    }
})