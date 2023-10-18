const apikey ="16a13b2aeae0bd4395969cc4a87871c7";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiurl +city+ `&appid=${apikey}`);
if(response.status == 404){
    document.querySelector(".city2").style.display = "block";
    document.querySelector(".temp2").style.display = "block";
    document.querySelector(".city").style.display = "none";
    document.querySelector(".temp").style.display = "none";
    document.querySelector(".humidity").style.display = "none";
    document.querySelector(".wind").style.display = "none";

    
   
}
else{

    document.querySelector(".temp2").style.display = "none";
    document.querySelector(".humidity").style.display = "block";
    document.querySelector(".wind").style.display = "block";
    document.querySelector(".temp").style.display = "block";
    document.querySelector(".city").style.display = "block";
    document.querySelector(".city2").style.display = "none";

    var data = await response.json();

    // let sunrise = data.sys.sunrise;
    // let sunset = data.sys.sunset;

//     var risetime= convertUnixTimestamp(1696639427);
// var settime = convertUnixTimestamp(1696681966);

    console.log(data);
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" ;
document.querySelector(".humidity").innerHTML = data.main.humidity + " % ";
document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h ";
document.querySelector('.atmos').innerHTML=data.weather[0]. description;
// document.querySelector('.sun1').innerHTML=sunrise;
// document.querySelector('.sun2').innerHTML=sunset;



let weatherCode = data.weather[0].icon;



if(weatherCode == '01d'){
    weatherIcon.src ="files/images/01d@2x.png";
}
else if(weatherCode == '02d'){
    weatherIcon.src="files/images/02d@2x.png";
}
else if(weatherCode== '03d'){
    weatherIcon.src="files/images/03d@2x.png";
}
else if(weatherCode== '04d'){
    weatherIcon.src="files/images/04d@2x.png";
}
else if(weatherCode== '09d'){
    weatherIcon.src="files/images/09d@2x.png";
}
else if(weatherCode== '10d'){
    weatherIcon.src="files/images/10d@2x.png";
}
else if(weatherCode=='11d'){
    weatherIcon.src="files/images/11d@2x.png";
}
else if(weatherCode=='13d'){
    weatherIcon.src="files/images/13d@2x.png";
}
else if(weatherCode== '50d'){
    weatherIcon.src="files/images/50d@2x.png";
}

else if(weatherCode== '01n'){
    weatherIcon.src ="files/images/01n@2x.png";
}
else if(weatherCode== '02n'){
    weatherIcon.src="files/images/02n@2x.png";
}
else if(weatherCode== '03n'){
    weatherIcon.src="files/images/03n@2x.png";
}
else if(weatherCode== '04n'){
    weatherIcon.src="files/images/04n@2x.png";
}
else if(weatherCode== '09n'){
    weatherIcon.src="files/images/09n@2x.png";
}
else if(weatherCode== '10n'){
    weatherIcon.src="files/images/10n@2x.png";
}
else if(weatherCode=='11n'){
    weatherIcon.src="files/images/11n@2x.png";
}
else if(weatherCode== '13n'){
    weatherIcon.src="files/images/13n@2x.png";
}
else if(weatherCode== '50n'){
    weatherIcon.src="files/images/50n@2x.png";
}

let weatherlike = data.weather[0].main;
if(weatherlike=="Clouds"){
    document.body.style.backgroundImage = "url('files/images/clouds-n')";
    document.querySelector('.card').style.background = "transparent";
    
}
else if(weatherlike =="Clear"){
    document.body.style.backgroundImage = "url('files/images/clear-skies')";
    document.querySelector('.card').style.background = "transparent";
}
else if(weatherlike =="Rain"){
    document.body.style.backgroundImage = "url('files/images/rain.webp')";
    document.querySelector('.card').style.background = "transparent";
}
else if(weatherlike =="Snow"){
    document.body.style.backgroundImage = "url('files/images/snow')";
    document.querySelector('.card').style.background = "transparent";
}
else if(weatherlike =="Synny"){
    document.body.style.backgroundImage = "url('files/images/synny')";
    document.querySelector('.card').style.background = "transparent";
}
else if(weatherlike =="Wind"){
    document.body.style.backgroundImage = "url('files/images/wind')";
    document.querySelector('.card').style.background = "transparent";
}
else if(weatherlike =="Haze"){
    document.body.style.backgroundImage = "url('files/images/haze2')";
    document.querySelector('.card').style.background = "transparent";
}


}


}
document.querySelector(".weather").style.display="block";


// Calling showTime function at every second
setInterval(showTime, 1000 );

// Defining showTime funcion
function showTime() {
	// Getting current time and date
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";

	// Setting time for 12 Hrs format
	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		am_pm = "PM";
        
          
        
	} else if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}




	hour =
		hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime =
		hour +
		":" +
		min +
		":" +
		// sec +
		am_pm;

	// Displaying the time
	document.getElementById("clock").innerHTML =currentTime;
}

showTime();


    




searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})
