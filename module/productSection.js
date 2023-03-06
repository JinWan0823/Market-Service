import { appendChildrenList, makeDOMwithProperties } from "../utils/dom.js"
import { getProductList } from "./productList.js"

export const getProductSection = (sectionName, productInfoList) => {
    const productListSection = makeDOMwithProperties('div',{
        className : 'product-list-section'
    })

    const sectionTitle = makeDOMwithProperties('div',{
        className : 'section-title',
    })
    const titleHignLight =makeDOMwithProperties('span',{
        className : 'section-title-highlight'
    })
    const title = makeDOMwithProperties('span',{
        innerHTML:sectionName
    })

    appendChildrenList(sectionTitle,[titleHignLight,title]);

    const productListContainer = getProductList(productInfoList);

    appendChildrenList(productListSection,[sectionTitle,productListContainer])

    return productListSection;

}