//判定結果
var print_result = document.getElementById("result");
var isClear = sessionStorage.getItem(["isClear"]);
console.log(isClear);
if(isClear == "true"){
    print_result.innerText = "Clear";
}else if(isClear == "false"){
    print_result.innerText = "Failure";
}else{
    print_result.innerText = "Error";
}

//測定時間
var print_clearTime = document.getElementById("time");
var clearTime = sessionStorage.getItem(["clearTime"]);
console.log(clearTime);
print_clearTime.innerText = parseFloat(clearTime + "e-2");