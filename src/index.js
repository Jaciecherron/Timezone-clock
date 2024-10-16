function updateTime() {
let londonElement = document.querySelector ("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY")
londonTimeElement.innerHTML =  `${londonTime.format("hh:mm:ss")} <small>${londonTime.format("A")}</small>`;
let denverElement = document.querySelector("#denver");
let denverDateElement = denverElement.querySelector(".date");
let denverTimeElement = denverElement.querySelector(".time");
let denverTime = moment().tz("America/Denver");
denverDateElement.innerHTML = denverTime.format("MMMM Do YYYY");
denverTimeElement.innerHTML = `${denverTime.format(
  "hh:mm:ss"
)} <small>${denverTime.format("A")}</small>`;
}

updateTime ();
setInterval(updateTime, 1000);