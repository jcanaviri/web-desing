'use strict';

let icons = document.querySelectorAll('.icon');
icons = Array.from(icons);

icons.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    let target = e.target;
    target.classList.toggle('active');
  });
});
