var locInput = document.getElementById("locInput")
var dayOne = document.querySelector(".dayOne")
var dayTwo = document.querySelector(".dayTwo")
var dayThree = document.querySelector(".dayThree")

let searchContent = document.querySelector(".search-content")
let aboutContent = document.querySelector(".aboutContent")

function animateContent() {
    aboutContent.classList.remove("d-none")
    searchContent.classList.add("d-none")
}

function animateAbout() {
    searchContent.classList.remove("d-none")
    aboutContent.classList.add("d-none")
}


async function getCurrentApi(request, country) {
    var res = await fetch(`http://api.weatherapi.com/v1/${request}.json?key=7f2caf25524345c0b97164731222706&q=${country}&days=1&aqi=no&alerts=no`)

    var finalRes = await res.json()
    



    var cityName = finalRes.location.name
    var cityTime = finalRes.forecast.forecastday[0].date
    var monthNum = cityTime.toString().substring(5,7)
    var dayNum = cityTime.toString().substring(8,10)
    var day = new Date()
    var cityMaxC = finalRes.forecast.forecastday[0].day.maxtemp_c
    var cityDisc = finalRes.forecast.forecastday[0].day.condition.text
    var cityIcon = finalRes.forecast.forecastday[0].day.condition.icon

    var wind = finalRes.forecast.forecastday[0].day.maxwind_kph
    var humidity = finalRes.forecast.forecastday[0].day.avghumidity
    var precip = finalRes.forecast.forecastday[0].day.totalprecip_mm
    var cartoona = `` ;


    
    console.log(finalRes.forecast.forecastday[0].day)


    var months = {
        "01": "Fanuary",
        "02": "February",
        "03": "Mars",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "Septemper",
        "10": "Octoper",
        "11": "November",
        "12": "December",
    }

    var days = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wendesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    }
    cartoona += `
    <div class="item-head text-center text-white fw-bold">
    <h3 class="text-white fw-bold p-0 m-0">${days[day.getDay()]}</h3>
    <p>${dayNum + ' ' + months[monthNum]}</p>
    </div>

    <div class="item-content p-4">
    <div class="rain d-none"></div>
    <div class="sun d-none">
        <div class="ray_box">
            <div class="ray ray1"></div>
            <div class="ray ray2"></div>
            <div class="ray ray3"></div>
            <div class="ray ray4"></div>
            <div class="ray ray5"></div>
            <div class="ray ray6"></div>
            <div class="ray ray7"></div>
            <div class="ray ray8"></div>
            <div class="ray ray9"></div>
            <div class="ray ray10"></div>
        </div>
    </div>
        <p class="fw-bold fs-4">${cityName}</p>
    <div class="item-degree text-center ">
        <span class="todayMax fw-bold m-0 d-block">°${cityMaxC}</span>
    </div>

    <div class="text-center">
        <span class="disc fs-5 text-warning text-center align-middle">${cityDisc}</span>
        <img class="conditionIcon align-middle" src="${cityIcon}" alt="">
    </div>   

    <div class='text-center pt-4'>
        <span class='mx-3'><i class="fa-solid fa-cloud-showers-heavy mx-2"></i></i>${precip}</span>
        <span class='mx-3'><i class="fa-solid fa-droplet mx-2"></i>${humidity}</span>
        <span class='mx-3'><i class="fa-solid fa-wind mx-2"></i>${wind} Km/h</span>
    </div>
</div>`
dayOne.innerHTML = cartoona
}

async function getForecastDay2Api(request, country) {
    var res = await fetch(`http://api.weatherapi.com/v1/${request}.json?key=7f2caf25524345c0b97164731222706&q=${country}&days=2&aqi=no&alerts=no`)

    var finalRes = await res.json()
    
    var cityName = finalRes.location.name
    var cityTime = finalRes.forecast.forecastday[1].date
    var monthNum = cityTime.toString().substring(5,7)
    var dayNum = cityTime.toString().substring(8,10)
    var day = new Date()
    var cityTemp_f = finalRes.forecast.forecastday[1].day.maxtemp_c
    var cityMinC = finalRes.forecast.forecastday[1].day.mintemp_c

    var cityDisc = finalRes.forecast.forecastday[1].day.condition.text
    var cityIcon = finalRes.forecast.forecastday[1].day.condition.icon

    var months = {
        "01": "Fanuary",
        "02": "February",
        "03": "Mars",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "Septemper",
        "10": "Octoper",
        "11": "November",
        "12": "December",
    }

    var days = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wendesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    }
    console.log(cityTime);
    var cartoona = `` ;

    cartoona += `
    <div class="item-head text-center text-white fw-bold bg-info">
    <h3 class="text-white fw-bold p-0 m-0">${days[day.getDay() + 1]}</h3>
    <p>${dayNum + ' ' + months[monthNum]}</p>
    </div>

    <div class="item-content p-4 mt-4">
    <div class="rain d-none"></div>

        <div class="sun d-none">
            <div class="ray_box">
                <div class="ray ray1"></div>
                <div class="ray ray2"></div>
                <div class="ray ray3"></div>
                <div class="ray ray4"></div>
                <div class="ray ray5"></div>
                <div class="ray ray6"></div>
                <div class="ray ray7"></div>
                <div class="ray ray8"></div>
                <div class="ray ray9"></div>
                <div class="ray ray10"></div>
            </div>
    </div>
        <p class="fw-bold fs-4">${cityName}</p>
    <div class="item-degree text-center">
        <p class="fw-bold fs-1">°${cityTemp_f}</p>
        <span class="todayMin fw-bold m-0">°${cityMinC}</span>

    </div>

    <div class="text-center mt-5">
        <span class="disc fs-5 text-warning text-center align-middle">${cityDisc}</span>
        <img class="conditionIcon align-middle" src="${cityIcon}" alt="">
    </div> 

    </div>`


