'use strict';

const loader = document.querySelector('.loader');
window.addEventListener('load', () => {
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
});

const loading = document.querySelector('.loading');
const container = document.getElementById('container');

getPost();
getPost();
getPost();

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  // If we are at the bottom of the page
  if (clientHeight + scrollTop >= scrollHeight - 5) {
    showLoading();
    // TODO: Make it the loading animation desapire on scroll top
    setTimeout(() => {
      getPost();
    }, 1500);
  }
});

function showLoading() {
  loading.classList.add('show');
}

async function getPost() {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${getRandomNumber()}`
  )
    .then((response) => response.json())
    .then((postData) => postData);

  const userResponse = await fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((userData) => userData);

  const data = { post: postResponse, user: userResponse.results[0] };
  // console.log(data);
  addDataToDOM(data);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function addDataToDOM(data) {
  const postElement = document.createElement('div');
  postElement.classList.add('blog-post');
  postElement.innerHTML = `
    <h2 class="title">${data.post.title}</h2>
    <p class="text">${data.post.body}</p>
    <div class="user-info">
      <img src="${data.user.picture.large}" alt="${data.user.first}" />
      <span>${data.user.name.first} ${data.user.name.last}</span>
    </div>
  `;
  container.appendChild(postElement);
  loading.classList.remove('show');
}
