var size = 5;
var matrix = document.getElementById('field');
matrix_new()
for (var x = 0; x < size; x++) {
    for (var y = 0; y < size; y++) {
        var select_cell = matrix.rows[x].cells[y];
        select_cell.onclick = function () {
            // クリック処理(メイン)
            set_key_img(this.parentNode.rowIndex * size + this.cellIndex);
        }
    }
}

function sliceMaxLength(elem, maxLength) {
    elem.value = elem.value.slice(0, maxLength);
}

function update_property(){
    var doc = document.getElementById("form")
    var pin = [doc.pin0.value, doc.pin1.value, doc.pin2.value, doc.pin3.value];
    var key_img = doc.key_img.value;
    var shift = doc.shift.value;
    var priority = doc.priority.value;
    sessionStorage.setItem("pin", pin);
    sessionStorage.setItem("key_img", key_img);
    sessionStorage.setItem("shift", shift);
    sessionStorage.setItem("user", priority);
    location.href = "main.html";
}

function set_key_img(num){
    var doc = document.getElementById("key_img");
    doc.value = num;
}


// テーブルで盤面を作成する処理
function matrix_new() {
    for (var x = 0; x < size; x++) {
        var tr = document.createElement("tr");
        matrix.appendChild(tr);
        for (var y = 0; y < size; y++) {
            var td = document.createElement("td");
            tr.appendChild(td);
            var img_element = document.createElement("img");
            img_element.id = "icon_" + x + "_" + y;
            img_element.src = "image/icon_" + (x + 1) + "_" + (y + 1) + ".png";
            img_element.alt = "画像";
            img_element.width = 100;
            img_element.height = 100;
            img_element.value = x * 5 + y;
            td.appendChild(img_element);
        }
    }
}