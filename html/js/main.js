/*
サンプルコード
pin 1, 2, 3, 0
img sikaku_green
vector right
priority shape

*/

/*
実装済み
・右図形
*/

// 初期変数定義
var step = 3; //ステップ数
var nowRound = 1;
var maxRound = 10;
var size = 5;
var isClear = true;

//時間計測用変数(clearTime = endTime - startTime)
var startTime = 0;
var endTime = 0;
var clearTime = 0;

//ユーザ情報
var pin = [1, 2, 3, 0];
var key_img = 7;
var mode = 0;

// 盤面の状況を二次元配列で定義
var matrix_array = new Array(size);
for (var x = 0; x < matrix_array.length; x++) {
    matrix_array[x] = new Array(size);
}
var img_array = new Array(size);
for (var x = 0; x < img_array.length; x++) {
    img_array[x] = new Array(size);
}

//画像データを初期化
for (var x = 0; x < size; x++) {
    for (var y = 0; y < size; y++) {
        img_array[x][y] = "image/icon_" + (x + 1) + "_" + (y + 1) + ".png";
    }
}

// matrixとimgを紐づけ_dict[num] = [x座標, y座標];
var dict = new Array(size * size);
for (var x = 0; x < size; x++) {
    for (var y = 0; y < size; y++) {
        dict[x * size + y] = [x, y];
    }
}

//console.log(dict);

// HTMLで定義したテーブルを取得
var matrix = document.getElementById('field');

// user情報を登録
init_user();

// 取得したテーブルに盤面生成
matrix_init();
matrix_new(); //1度切りの処理
startTime = performance.now();
matrix_set();

// クリックした時に実行されるイベント
for (var x = 0; x < size; x++) {
    for (var y = 0; y < size; y++) {
        var select_cell = matrix.rows[x].cells[y];
        select_cell.onclick = function () {
            // クリック処理(メイン)
            if (step - 1 > 0) {
                var img_index = matrix_array[this.parentNode.rowIndex][this.cellIndex];
                if (judge(img_index) != true) {
                    isClear = false;
                }
                matrix_init();
                matrix_set();
                step--;
            } else {
                endTime = performance.now();
                clearTime = endTime - startTime;
                clearTime = parseInt(clearTime / 1000);
                sessionStorage.setItem("clearTime", clearTime);
                sessionStorage.setItem("isClear", isClear);
                location.href = "result.html";
            }
        }
    }
}

//---関数---

function judge(img_index) {
    var key_array = array_indexOf(matrix_array, key_img);
    console.log(key_array[0] + ", " + key_array[1]);

    var res;
    switch (mode) {
        case 0:
            res = mode_right_vertex(key_array);
            break;

        case 1:
            res = mode_right_color(key_array);
            break;

        case 2:
            res = mode_left_vertex(key_array);
            break;

        case 3:
            res = mode_left_color(key_array);

        case 4:
            res = mode_up_vertex(key_array);
            break;

        case 5:
            res = mode_up_color(key_array);
            break;

        case 6:
            res = mode_down_vertex(key_array);
            break;

        case 7:
            res = mode_down_color(key_array);
            break;
    }


    if (img_index == matrix_array[res[0]][res[1]]) {
        return true;
    } else {
        return false;
    }
}

function array_indexOf(array, target) { //2次元配列のindexを取得
    var list;
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            if (array[i][j] == target) {
                list = [i, j];
            }
        }
    }
    return list;
};

function matrix_init() {  //盤面の初期化
    var list = new Array(size * size);
    for (var i = 0; i < size * size; i++) {
        list[i] = i;
    }

    //シャッフル
    for (var x = 0; x < size; x++) {
        for (var y = 0; y < size; y++) {
            var n = list.length;
            if (n > 0) {
                var k = Math.floor(Math.random() * n);
                matrix_array[x][y] = list[k];
                list.splice(k, 1);
            }
        }
    }

    // //debug
    // for (var x = 0; x < size; x++) {
    //     for (var y = 0; y < size; y++) {
    //         matrix_array[x][y] = list[x * size + y];
    //     }
    // }

    console.log(matrix_array);
}

// 盤面状況(配列)を実際の盤面へ反映させる処理
function matrix_set() {
    for (var x = 0; x < size; x++) {
        for (var y = 0; y < size; y++) {
            var tmp = dict[matrix_array[x][y]];
            var img_element = document.getElementById("icon_" + x + "_" + y);
            img_element.src = img_array[dict[matrix_array[x][y]][0]][dict[matrix_array[x][y]][1]];
        }
    }
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
            img_element.src = "";
            img_element.alt = "画像";
            img_element.width = 100;
            img_element.height = 100;
            td.appendChild(img_element);
        }
    }
}

function init_user() {
    if (pin_tmp = sessionStorage.getItem("pin")) {
        var pin_tmp = sessionStorage.getItem("pin");
        pin = pin_tmp.split(",");
        for (var i = 0; i < pin.length; i++) {
            pin[i] = Number(pin[i]);
        }

        key_img = Number(sessionStorage.getItem("key_img"));
        var shift = Number(sessionStorage.getItem("shift"));
        var color = Number(sessionStorage.getItem("color"));
        mode = set_mode(shift, color);


    } else {
        pin = [1, 2, 3, 0];
        key_img = 7;
        mode = 0;
    }

    if(sessionStorage.getItem(["round"]) != null){
        nowRound = sessionStorage.getItem(["round"])
        if(nowRound > maxRound){
            window.alert("挑戦回数を超えました");
            location.href = "return.html";
            return;
        }
    }

    window.alert(nowRound + "回目");
    nowRound ++;
    sessionStorage.setItem(["round"], nowRound);

    console.log(pin);
    console.log(pin.length);
    console.log(key_img);
    console.log(mode);
}

function set_mode(shift, color) {
    return shift * 2 + color;
}