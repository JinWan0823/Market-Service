import { getProductCard } from "./module/productCard.js";

const sectionDOM = document.getElementsByTagName('section')[0];

const productCard = getProductCard( {
    "id" : 5,
    "imgSrc" : "./public/assets/아보카도.jpg",
    "name" : "아보카도 200g 1개",
    "discountPercent" : 5,
    "price" : 2700,
    "originalPrice" : 3000
})

sectionDOM.appendChild(productCard)