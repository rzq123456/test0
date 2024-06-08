var phone='';
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'output.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

// 在页面上显示JSON数据
function displayData(data) {
    var jsonData = JSON.parse(data);
    var container1 = document.getElementById('parameter1');
    var phone = phone;
    for (let i = 0; i < jsonData.length; ++i) {
        if (jsonData[i]["机型"] == phone) {
            container1.innerHTML = '内存:' + jsonData[i]['内存'] + '<br>CPU型号:' + jsonData[i]['CPU型号'];
            break;
        }
    }
    var container2 = document.getElementById("parameter2");
    var phone2 = document.getElementById("phones").value;
    for (let i = 0; i < jsonData.length; ++i) {
        if (jsonData[i]["机型"] == phone2) {
            container2.innerHTML = '内存:' + jsonData[i]['内存'] + '<br>CPU型号:' + jsonData[i]['CPU型号'];
            break;
        }
    }
}


function change_opt(data) {
    var jsonData = JSON.parse(data);
    // 清空select元素中的现有选项  
    document.getElementById('phones').innerHTML = '';

    // 遍历API返回的选项列表，并添加到select元素中  
    jsonData.forEach(option => {
        let opt = document.createElement('option');
        opt.value = option['机型'];
        opt.text = option['机型'];
        document.getElementById('phones').appendChild(opt);
    });
}


function setvalue() {
    var p = document.getElementById("phones").value;
    phone=p;
}
