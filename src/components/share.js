function handle_fb_data(response){
    console.log('забираем данные');
    FB.api('/me', function(response) {
        console.log('Пользователь: ' + response.name);
        console.log('Данные из ФБ: '+JSON.stringify(response));
        //alert('Прилитело из ФБ: '+JSON.stringify(response));

        var sendUrl = 'https://oppo.bublik.site/res/';
        // отправляем данные пользователя
        fetch(sendUrl, {
            method: "POST",
            credentials: 'include',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body:  JSON.stringify(response)
        })

    });
}
function fb_share(){
    console.log('делимся');
    FB.ui({
            method: 'share',
            href: 'https://manzhos.cz/share_fb/images/test_img.jpg',
        },
        function(response){
            console.log('Пользователь вошел. Забираем его данные.');
            fb_login();
            /*
            if(response && response.post_id){
              alert("Поделились спасибо");
            }else{
              alert("Что-то пошло не так");
            }
            */
        });
};
function fb_login(){
    console.log('процесс сбора данных инициирован');
    FB.getLoginStatus(function(response) {
        if (response.staus === 'connected') {
            console.log('Пользователь уже залогинен. Забираем его данные.');
            handle_fb_data(response);
        } else {
            console.log('Пользователь был не залогинен в ФБ, запускаем окно входа в ФБ');
            FB.login(function(response){
                if (response.authResponse) {
                    console.log('Пользователь вошел. Забираем его данные.');
                    handle_fb_data(response);
                } else {
                    console.log('Пользователь передумал');
                }
            });
        }
    }, {
        scope: 'email,id'
    });
};
