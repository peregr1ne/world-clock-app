// function showTime(event) {
//   let formatTime = moment()
//     .tz(event.target.value)
//     .format("dddd, MMMM Do, YYYY h:mA");
//   alert(`It is ${formatTime} in ${event.target.value}`);
// }

// let citySelect = document.querySelector("#cities");
// citySelect.addEventListener("change", showTime);
function cityName(name) {
  return document.querySelector(name);
}

function cityTime(time) {
  return moment().tz(time);
}

function updateTime() {
  console.log("olol");
  let timeFormat = "h:mm:ss [<small>]A[</small>]";
  let kharkivElement = cityName("#kharkiv");
  let kharkivDateElement = kharkivElement.querySelector(".date");
  let kharkivTimeElement = kharkivElement.querySelector(".time");
  let kharkivTime = cityTime("Europe/Kyiv");

  kharkivDateElement.innerHTML = kharkivTime.format("MMMM Do YYYY");
  kharkivTimeElement.innerHTML = `${kharkivTime.format(timeFormat)}`;

  // LA
  let losAngelesElement = cityName("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = cityTime("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(timeFormat)}`;

  // Sevilla
  let sevillaElement = cityName("#sevilla");
  let sevillaDateElement = sevillaElement.querySelector(".date");
  let sevillaTimeElement = sevillaElement.querySelector(".time");
  let sevillaTime = cityTime("Europe/Madrid");

  sevillaDateElement.innerHTML = sevillaTime.format("MMMM Do YYYY");
  sevillaTimeElement.innerHTML = `${sevillaTime.format(timeFormat)}`;
}
updateTime();

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  console.log(cityTime.format("MMMM Do YYYY"));
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
                <div>
                  <h2>${cityName}</h2>
                  <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>

                <div class="time">${cityTime.format(
                  "h:mm:ss"
                )}<small>${cityTime.format("A")}</small></div>
              </div>
              <a href="index.html" class="back">Back</a>`;
}

let citiesSelectElement = document.querySelector("#city-selector");
citiesSelectElement.addEventListener("change", updateCity);
setInterval(updateTime, updateCity, 1000);
