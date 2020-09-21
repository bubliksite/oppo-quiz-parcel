$(document).ready(function() {

    var patternEmail = /^[a-z0-9_.-]+@[a-z0-9_.-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

    $('#name').keyup(function () {
        if ($(this).val() != ''){
            if ($(this).val().length < 2) {
                $(this).addClass('is-invalid')
                $('#nameHelp').addClass('invalid-feedback')
                $('#nameHelp').text('Введите имя')
            } else if ($(this).val().length >= 2) {
                $(this).addClass('is-valid')
                $(this).removeClass('is-invalid')
                $('#nameHelp').addClass('valid-feedback')
                $('#nameHelp').removeClass('invalid-feedback')
                $('#nameHelp').text('Все верно!')
            }
        } else {
            $(this).addClass('is-invalid')
            $('#nameHelp').addClass('invalid-feedback')
            $('#nameHelp').text('Поле имя не должно быть пустым')
        }
        listenToEnableSend()
    })

    $('#email').keyup(function(){
        if ($(this).val() != ''){
            if ($(this).val().search(patternEmail) == 0){
                $(this).addClass('is-valid')
                $(this).removeClass('is-invalid')
                $('#emailHelp').addClass('valid-feedback')
                $('#emailHelp').removeClass('invalid-feedback')
                $('#emailHelp').text('Адрес введен верно')
            } else {
                $(this).addClass('is-invalid')
                $('#emailHelp').addClass('invalid-feedback')
                $('#emailHelp').text('Введи корректный адрес')
            }
        } else {
            $(this).addClass('is-invalid')
            $('#emailHelp').addClass('invalid-feedback')
            $('#emailHelp').text('Поле адрес обязательное')
        }
        listenToEnableSend()
    });

    $('#link').keyup(function () {
        if ($(this).val() != ''){
            $(this).addClass('is-valid')
            $(this).removeClass('is-invalid')
            $('#linkHelp').addClass('valid-feedback')
            $('#linkHelp').removeClass('invalid-feedback')
            $('#linkHelp').text('')
        } else {
            $(this).addClass('is-invalid')
            $('#linkHelp').addClass('invalid-feedback')
            $('#linkHelp').text('Поле ссылка не должно быть пустым')
        }
        listenToEnableSend()
    })

    function listenToEnableSend() {
        if ($('#name').hasClass('is-valid') && $('#email').hasClass('is-valid') && $('#link').hasClass('is-valid')) {
            $('#submit').removeAttr('disabled')
        }
    }


    $('#phone').mask('+7 (999) 999-99-99')
});



