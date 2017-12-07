
$( document ).ready(function() {
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
                console.log(response);
        });
    }, 60 * 30000);
    })

