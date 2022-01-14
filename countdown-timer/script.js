const finalTime = '02 Dec 2022';
const daysField = document.querySelector('#days');
const hoursField = document.querySelector('#hours');
const minutesField = document.querySelector('#minutes');
const secondsField = document.querySelector('#seconds');

const countDown = () => {
  const finalDateTime = new Date(finalTime);
  const currentDate = new Date();

  const totalSeconds = (finalDateTime - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysField.textContent = days;
  hoursField.textContent = hours;
  minutesField.textContent = minutes;
  secondsField.textContent = seconds;
};

setInterval(() => {
  countDown();
}, 1000);
