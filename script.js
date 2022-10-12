$(document).ready(api_caller)
$("#conversion_button").click(api_caller)



function api_caller() {
    if ($("#option2").val() === $("#option1").val()) {
        $("#paragraph").text($("#quantity").val() + " " + $("#option2 option:selected").text())
        $("#money_currency").text($("#option1 option:selected").text())
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
            $("#paragraph").html("equals to " + "<strong>" + ($("#quantity").val() * response[coins].bid).toFixed(2) + "</strong> " + $("#option2 option:selected").text());
            $("#money_currency").text($("#option1 option:selected").text());
            $("#variation").text("Variation: " + response[coins].varBid);
            $("#high").text("High: " + response[coins].high);
            $("#low").text("Low: " + response[coins].low);
            $("#change").text("Change: " + response[coins].pctChange + "%");
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