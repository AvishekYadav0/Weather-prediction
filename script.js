const Apikey = "a60005af5ba6571e7c952a0b94abd189"
const Apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchbox = document.querySelector(".search input")
const searchbtm = document.querySelector(".search button")


async function checkweather(city) {
    const response =await fetch(Apiurl + city +` &appid=${Apikey}`)
    const data = await response.json();
    console.log(data)
    
    

    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =data.wind.speed + "km/hr";

}
    searchbtm.addEventListener("click",()=>{

        checkweather(searchbox.value)
    })

