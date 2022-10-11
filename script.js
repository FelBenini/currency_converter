$(document).ready(api_caller)
$("#conversion_button").click(api_caller)



function api_caller() {
    if ($("#option2").val() === $("#option1").val()) {
        $("#paragraph").text($("#quantity").val() + " " + $("#option2 option:selected").text())
    } else {
        let coin_selected_1 = $("#option1").val()
        let coin_selected_2 = $("#option2").val()
        let settings = {
            "url": "https://economia.awesomeapi.com.br/last/" + coin_selected_1 + "-" + coin_selected_2,
            "method": "GET",
            "timeout": 0,
        };

        $.ajax(settings).done(function (response) {
            let coins = coin_selected_1 + coin_selected_2;
            $("#paragraph").text("equals to " + ($("#quantity").val() * response[coins].bid).toFixed(2) + " " + $("#option2 option:selected").text());
            $("#money_currency").text($("#option1 option:selected").text())
        });
    }
}



$(function () {
    $('#hide').text($('#quantity').val());
    $('#quantity').width($('#hide').width() * 1.3);
}).on('input', function () {
    $('#hide').text($('#quantity').val());
    $('#quantity').width($('#hide').width() * 1.3);
});