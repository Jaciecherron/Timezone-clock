let londonElement = document.querySelector ("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment();
londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY")
londonTimeElement.innerHTML =  `${londonTime.format("h:mm:ss")} <small>${londonTime.format("A")}</small>`;