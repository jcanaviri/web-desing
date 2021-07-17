'use strict';

const catResult = document.getElementById('cat_result');
const dogResult = document.getElementById('dog_result');
const catBtn = document.getElementById('cat_btn');
const dogBtn = document.getElementById('dog_btn');

catBtn.addEventListener('click', () => {
  fetch('https://aws.random.cat/meow')
    .then((res) => res.json())
    .then((source) => {
      catResult.innerHTML = `<img src="${source.file}"></img>`;
    });
});

dogBtn.addEventListener('click', getRandomDog);

function getRandomDog() {
  fetch('https://random.dog/woof.json')
    .then((res) => res.json())
    .then((source) => {
      if (source.url.includes('.mp4')) {
        getRandomDog();
      } else {
        dogResult.innerHTML = `<img src="${source.url}"></img>`;
      }
    });
}
