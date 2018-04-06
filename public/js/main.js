
$( document ).ready(function() {
    
function fullScreenImageSwap() {
  $('#over').css('visibility', 'visible');
  $('#over').css('position', 'initial');
  $('.overImg').attr('src', 'rennovation.png');
  $('.overImg').css('visibility', 'visible');
};

var function1 = fullScreenImageSwap();
var function2 = returnBackToRegular();
var functionArray = [function1, function2];


function returnBackToRegular() {
    $('#over').css('visibility', 'hidden');
    $('#over').css('position', 'absolute');
    $('.overImg').css('visibility', 'hidden');
};

    // initial firing
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?zip=60659,us&units=imperial&APPID=15c4449b72461cbf6e40e27d8225c3e2";
    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
        var temp = response.main.temp;
        var iconCode = response.weather[0].icon;
        $('.temp').empty();
        $('.temp').append(temp + " " + "°F");
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        $('.weatherImg').empty();
        $(".weatherImg").html("<img height='100px' width='100px' src='" + iconUrl  + "'>");
        });

        var page = $('#overlay');
        var currentTime = moment().format("hh:mm a");
        var currentDate = moment().format('dddd') + ', ' + moment().format("ll");
        $('.clock').empty();
        $('.clock').append(currentTime);
        $('.date').empty();
        $('.date').append(currentDate);

// Interval firing
    setInterval(function() {
        var currentTime = moment().format("hh:mm a");
        var currentDate = moment().format('dddd') + ', ' + moment().format("ll");
        $('.clock').empty();
        $('.clock').append(currentTime);
        $('.date').empty();
        $('.date').append(currentDate);
        var screenCheck = moment().format('LT');
        if (screenCheck == '7:00 AM'){
        jQuery(function($) {
            $("#over").css('visibility', 'hidden');
        });
    };
        if (screenCheck == '7:00 PM'){
            jQuery(function($) {
                $("#over").css('visibility', 'visible');
            });
    };
}, 60000 );

    setInterval(function() {
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?zip=60659,us&units=imperial&APPID=15c4449b72461cbf6e40e27d8225c3e2";
        $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
                var temp = response.main.temp;
                var iconCode = response.weather[0].icon;
                $('.temp').empty();
                $('.temp').append(temp + " " + "°F");
                var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
                $('.weatherImg').empty();
                $(".weatherImg").html("<img height='100px' width='100px' src='" + iconUrl  + "'>");
        });
    }, 600000);



setInterval(function(){ 
for (var i = 0; i < functionArray.length; i++){
    functionArray[i];
};
}, 10000);

});
