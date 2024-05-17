"use strict";

const form = document.getElementById("form");
const signUpForm = document.getElementById("sign-up");
const successMsg = document.getElementById("success-msg");
const btn = document.getElementById("btn");
const successBtn = document.getElementById("successBtn");
const hideForm = document.querySelector(".hidden");
const showSuccess = document.querySelector(".show");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const errorMessage = document.getElementById("error-message");
  const email = document.querySelector(".email-input").value;
  const input = document.querySelector("input");
  const userEmail = document.getElementById("email-span");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    errorMessage.textContent = "Valid email required";
    input.style.borderColor = "#ff6155";
    // input.style.color = "#ff6155";
    input.style.background = "rgba(255, 97, 85, 0.15)";
  } else {
    // input.style.color = "#242742";
    errorMessage.textContent = "";
    input.style.borderColor = "rgba(25, 24, 43, 0.25)";
    input.style.background = "";
    closeSignUp();
    userEmail.textContent = email;
    input.value = "";
  }
});

successBtn.addEventListener("click", dissmissSuccess);

function closeSignUp() {
  showSuccess.style.display = "none";
  hideForm.style.display = "block";
}

function dissmissSuccess() {
  hideForm.style.display = "none";
  showSuccess.style.display = "flex";
}
