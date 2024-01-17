import cardsData from "./data.js";

if (document.body.dataset.page === "bouquets-page") {
  renderBouquets();
} else if (document.body.dataset.page === "homepage") {
  document.addEventListener("scroll", handleHomepageHeader);
}

function renderBouquets() {
  const bouquetsHTML = cardsData
    .map((card) => {
      return `
        <a href="#" class="bouquet-card">
            <div class="bouquet-card__img-container" style="background-image: url(assets/${card.imgUrl})"></div>
            <p class="bouquet-card__text">Lorem ipsum dolor sit amet</p>
        </a>`;
    })
    .join("");

  document.getElementById("bouquet-cards-container").innerHTML = bouquetsHTML;
}

document
  .getElementById("hamburger-btn")
  .addEventListener("click", handleMobileMenuOverlay);
document
  .getElementById("menu-close-btn")
  .addEventListener("click", handleMobileMenuOverlay);

function handleMobileMenuOverlay() {
  document
    .getElementById("mobile-menu-overlay")
    .classList.toggle("mobile-menu-overlay--open");
  document.body.classList.toggle("open");
}

function handleHomepageHeader() {
  if (window.scrollY >= 40) {
    document.getElementById("header").classList.remove("header--transparent");
  } else if (window.scrollY < 40) {
    document.getElementById("header").classList.add("header--transparent");
  }
}
