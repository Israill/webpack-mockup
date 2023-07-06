document.getElementById("sidebar").addEventListener("click", () => {
  document.querySelector(".sidebar-wrapper").style.display = "block";
  document.querySelector(".sidebar--tb").style.display = "block";
  //   document.querySelector(".navbar__item--dt").style.display = "block";
  //   document.querySelector(".navbar__item--line-tb").style.display = "none";
  //   const navbarContainer = document.querySelector(".navbar-container");
  //   const navbarBurger = document.querySelector(".navbar-burger");
  //   const navbarBurgerNav = document.querySelector(".navbar-burger-nav");

  //   navbarContainer.style.display = "flex";
  //   navbarContainer.style.flexDirection = "column";
  //   navbarContainer.style.justifyContent = "space-between";
  //   navbarContainer.style.padding = "0";
  //   navbarContainer.style.border = "none";
  //   navbarContainer.style.height = "100vh";
  //   navbarContainer.style.minHeight = "800px";

  //   navbarBurger.style.padding = "30px 22px"
  //   navbarBurger.style.maxWidth = "360px"
  //   navbarBurger.style.minWidth = "320px"
  //   navbarBurger.style.justifyContent = "space-between"

  //   navbarBurgerNav.style.display = "block"

  //   document.querySelectorAll(".navbar__item")[2].style.display = "none";
  //   document.querySelectorAll(".navbar__item")[3].style.display = "none";

  //   document.querySelectorAll(".navbar__item--mb")[0].style.display = "block";
  //   document.querySelectorAll(".navbar__item--mb")[1].style.display = "block";
  //   document.querySelectorAll(".navbar__item--mb")[2].style.display = "block";

  //   document.querySelector(".navbar__item--line-mb").style.display = "none";

  //   document.querySelector(".mail").style.display = "block";
  //   document.querySelector(".phone-num").style.display = "block";
  //   document.querySelector(".lang").style.display = "block";
  //   document.querySelector(".lang").style.display = "flex";
});
document.getElementById("closed").addEventListener("click", () => {
  document.querySelector(".sidebar-wrapper").style.display = "none";
  document.querySelector(".sidebar--tb").style.display = "none";
});


document.getElementById("sidebar--tb").addEventListener("click", () => {
  document.querySelector(".sidebar-wrapper").style.display = "none";
  document.querySelector(".sidebar--tb").style.display = "none";
})