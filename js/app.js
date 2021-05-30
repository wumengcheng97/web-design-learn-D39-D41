let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]

var region_obj = document.getElementById("region-radio-wrapper");
var product_obj = document.getElementById("product-radio-wrapper");

function returnStateCode(){
    let value = decodeURI(location.hash.substr(1));
    let regions =  value.split('&')[0].split(',');
    let products = value.split('&')[1].split(',');
    return {
        region: regions,
        product: products
    };
}

// 对象或数组自己根据喜好实现均可，调用上面的函数
renderCheckBox(region_obj, [{
    value: 1,
    text: "华东"
}, {
    value: 2,
    text: "华南"
},{
    value: 3,
    text: "华北"
}]);

renderCheckBox(product_obj, [{
    value: 1,
    text: "手机"
}, {
    value: 2,
    text: "笔记本"
},{
    value: 3,
    text: "智能音箱"
}]);

window.onhashchange = renderTable(document.getElementById("table-wrapper"));


//document.getElementById("table-wrapper")

/*document.getElementById("button").onclick = function(){
    const allinput = document.getElementsByClassName("num-input");

    let valueMap = new Array();
    for (let i = 0; i < allinput.length; i++) {
        const element = allinput[i];
        valueMap[i] = parseInt(element.innerHTML);
        
    }

    localStorage.setItem("DataModel", valueMap);
    localStorage.setItem("DataCount", allinput.length);

    console.log(localStorage.getItem("DataModel"))
    console.log(localStorage.getItem("DataCount"));
}*/