dayTwo.innerHTML = cartoona;

}


async function getForecastDay3Api(request, country) {
    var res = await fetch(`http://api.weatherapi.com/v1/${request}.json?key=7f2caf25524345c0b97164731222706&q=${country}&days=3&aqi=no&alerts=no`)

    var finalRes = await res.json()

    var cityName = finalRes.location.name
    var cityTime = finalRes.forecast.forecastday[2].date
    var monthNum = cityTime.toString().substring(5,7)
    var dayNum = cityTime.toString().substring(8,10)
    var day = new Date()
    var cityTemp_f = finalRes.forecast.forecastday[2].day.maxtemp_c
    var cityMinC = finalRes.forecast.forecastday[2].day.mintemp_c

    var cityDisc = finalRes.forecast.forecastday[2].day.condition.text
    var cityIcon = finalRes.forecast.forecastday[2].day.condition.icon

    var months = {
        "01": "Fanuary",
        "02": "February",
        "03": "Mars",
        "04": "April",
        "05": "May",
        "06": "June",
        "07": "July",
        "08": "August",
        "09": "Septemper",
        "10": "Octoper",
        "11": "November",
        "12": "December",
    }

    var days = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wendesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    }

    var cartoona = `` ;

    cartoona += `
    <div class="item-head text-center text-white fw-bold bg-info">
    <h3 class="text-white fw-bold p-0 m-0">${days[day.getDay() + 2]}</h3>
    <p>${dayNum + ' ' + months[monthNum]}</p>
    </div>

    <div class="item-content p-4 mt-4">
    <div class="rain d-none"></div>
    <div class="sun d-none">
        <div class="ray_box">
            <div class="ray ray1"></div>
            <div class="ray ray2"></div>
            <div class="ray ray3"></div>
            <div class="ray ray4"></div>
            <div class="ray ray5"></div>
            <div class="ray ray6"></div>
            <div class="ray ray7"></div>
            <div class="ray ray8"></div>
            <div class="ray ray9"></div>
            <div class="ray ray10"></div>
        </div>
    </div>

        <p class="fw-bold fs-4">${cityName}</p>
    <div class="item-degree text-center">
        <p class="fw-bold fs-1">°${cityTemp_f}</p>
        <span class="todayMin fw-bold m-0">°${cityMinC}</span>

    </div>

    <div class="text-center mt-5">
        <span class="disc fs-5 text-warning text-center align-middle">${cityDisc}</span>
        <img class="conditionIcon align-middle" src="${cityIcon}" alt="">
    </div> 

    </div>`


dayThree.innerHTML = cartoona

let disc = document.querySelectorAll(".disc")
let sun = document.querySelectorAll(".sun")
let rain = document.querySelectorAll(".rain")
let itemWidth = document.querySelectorAll(".item-width")

for (i=0; i < disc.length; i++){
    if(disc[i].innerHTML == "Sunny") {
        sun[i].classList.remove("d-none")
        itemWidth[i].style.cssText = "background-image: linear-gradient(to bottom, #ffffff44, #ffffff22 70%);"
    } else if (disc[i].innerHTML.includes("rain")) {
        rain[i].classList.remove("d-none")
        itemWidth[i].style.cssText = "background-image: linear-gradient(to bottom, #030420, #000000 70%);"

}
}
}


locInput.addEventListener("keyup", async function displayApis() {

    await getCurrentApi("forecast", locInput.value)
    await getForecastDay2Api("forecast", locInput.value)
    await getForecastDay3Api("forecast", locInput.value)
    // getCurrentCountry()

} ) 
