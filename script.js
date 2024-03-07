const apiKey= "bfa35cf2c574f13933f8b385bf583fbb";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const serachBox = document.querySelector(".search input");
const serachButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");


async function checkWeather(city) {

    if (!city) {
        // Handle the case where the input is blank
        document.querySelector(".invalid").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }
    
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector(".invalid").style.display="block";
    } else{
        document.querySelector(".invalid").style.display="none";
    }


    var data = await response.json();

    console.log(data);

    // .left values
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = data.main.temp + "°C";
    document.querySelector(".state").innerHTML = data.weather[0].main;

    // .right values
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".pressure").innerHTML = data.main.pressure;
    document.querySelector(".feel").innerHTML = data.main.feels_like + "°C";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "img/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "img/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "img/mist.png";
    }

    document.querySelector(".weather").style.display="block";
}   

serachButton.addEventListener("click", ()=>{
    checkWeather(serachBox.value);
})

checkWeather('warszawa');