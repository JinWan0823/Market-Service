import { getProductCard } from "./module/productCard.js";
import { getProductList } from "./module/productList.js";
import { getProductSection } from "./module/productSection.js";

const productSection = getProductSection('인기 상품',[
    {
        "id" : 1,
        "imgSrc" : "./public/assets/파프리카.jpg",
        "name" : "파프리카 2입",
        "discountPercent" : 20,
        "price" : 2000,
        "originalPrice" : 2500
    },
    {
        "id" : 2,
        "imgSrc" : "./public/assets/당근.jpg",
        "name" : "친환경 당근 400g",
        "discountPercent" : 33,
        "price" : 2000,
        "originalPrice" : 3000
    },
    {
        "id" : 3,
        "imgSrc" : "./public/assets/단호박.jpg",
        "name" : "단호박 1통",
        "discountPercent" : 12,
        "price" : 3520,
        "originalPrice" : 4000
    }
]);

const productSection2 = getProductSection('새로 들어온 상품', [
    {
        "id" : 1,
        "imgSrc" : "./public/assets/삼겹살.jpg",
        "name" : "구이용 삼겹살 600g (냉장)",
        "discountPercent" : 5,
        "price" : 14820,
        "originalPrice" : 15600
    },
    {
        "id" : 2,
        "imgSrc" : "./public/assets/머핀.jpg",
        "name" : "[홍대 W마켓] 컵케익 (2입)",
        "discountPercent" : 20,
        "price" : 4800,
        "originalPrice" : 6000
    },
    {
        "id" : 3,
        "imgSrc" : "./public/assets/원두.jpg",
        "name" : "[카페 W]디카페인 원두 1kg",
        "discountPercent" : 15,
        "price" : 7140,
        "originalPrice" : 8400
    }

])

const productSection3 = getProductSection('재구매율이 높은 상품', [
    {
        "id" : 1,
        "imgSrc" : "./public/assets/식빵.jpg",
        "name" : "우유 토스트 식빵",
        "discountPercent" : 10,
        "price" : 3000,
        "originalPrice" : 3300
    },
    {
        "id" : 2,
        "imgSrc" : "./public/assets/파스타.jpg",
        "name" : "롱 파스타 면 2종",
        "discountPercent" : 5,
        "price" : 7600,
        "originalPrice" : 8000
    },
    {
        "id" : 3,
        "imgSrc" : "./public/assets/바나나.jpg",
        "name" : "바나나 1kg (필리핀 산)",
        "discountPercent" : 10,
        "price" : 2700,
        "originalPrice" : 3000
    },
    {
        "id" : 4,
        "imgSrc" : "./public/assets/키위.jpg",
        "name" : "뉴질랜드 골드 키위 4입 1팩",
        "discountPercent" : 5,
        "price" : 10310,
        "originalPrice" : 10900
    },
    {
        "id" : 5,
        "imgSrc" : "./public/assets/아보카도.jpg",
        "name" : "아보카도 200g 1개",
        "discountPercent" : 5,
        "price" : 2700,
        "originalPrice" : 3000
    }
    

])

document.body.appendChild(productSection);
document.body.appendChild(productSection2);
document.body.appendChild(productSection3);