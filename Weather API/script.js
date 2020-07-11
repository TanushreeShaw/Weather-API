
var city1="kota";
var city2="Barrackpore";
var city3="chennai";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" +city1+ "&units=imperial&id=524901&APPID=********************************" ,
function(data) {
console.log(data);

var icon="https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temperature=data.main.temp;
var mintemperature=data.main.temp_min;
var maxtemperature=data.main.temp_max;
var weather=data.weather[0].main;
var name=data.name;
var latitude=data.coord.lat;
var longitude=data.coord.lon;
var wind=data.wind.speed;

$('.icon').attr('src',icon);
$('.weather').append(weather);
$('.name').append(name);
$('.temperature').append(temperature);

$('.latitude').append(latitude);
$('.longitude').append(longitude);
$('.Minimum-Temperature').append(mintemperature);
$('.Maximum-Temperature').append(maxtemperature);
$('.speed').append(wind);

});

