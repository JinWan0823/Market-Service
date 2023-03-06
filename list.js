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

const productCard2 = getProductCard({
    "id" : 1,
    "imgSrc" : "./public/assets/식빵.jpg",
    "name" : "우유 토스트 식빵",
    "discountPercent" : 10,
    "price" : 3000,
    "originalPrice" : 3300
})

sectionDOM.appendChild(productCard)
sectionDOM.appendChild(productCard2)