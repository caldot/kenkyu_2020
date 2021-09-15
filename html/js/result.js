var print_result = document.getElementById("result");
var print_clearTime = document.getElementById("time");
var isClear = sessionStorage.getItem(["isClear"]);
var clearTime = sessionStorage.getItem(["clearTime"]);
console.log(isClear);
console.log(clearTime);
if(isClear == "true"){
    print_result.innerText = "Clear";
}else if(isClear == "false"){
    print_result.innerText = "Failure";
}else{
    print_result.innerText = "Error";
}
print_clearTime.innerText = clearTime;