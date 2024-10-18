function updateTime() {
let londonElement = document.querySelector ("#london");
if (londonElement){
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY")
londonTimeElement.innerHTML =  `${londonTime.format("hh:mm:ss")} <small>${londonTime.format("A")}</small>`};
let denverElement = document.querySelector("#denver");
if (denverElement){
let denverDateElement = denverElement.querySelector(".date");
let denverTimeElement = denverElement.querySelector(".time");
let denverTime = moment().tz("America/Denver");
denverDateElement.innerHTML = denverTime.format("MMMM Do YYYY");
denverTimeElement.innerHTML = `${denverTime.format(
  "hh:mm:ss"
)} <small>${denverTime.format("A")}</small>`};
};

function updateCity(event){
  let cityTimeZone = event.target.value;
  if(cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="cities">
      <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
    </div>
    <a href="/" class="link">All cities </a>`
};

updateTime ();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city")

citiesSelectElement.addEventListener("change", updateCity);