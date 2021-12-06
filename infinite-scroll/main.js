"use strict";

const loaderPage = document.querySelector('.loader-page');
document.addEventListener('load', () => {
  loaderPage.classList.remove('show')
})

const loading = document.querySelector(".loading");
const container = document.getElementById("container");

getPost();
getPost();
getPost();

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  // If we are at the bottom of the page
  if (clientHeight + scrollTop >= scrollHeight - 5) {
    showLoading();
    setTimeout(() => {
      getPost();
    }, 600)
  } else {
    hideLoading();
  }
});

function showLoading() {
  loading.classList.add("show");
}
function hideLoading() {
  loading.classList.remove("show");
}

async function getPost() {
  // Get arandom post text
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${getRandomNumber()}`
  );
  const postData = await postResponse.json();

  // Get a random user
  const userResponse = await fetch("https://randomuser.me/api");
  const userData = await userResponse.json();

  const data = { post: postData, user: userData.results[0] };
  // console.log(data);
  addDataToDOM(data);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function addDataToDOM(data) {
  const postElement = document.createElement("div");
  postElement.classList.add("blog-post");
  postElement.innerHTML = `
    <h2 class="title">${data.post.title}</h2>
    <p class="text">${data.post.body}</p>
    <div class="user-info">
      <img src="${data.user.picture.large}" alt="${data.user.first}" />
      <span>${data.user.name.first} ${data.user.name.last}</span>
    </div>
  `;
  container.appendChild(postElement);
  hideLoading();
}
