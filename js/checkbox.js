function renderCheckBox(CheckBoxObj, data) {
    let {region, product} = returnStateCode();

    var html = "<input name='全选' type='checkbox' value='0' class='check-all'/><lable>全选</lable>";
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (region.includes(element.text) || product.includes(element.text)) {
            html += "<input name="+element.text+" type='checkbox' value="+element.value+" class='check-item' checked/><lable>"+element.text+"</lable>";
        }else{
            html += "<input name="+element.text+" type='checkbox' value="+element.value+" class='check-item'/><lable>"+element.text+"</lable>";
        }
        
    }
    CheckBoxObj.innerHTML = html;

    CheckBoxObj.addEventListener("click",function(event){
        let input = event.target;
        if (input.type == "checkbox") {
            var parent = input.parentElement;
            var all = parent.getElementsByClassName("check-all")[0];
            var chils = parent.getElementsByClassName("check-item");
            if (input.value == 0) { //全选 做全选对应的逻辑 
                for (let i = 0; i < chils.length; i++) {
                    const element = chils[i];
                    element.checked = true;
                }
                console.log(chils);
            } else {  //做子选项对应的逻辑
                var num = 0;
                for (let i = 0; i < chils.length; i++) {
                    const element = chils[i];
                    if (element.checked) {
                        num ++;
                    }
                }   
                if (num == 3) { //全选中
                    console.log(all);
                    all.checked = true;
                }else if (num < 3 && num > 0) {
                    all.checked = false;
                }else{

                }
            }
            var region_temp = region_obj.querySelectorAll(".check-item");
            var product_temp = product_obj.querySelectorAll(".check-item");
            var region = new Array();
            var product = new Array();
            for (let i = 0; i < region_temp.length; i++) {
                const element = region_temp[i];
                if (element.checked) {
                    region.push(element.name);
                }
            }
            for (let i = 0; i < product_temp.length; i++) {
                const element = product_temp[i];
                if (element.checked) {
                    product.push(element.name);
                }
            }
            //设置hash
            location.hash = region.toString() +"&"+ product.toString();
            renderTable(document.getElementById("table-wrapper"));
        }
    });
   
}