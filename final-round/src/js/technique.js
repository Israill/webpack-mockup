const itemArray = document.querySelectorAll(".technique-content-item");

const mediaQuery = window.matchMedia("(min-width: 1426px)");
function handleTabletChange(e) {
  let btn = document.getElementById("technique-btn");
  let btnDt = document.getElementById("technique-btn-dt");
  let img = document.getElementById("technique-btn__img")
  let imgDt = document.getElementById("technique-btn__img--dt")

  if (e.matches) {
    document.getElementById("technique-btn__text--dt").textContent =
      "Показать все";
    let moreItemsDt = () => {
      document.getElementById("technique-btn__text--dt").textContent = "Скрыть";
      for (let i = 8; i < itemArray.length; i++) {
        itemArray[i].style.display = "block";
      }
      btnDt.removeEventListener("click", moreItemsDt);
      btnDt.addEventListener("click", lessItemsDt);
    };

    let lessItemsDt = () => {
      document.getElementById("technique-btn__text--dt").textContent =
        "Показать все";
      for (let i = 8; i < itemArray.length; i++) {
        itemArray[i].style.display = "none";
      }
      btnDt.removeEventListener("click", lessItemsDt);
      btnDt.addEventListener("click", moreItemsDt);
    };

    for (let i = 6; i < itemArray.length; i++) {
      itemArray[i].style.display = "none";
    }
    for (let i = 6; i < 8; i++) {
      itemArray[i].style.display = "block";
    }
    btnDt.addEventListener("click", moreItemsDt);
  } else {
    document.getElementById("technique-btn__text").textContent = "Показать все";

    let moreItems = () => {
      document.getElementById("technique-btn__text").textContent = "Скрыть";
      for (let i = 6; i < itemArray.length; i++) {
        itemArray[i].style.display = "block";
      }
      btnDt.removeEventListener("click", moreItems);
      btn.addEventListener("click", lessItems, { once: true });
    };

    let lessItems = () => {
      document.getElementById("technique-btn__text").textContent =
        "Показать все";
      for (let i = 6; i < itemArray.length; i++) {
        itemArray[i].style.display = "none";
      }
      btnDt.removeEventListener("click", lessItems);
      btn.addEventListener("click", moreItems);
    };
    btn.addEventListener("click", moreItems);

    for (let i = 6; i < itemArray.length; i++) {
      itemArray[i].style.display = "none";
    }
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);
