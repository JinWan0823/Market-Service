import { getProductSection } from "./module/productSection.js";

try{
const response =await fetch('public/mock/sectionListData.json')
const data = await response.json();
const sectionInfoList = data.sectionInfoList;

sectionInfoList.forEach((sectionInfo)=>{
    console.log(sectionInfo)
    const {sectionTitle,productList} = sectionInfo;
    const productSectionDOM = getProductSection(sectionTitle,productList);
    document.body.appendChild(productSectionDOM)
})

} catch(error) {
    console.log(error);
}

// const productSection = getProductSection('인기 상품',[
//     {
//         "id" : 1,
//         "imgSrc" : "./public/assets/파프리카.jpg",
//         "name" : "파프리카 2입",
//         "discountPercent" : 20,
//         "price" : 2000,
//         "originalPrice" : 2500
//     },
//     {
//         "id" : 2,
//         "imgSrc" : "./public/assets/당근.jpg",
//         "name" : "친환경 당근 400g",
//         "discountPercent" : 33,
//         "price" : 2000,
//         "originalPrice" : 3000
//     },
//     {
//         "id" : 3,
//         "imgSrc" : "./public/assets/단호박.jpg",
//         "name" : "단호박 1통",
//         "discountPercent" : 12,
//         "price" : 3520,
//         "originalPrice" : 4000
//     }
// ]);



// document.body.appendChild(productSection);
