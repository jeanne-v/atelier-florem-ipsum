import cardsData from "./data.js";

if(document.body.dataset.page === "bouquets-page"){
    renderBouquets();
}

function renderBouquets(){
    const bouquetsHTML = cardsData.map(card => {
        return `
        <a href="#" class="bouquet-card">
            <div class="bouquet-card__img-container" style="background-image: url(assets/${card.imgUrl})"></div>
            <p class="bouquet-card__text">Lorem ipsum dolor sit amet</p>
        </a>`
    }).join("");

    document.getElementById("bouquet-cards-container").innerHTML = bouquetsHTML;
}

document.getElementById("hamburger-btn").addEventListener("click", handleMobileMenuOverlay);
document.getElementById("menu-close-btn").addEventListener("click", handleMobileMenuOverlay);

function handleMobileMenuOverlay(){
    document.getElementById("mobile-menu-overlay").classList.toggle("open");
    document.body.classList.toggle("open");
}