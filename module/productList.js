import { makeDOMwithProperties } from "../utils/dom.js"
import { getProductCard } from "./productCard.js";

export const getProductList = (productInfoList) => {
    if(!productInfoList || !Array.isArray(productInfoList)) return ;
    const productListContainer = makeDOMwithProperties('div',{
        className : "product-list-con"
    })

    productInfoList.forEach((productInfo)=>{
        productListContainer.appendChild(
            getProductCard({
                ...productInfo
            })
        )
    })



    return productListContainer;
}