$(document).ready(function() {
    $('#feedbackForm').submit(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var link = $("#link").val();
        var http = new XMLHttpRequest();
        var url = "https://script.google.com/macros/s/AKfycbyWOsRG0IsA228rcNNXfr23lFYthDh0eV_RuUDN_zQm3j_Oi2nT/exec";
        var params = "p1="+name+"&p2="+email+"&p3="+link;
        http.open("GET", url+"?"+params, true);
        http.onreadystatechange = function() {
            if(http.readyState == 4 && http.status == 200) {
                alert("Все хорошо");
            }
        }
        http.send(null);
    });
});