const backgroundmain = document.querySelector("body");

document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelectorAll(".card");
  card.forEach(function (hover) {
    hover.addEventListener("mouseover", function (event) {
      backgroundmain.style.background =
        "linear-gradient(#6e6e6e -75%,#121212 40%)";
      backgroundmain.style.transition = "all 0.5s";
    });
    hover.addEventListener("mouseout", function (event) {
      backgroundmain.style.background =
        "linear-gradient(#6e6e6e -100%,#121212 40%)";
    });
  });
});

var cards = document.querySelectorAll(".card");

// Adicione um ouvinte de eventos para o evento mouseover em cada div .card
cards.forEach(function (card) {
  card.addEventListener("mouseover", function () {
    // Selecione todos os elementos ion-icon dentro da div .card atual
    var icons = card.querySelectorAll("ion-icon");

    // Defina a opacidade de todos os ion-icons para 0.5 (50%)
    icons.forEach(function (icon) {
      icon.style.opacity = "1";
    });
  });
  card.addEventListener("mouseout", function () {
    // Selecione todos os elementos ion-icon dentro da div.card atual
    var icons = card.querySelectorAll("ion-icon");
    icons.forEach(function (icon) {
      icon.style.opacity = "0";
    });
  });
});
