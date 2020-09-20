$('document').ready(function($) {

    var result = [];
    let A = 0
    let B = 0
    let C = 0
    let D = 0
    var countOfQuestions = $('#questionsScreen').children('div').length

    //ПЕРЕКЛЮЧЕНИЕ ЭКРАНОВ
    $('#goFromMainScreen').click(function () {
        $('#welcomeScreen').css('display', 'none');
        $('#welcomeScreen').addClass('animate__animated animate__fadeInLeft')
        $('#questionsScreen').addClass('animate__animated animate__fadeInRight')
        $('#questionsScreen').css('display', 'block');

    });
    //Для экрана с вопросом 1
    $('#question1 #button-back').click(function () {
        $('#questionsScreen').css('display', 'none')
        $('#welcomeScreen').css('display', 'block')
    })
    $('#question1 #button-forward').click(function () {
        $('#question1').css('display', 'none')
        $('#question2').addClass('animate__animated animate__fadeInRight')
        $('#question2').css('display', 'block')
        if($('#question1  .selected').hasClass('A')) {
            result[0] = 'A'
        } else if($('#question1  .selected').hasClass('B')) {
            result[0] = 'B'
        } else if($('#question1  .selected').hasClass('C')) {
            result[0] = 'C'
        } else if($('#question1  .selected').hasClass('D')) {
            result[0] = 'D'
        }
    })
    //Для экрана с последним вопросом
    $('#question' + countOfQuestions + ' #button-back').click(function () {
        $('#question' + countOfQuestions).css('display', 'none')
        $('#question' + (countOfQuestions - 1)).addClass('animate__animated animate__fadeInLeft')
        $('#question' + (countOfQuestions - 1)).css('display', 'block')
    })
    $('#question' + countOfQuestions + ' #button-forward').click(function () {
        if($('#question' + countOfQuestions + ' .selected').hasClass('A')) {
            result[countOfQuestions - 1] = 'A'
        } else if($('#question' + countOfQuestions + ' .selected').hasClass('B')) {
            result[countOfQuestions - 1] = 'B'
        } else if($('#question' + countOfQuestions + ' .selected').hasClass('C')) {
            result[countOfQuestions - 1] = 'C'
        } else if($('#question' + countOfQuestions + ' .selected').hasClass('D')) {
            result[countOfQuestions - 1] = 'D'
        } console.log(result)
        //Делаем вычисления итогового результата
        for (let i = 0; i < result.length; i++) {
            if (result[i] == 'A') {A++}
            if (result[i] == 'B') {B++}
            if (result[i] == 'C') {C++}
            if (result[i] == 'D') {D++}
            if (A == Math.max(A, B, C, D)) {
                $('#answerSpan').text('#1 (A)');
                $('#shareButtonsB').remove();
                $('#shareButtonsC').remove();
                $('#shareButtonsD').remove();
            } else if (B == Math.max(A, B, C, D)) {
                $('#answerSpan').text('#2 (B)');
                $('#shareButtonsA').remove();
                $('#shareButtonsC').remove();
                $('#shareButtonsD').remove();
            } else if (C == Math.max(A, B, C, D)) {
                $('#answerSpan').text('#3 (C)');
                $('#shareButtonsA').remove();
                $('#shareButtonsB').remove();
                $('#shareButtonsD').remove();
            } else if (D == Math.max(A, B, C, D)) {
                $('#answerSpan').text('#4 (D)');
                $('#shareButtonsA').remove();
                $('#shareButtonsB').remove();
                $('#shareButtonsC').remove();
            }
        }
        $('#question' + countOfQuestions).css('display', 'none')
        $('#finalScreen').addClass('animate__animated animate__fadeInRight')
        $('#finalScreen').css('display', 'block')
    })
    //Для экранов с остальными вопросами
    for (let i = 2; i <= countOfQuestions; i++) {
        $('#question' + i + ' #button-back').click(function () {
            $('#question' + i).css('display', 'none')
            $('#question' + (i - 1)).removeClass('animate__animated animate__fadeInRight')
            $('#question' + (i - 1)).addClass('animate__animated animate__fadeInLeft')
            $('#question' + (i - 1)).css('display', 'block')
        })
        $('#question' + i + ' #button-forward').click(function () {
            $('#question' + i).css('display', 'none')
            $('#question' + (i + 1)).css('display', 'block')
            $('#question' + (i + 1)).addClass('animate__animated animate__fadeInRight')
            if($('#question' + i + ' .selected').hasClass('A')) {
                result[i - 1] = 'A'
            } else if($('#question' + i + ' .selected').hasClass('B')) {
                result[i - 1] = 'B'
            } else if($('#question' + i + ' .selected').hasClass('C')) {
                result[i - 1] = 'C'
            } else if($('#question' + i + ' .selected').hasClass('D')) {
                result[i - 1] = 'D'
            }
        })
    }

    //ВЫДЕЛЕНИЕ ВЫБРАННОГО ОТВЕТА
    for (let i = 1; i <= countOfQuestions; i++) {
        $('#case' + i + 'a1').click(function () {
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected')
            } else {
                $('#case' + i + 'a2').removeClass('selected')
                $(this).addClass('selected')
            }
        })
        $('#case' + i + 'a2').click(function () {
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected')
            } else {
                $('#case' + i + 'a1').removeClass('selected')
                $(this).addClass('selected')
            }
        })
    }
})