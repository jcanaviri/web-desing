'use strict';

const userIcon = document.querySelector('.nav-user-icon.oneline');
const settingsMenu = document.querySelector('.settings-menu');
const darkBtn = document.getElementById('dark-btn');

userIcon.addEventListener('click', () => {
  settingsMenu.classList.toggle('settings-menu-show');
});

darkBtn.addEventListener('click', () => {
  darkBtn.classList.toggle('dark-btn-on');
  document.body.classList.toggle('dark-theme');
  if (localStorage.getItem('theme') == 'light') {
    localStorage.setItem('theme', 'dark');
  } else if (localStorage.getItem('theme') == 'dark') {
    localStorage.setItem('theme', 'light');
  }
});

if (localStorage.getItem('theme') == 'light') {
  darkBtn.classList.remove('dark-btn-on');
  document.body.classList.remove('dark-theme');
} else if (localStorage.getItem('theme') == 'dark') {
  darkBtn.classList.add('dark-btn-on');
  document.body.classList.add('dark-theme');
} else {
  localStorage.setItem('theme', 'light');
}
