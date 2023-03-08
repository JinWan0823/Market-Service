import { getCartInfo } from "./module/cartToggleButton.js";
import { getProductList } from "./module/productList.js";
import { makeDOMwithProperties } from "./utils/dom.js";

// 1. 장바구니에 있는 물품 정보 가져오기
// 2. 물품 정보를 productList 와 연결
// 3. section 아래의 cart-pay-container 앞에 삽입하기

const sectionDOM = document.getElementsByTagName('section')[0];
const cartPayContainerDOM = document.getElementById('cart-pay-container');

const cartInfo = getCartInfo(); // 정보를 받아오거나 없다면 [] 빈 배열 반환

const reloadPage = () => location.reload();


if(cartInfo.length < 1){
    //장바구니에 상품이 없을때 내용
    const noticeDOM = makeDOMwithProperties('div',{
        className : "product-list-con",
        innerHTML : '장바구니에 상품이 없습니다.'
    })
    sectionDOM.insertBefore(noticeDOM,cartPayContainerDOM);
} else {
    const productListDOM = getProductList(cartInfo,reloadPage);
    sectionDOM.insertBefore(productListDOM,cartPayContainerDOM);
}