// function showTime(event) {
//   let formatTime = moment()
//     .tz(event.target.value)
//     .format("dddd, MMMM Do, YYYY h:mA");
//   alert(`It is ${formatTime} in ${event.target.value}`);
// }

// let citySelect = document.querySelector("#cities");
// citySelect.addEventListener("change", showTime);

function updateTime() {
  let kharkivElement = document.querySelector("#kharkiv");
  let kharkivDateElement = kharkivElement.querySelector(".date");
  let kharkivTimeElement = kharkivElement.querySelector(".time");
  let kharkivTime = moment().tz("Europe/Kyiv");

  kharkivDateElement.innerHTML = kharkivTime.format("MMMM Do YYYY");
  kharkivTimeElement.innerHTML = `${kharkivTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  // LA
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
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
              </div>`;
}

let citiesSelectElement = document.querySelector("#city-selector");
citiesSelectElement.addEventListener("change", updateCity);
