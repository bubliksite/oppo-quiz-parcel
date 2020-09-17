$('document').ready(function($) {

    $('#goFromMainScreen').click(function () {
        $('#welcomeScreen').remove();
        $('#questionsScreen').css('display', 'block');
    });

    var A = 0;
    var B = 0;

    var countOfQuestions = $('#questionsScreen').children('div').length;

    for (let i = 1; i <= countOfQuestions; i++) {
        $('#case' + i + 'a1').click(function(){
            A++;
        });
        $('#case' + i + 'a2').click(function(){
            B++;
        });
        if (i == countOfQuestions) {
            $('#question' + i).click(function(){
                $('#question' + i).remove();
                $('#finalScreen').css('display', 'flex');
                if (A == Math.max(A, B)) {
                    $('#answerSpan').text('#1 (A)');
                    $('#shareButtonsB').remove();
                } else if (B == Math.max(A, B)) {
                    $('#answerSpan').text('#2 (B)');
                    $('#shareButtonsA').remove();
                } else {
                    $('#answerSpan').text('#1 (A)');
                    $('#shareButtonsB').remove();
                }
            })
        } else {
            $('#question' + i).click(function(){
                $('#question' + i).remove();
                $('#question' + (i + 1)).css('display', 'block');
            })
        }

    }
})