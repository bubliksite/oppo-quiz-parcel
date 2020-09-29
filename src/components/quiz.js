var resultShareImage

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
        }
        var listPro = ['Режим Ultra Steady Video 3.0', '5G: новый стандарт скорости', ' Быстра зарядка 65 Вт SuperVOOC 2.0', 'Частота обновления экрана 90 Гц']
        var listLite = ['Камера с ИИ и 6 объективами', 'Экран Full HD+ с диагональю 6.43 дюйма', ' Тонкий и легкий корпус', '18 Вт быстрая зарядка']
        function listingPro() {
            for (let i = 0; i < listPro.length; i++) {
                $('#result-phone-list').append('<li>' + listPro[i] + '</li>')
            }
            $('#result-phone-img').attr('src', 'res/result-pro.png')
        }
        function listingLite() {
            for (let i = 0; i < listLite.length; i++) {
                $('#result-phone-list').append('<li>' + listLite[i] + '</li>')
                $('#result-phone-img').attr('src', 'res/result-lite.png')
            }
        }
        if (A == Math.max(A, B, C, D)) {
            $('#answerSpan').text('контемпорари')
            $('#result-subheader').text('Каждый день ты творишь — новую версию себя и окружающего мира, тонко чувствуешь ритм жизни и умеешь донести до окружающих свое мнение легко и убедительно.')
            $('#result-description').text('Такой личности нужен мощный смартфон с серьезными возможностями. Reno4 Pro 5G оборудован мощным процессором Qualcomm® Snapdragon™ 765G, поддерживает сети 5G SA и 5G NSA и при этом отлично снимает даже ночью')
            $('#result-image img').attr('src', 'res/res-cont.png')
            listingPro()
            //resultShareImage = '//korablik.studio/images/oppo/reno4/res-fb-con.jpg'
        } else if (B == Math.max(A, B, C, D)) {
            $('#answerSpan').text('брейк-данс')
            $('#result-subheader').text('Смотришь на мир со всех углов и не боишься экспериментов.')
            $('#result-description').text('Такому мировоззрению нужен смартфон с соответствующими возможностями фото и видео. Благодаря тройной камере Reno4 Pro 5G  Ultra Clear с функцией лазерной автофокусировки вам удастся запечатлеть самые удивительные мгновения, свидетелями которых ты станешь, и вовремя сфокусироваться на самом важном. ')
            $('#result-image img').attr('src', 'res/res-break.png')
            listingPro()
            //resultShareImage = '//korablik.studio/images/oppo/reno4/res-fb-br.jpg'
        } else if (C == Math.max(A, B, C, D)) {
            $('#answerSpan').text('хип-хоп')
            $('#result-subheader').text('Условности — это не для тебя. Твоя жизнь — огни больших городов и ритм широких улиц, ты делишься с миром своим собственным взглядом на эту жизнь, и он может резко отличаться от общепринятого.')
            $('#result-description').text('Твой смартфон — давно не средство самовыражения, это инструмент — он должен быть надежным, быстрым и способным смотреть на все твоими глазами. Reno4 Lite — ультралегкий смартфон с потрясающими возможностями фото и видео — отличный выбор для решения твоих задач.')
            $('#result-image img').attr('src', 'res/res-hip.png')
            listingLite()
            //resultShareImage = '//korablik.studio/images/oppo/reno4/res-fb-kiz.jpg'
        } else if (D == Math.max(A, B, C, D)) {
            $('#answerSpan').text('кизомба')
            $('#result-subheader').text('Общительная индивидуальность, умеешь идти по жизни соло, но предпочтешь интеллектуальное общение с партнером.')
            $('#result-description').text('В твоем смартфоне есть и селфи, и веселые групповые фото, а видео – всегда захватывающие и динамичные. Такой же должен быть и телефон – легкий и самостоятельный, как ты. Reno4 Lite – ультралегкий, в элегантном черном цвете, устойчивый к появлению отпечатков – отличный компаньон. ')
            $('#result-image img').attr('src', 'res/res-kiz.png')
            listingLite()
            //resultShareImage = '//korablik.studio/images/oppo/reno4/res-fb-hip.jpg'
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
                $('#question' + i + ' #button-forward').attr('disabled', 'disabled')
            } else {
                $('#case' + i + 'a2').removeClass('selected')
                $(this).addClass('selected')
                $('#question' + i + ' #button-forward').removeAttr('disabled')
            }
        })
        $('#case' + i + 'a2').click(function () {
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected')
                $('#question' + i + ' #button-forward').attr('disabled', 'disabled')
            } else {
                $('#case' + i + 'a1').removeClass('selected')
                $(this).addClass('selected')
                $('#question' + i + ' #button-forward').removeAttr('disabled')
            }
        })
    }
})