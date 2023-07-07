document.getElementById("message").addEventListener("click", () => {
  document.querySelector(".feedback-wrapper").style.display = "block";
  document.querySelector(".feedback-tb").style.display = "block";
  const feedbackItem = document.querySelectorAll(".feedback-form__item");

  feedbackItem[0].style.display = "block";
  feedbackItem[2].style.display = "block";
  feedbackItem[3].style.display = "block";

  document.querySelector(".title--feedback").textContent = "Обратная связь";
});

document.getElementById("message-dt").addEventListener("click", () => {
  document.querySelector(".feedback-wrapper").style.display = "block";
  document.querySelector(".feedback-tb").style.display = "block";
  const feedbackItem = document.querySelectorAll(".feedback-form__item");

  feedbackItem[0].style.display = "block";
  feedbackItem[2].style.display = "block";
  feedbackItem[3].style.display = "block";

  document.querySelector(".title--feedback").textContent = "Обратная связь";
});

document.getElementById("closed-feedback").addEventListener("click", () => {
  document.querySelector(".feedback-wrapper").style.display = "none";
  document.querySelector(".feedback-tb").style.display = "none";
});

document.getElementById("feedback-tb").addEventListener("click", () => {
  document.querySelector(".feedback-wrapper").style.display = "none";
  document.querySelector(".feedback-tb").style.display = "none";
});

document.getElementById("call").addEventListener("click", () => {
  document.querySelector(".feedback-wrapper").style.display = "block";
  document.querySelector(".feedback-tb").style.display = "block";
  const feedbackItem = document.querySelectorAll(".feedback-form__item");

  feedbackItem[0].style.display = "none";
  feedbackItem[2].style.display = "none";
  feedbackItem[3].style.display = "none";
  document.querySelector(".title--feedback").textContent = "Заказать звонок";
});

document.getElementById("call-dt").addEventListener("click", () => {
  document.querySelector(".feedback-wrapper").style.display = "block";
  document.querySelector(".feedback-tb").style.display = "block";
  const feedbackItem = document.querySelectorAll(".feedback-form__item");

  feedbackItem[0].style.display = "none";
  feedbackItem[2].style.display = "none";
  feedbackItem[3].style.display = "none";
  document.querySelector(".title--feedback").textContent = "Заказать звонок";
});

// const mediaQuery = window.matchMedia("(min-width: 1465px)");
// function handleTabletChange(e) {
//   if (e.matches) {
//   }
// }
// mediaQuery.addListener(handleTabletChange);
// handleTabletChange(mediaQuery);
