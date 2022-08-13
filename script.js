const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const maternity = "1 Jan 2023";

function countdawn() {
  const maternityDate = new Date(maternity);
  const currentDate = new Date();

  const totalSeconds = (maternityDate - currentDate) / 1000 - 21600;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = mins;
  secondsEl.innerHTML = seconds;
}

countdawn();

setInterval(countdawn, 1000);
