const temperatureEl = document.getElementById("temp")
const cityEl = document.getElementById("city")
const humidityEl = document.getElementById("humidity")
const windEL = document.getElementById("wind")
const searchBtnEL = document.getElementById("searchBtn")
const searchBoxEL = document.getElementById("searchBox")
const weatherIconEl = document.getElementById("weatherIcon")

let Temp = ""
let City = ""
let Humidity = ""
let Wind = ""

const weather = async function (city){
    let weatherData = await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&appid=96c941a7945717899b5b30058b31eed6&q=" + city)

    if(weatherData.status == 404 || weatherData.status == 400){
        alert("Invalid City Name!!!")
    }
    else {
        let response = await weatherData.json()
        console.log(response)
        Temp = Math.floor(response.main.temp)
        City = response.name
        Humidity = response.main.humidity
        Wind = Math.floor(response.wind.speed)
    
        temperatureEl.innerText=`${Temp}°c`
        cityEl.innerText=`${City}`
        humidityEl.innerText=`${Humidity}%`
        windEL.innerText=`${Wind} km/hr`
    
        if(response.weather[0].main == "Clouds"){
            weatherIconEl.src="clouds.png"
        }
        else if (response.weather[0].main == "Clear"){
            weatherIconEl.src="sun.png"
        }
        else if (response.weather[0].main == "Mist"){
            weatherIconEl.src="mist.png"
        }
        else if (response.weather[0].main == "Rain"){
            weatherIconEl.src="rain.png"
        }
        else if (response.weather[0].main == "Drizzle"){
            weatherIconEl.src="drizzle.png"
        }
    }
}

searchBtnEL.addEventListener("click",()=>{
    weather(searchBoxEL.value)
})







































// let apikey = "96c941a7945717899b5b30058b31eed6"
// // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// 