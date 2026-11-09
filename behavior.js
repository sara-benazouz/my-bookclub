console.log("behavior.js is running");

const email = document.querySelector(".email");
const copyButton = document.querySelector(".copy-email");

function copyEmail() {
  navigator.clipboard.writeText(email.textContent);
  copyButton.textContent = "Copied!";

  setTimeout(function () {
    copyButton.textContent = "Copy my email";
  }, 2000);
}

copyButton.addEventListener("click", copyEmail);
const title = document.querySelector("h1");
const shoutButton = document.querySelector(".shout-button");

function sayHello() {
  title.textContent = "Happy reading!";
}

shoutButton.addEventListener("click", sayHello);