import { CART_COOKIE_KEY } from "./constants/cart.js";
import { getCartInfo } from "./module/cartToggleButton.js";
import { setPayInfo } from "./module/payModule.js";
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


const cartAllDeleteButtonDOM = document.getElementById('remove-all-button');
cartAllDeleteButtonDOM.onclick = () => {
    //localStorage에 있는 장바구니 물품 목록 전부 삭제
    localStorage.removeItem(CART_COOKIE_KEY); // cartInfo 라는 키를 가진 키-값 쌍이 삭제
    //localStorage.clear()

    location.reload(); // 새로고침하면 코드가 위에서부터 다시 실행됨
}

setPayInfo();
