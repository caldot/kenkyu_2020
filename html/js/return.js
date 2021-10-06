//ラウンド数を更新
var initRound = 1;
sessionStorage.setItem("round", initRound);

//resStringをtableに表示
var resString = sessionStorage.getItem("resString");
var arrays = resString.split('%');
var array = new Array(arrays.length);
for(var i=0; i<arrays.length; i++){
    array[i] = arrays[i].split(',');
}
console.log(array);
var table = document.getElementById("resTable");
for(var i=0; i<arrays.length; i++){
    array[i][1] = parseFloat(array[i][1] + "e-2");
}

for(var i=0; i<arrays.length; i++){
    var tr = document.createElement("tr");
    table.appendChild(tr);
    for(var j=0; j<array[i].length; j++){
        var td = document.createElement("td");
        if(j == 1){
            td.innerText = array[i][j] + "秒";
        }else{
            td.innerText = array[i][j];
        }
        tr.appendChild(td);
    }
}



//resStringを削除
sessionStorage.setItem("resString", null);
