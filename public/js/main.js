
$( document ).ready(function() {
    
function switch1() {
  $('#over').css('visibility', 'visible');
  $('#over').css('position', 'initial');
  $('.overImg').attr('src', 'rennovation.png');
  $('.overImg').css('visibility', 'visible');
  $('.test').html("2");
};

function switch2() {
    $('#over').css('visibility', 'hidden');
    $('#over').css('position', 'absolute');
    $('.overImg').css('visibility', 'hidden');
    $('.test').html("1");
};

function switchScreens(){

   var time = moment();
   var beforeTime = moment("07:00:00 AM", "hh:mm:ss A");
   var afterTime = moment("07:00:00 PM", "hh:mm:ss A");
   if (time.isBetween(beforeTime, afterTime)){   
    var elem = $('.test').html();
    if (elem === "1"){
        switch1();
    } else if (elem === "2"){
        switch2();
    }
   } else {
    $('#over').css('visibility', 'visible');
    $('#over').attr('src', '');
   };
}

setInterval(function(){
    switchScreens();
}, 10000)

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

});
