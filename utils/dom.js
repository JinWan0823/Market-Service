export const makeDOMwithProperties = (domType,propertyMap) =>{
    //domType : div, a, li...
    //propertyMap : {"className" : "product-card","alt" : "alt-name",}
    //Object.keys(propertyMap) -> ["className", "alt"]
    const dom = document.createElement(domType);
    Object.keys(propertyMap).forEach((key) => {
        dom[key] = propertyMap[key]
    });

    return dom;
}

export const appendChildrenList = (target,childrenList) => {
    if(!Array.isArray(childrenList)) return; //조기리턴 , 배열이 아닐경우 appendChild 메서드를 사용

    childrenList.forEach((children)=>{
        target.appendChild(children);
    })
}