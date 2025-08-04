function showTime(event) {
  let formatTime = moment()
    .tz(event.target.value)
    .format("dddd, MMMM Do, YYYY h:mA");
  alert(`It is ${formatTime} in ${event.target.value}`);
}

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", showTime);
