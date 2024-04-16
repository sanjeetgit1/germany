const apikey = "a8ce67611efd3847602913e8e67ca325";

const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox =  document.querySelector(".search input");
const searchBtn =  document.querySelector(".search button");

async function checkWeather(city){
    const response =await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();


    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =Math.round(data.wind.speed ) + "km/hr";


}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();
