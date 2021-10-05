var array = [[5, 5], [5, 6], [5, 2], [5, 3], [3, 4]];
var res = 100;
var key = 1;

for (var num of array) {
    if (res > (num[1] - key)) {
        res = num[1];
    }
}

console.log(res);