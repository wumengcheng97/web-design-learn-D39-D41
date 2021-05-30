function selectValue(region, product) {
    var data = new Array();
    var data1 = new Array();
    for (let i = 0; i < sourceData.length; i++) {
        const element = sourceData[i];
        if (region.includes(element.region)) {
            data.push(element);
        }
    }

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (product.includes(element.product)) {
            data1.push(element);
        }
    }
    return data1;
}

function renderTable(obj) {
    let {region, product} = returnStateCode();
    const data = selectValue(region, product);
    const regionnum = region.length;
    const productnum = product.length

    //当商品选择了一个，地区选择了多个的时候，商品作为第一列，地区作为第二列，并且把商品这一列的单元格做一个合并，只保留一个商品名称
    //当地区选择了一个，商品选择了多个的时候，地区作为第一列，商品作为第二列，并且把地区这一列的单元格做一个合并，只保留一个地区名称
    //当商品和地区都选择了多于一个的情况下，以商品为第一列，地区为第二列，商品列对同样的商品单元格进行合并
    //当商品和地区都只选择一个的情况下，以商品为第一列，地区为第二列

    var result = "<table border='1px'>";
                      
    if(productnum == 1 && regionnum > 1){
        result = result + "<thead><td>商品</td><td>地区</td><td>1月</td><td>2月</td><td>3月</td><td>4月</td>" +
        "<td>5月</td><td>6月</td><td>7月</td><td>8月</td><td>9月</td><td>10月</td><td>11月</td><td>12月</td></thead>";  
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if (i == 0) {
                result = result + "<tr><td rowspan="+regionnum+">" + element.product + "</td><td>" + element.region + "</td>";
            }else{
                result = result + "<tr><td>" + element.region + "</td>";
            }                    
            for (let j = 0; j < element.sale.length; j++) {
                const element1 = element.sale[j];
                result = result + "<td><input type='text' value='" + element1 + "'/></td>"

            }
            result += "</tr>";
        }    
    }else if (productnum > 1 && regionnum == 1) {
        result = result + "<thead><td>地区</td><td>商品</td><td>1月</td><td>2月</td><td>3月</td><td>4月</td>" +
        "<td>5月</td><td>6月</td><td>7月</td><td>8月</td><td>9月</td><td>10月</td><td>11月</td><td>12月</td></thead>";
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if (i == 0) {
                result = result + "<tr><td rowspan="+productnum+">" + element.region + "</td><td>" + element.product + "</td>";
            }else{
                result = result + "<tr><td>" + element.product + "</td>";
            }                    
            for (let j = 0; j < element.sale.length; j++) {
                const element1 = element.sale[j];
                result = result + "<td><input type='text' value='" + element1 + "'/></td>"

            }
            result += "</tr>";
        }    
    }else if (productnum > 1 && regionnum > 1) {
        result = result + "<thead><td>商品</td><td>地区</td><td>1月</td><td>2月</td><td>3月</td><td>4月</td>" +
        "<td>5月</td><td>6月</td><td>7月</td><td>8月</td><td>9月</td><td>10月</td><td>11月</td><td>12月</td></thead>";  
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if (i == 0 || i == regionnum || i == regionnum*2) {
                result = result + "<tr><td rowspan="+regionnum+">" + element.product + "</td><td>" + element.region + "</td>";
            }else{
                result = result + "<tr><td>" + element.region + "</td>";
            }                  
            for (let j = 0; j < element.sale.length; j++) {
                const element1 = element.sale[j];
                result = result + "<td><input type='text' value='" + element1 + "'/></td>"

            }
            result += "</tr>";
        }   
    }else if (productnum == 1 && regionnum == 1) {
        result = result + "<thead><td>商品</td><td>地区</td><td>1月</td><td>2月</td><td>3月</td><td>4月</td>" +
        "<td>5月</td><td>6月</td><td>7月</td><td>8月</td><td>9月</td><td>10月</td><td>11月</td><td>12月</td></thead>";  
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            result = result + "<tr><td>" + element.product + "</td><td>" + element.region + "</td>";                    
            for (let j = 0; j < element.sale.length; j++) {
                const element1 = element.sale[j];
                result = result + "<td><input type='text' value='" + element1 + "'/></td>"

            }
            result += "</tr>";
        }  
    }
    
    
    result += "</table>";
    obj.innerHTML = result;

    //进行事件绑定
    bindInput(obj.getElementsByTagName("input"));
}

function bindInput(AllInputObj){
    const z_reg = /^(([0-9])|([1-9]([0-9]+)))$/;

    for (let i = 0; i < AllInputObj.length; i++) {
        const element = AllInputObj[i];
        element.onblur = function(){
            let value = element.value;
            if (!z_reg.test(value)) {
                alert("不是正确的数字")
            }
        }
        
    }
    
}