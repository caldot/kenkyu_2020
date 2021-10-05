
function printlog(n1, n2) {
    console.log("結果座標" + n1 + ", " + n2);
}

//--------------shift_mode--------------------

function mode_right_vertex(array) {
    var res_array = new Array(2);
    for (var i = 0; i < 2; i++) {
        res_array[i] = array[i];
    }

    //--------MODE_right_vertex----------
    res_array = shift_right(res_array, pin[3 - step]); //右シフト1
    res_array = vertical_vertex(res_array, key_img);//縦シフト
    res_array = shift_right(res_array, pin[4 - step]); //右シフト2
    printlog(res_array[0], res_array[1]);
    //----------------------------------


    return res_array;
}

function mode_left_vertex(array) {
    var res_array = new Array(2);
    for (var i = 0; i < 2; i++) {
        res_array[i] = array[i];
    }

    //--------MODE_left_vertex----------
    res_array = shift_left(res_array, pin[3 - step]); //右シフト1
    res_array = vertical_vertex(res_array, key_img);//縦シフト
    res_array = shift_left(res_array, pin[4 - step]); //右シフト2
    printlog(res_array[0], res_array[1]);
    //----------------------------------

    return res_array;
}

function mode_up_vertex(array) {
    var res_array = new Array(2);
    for (var i = 0; i < 2; i++) {
        res_array[i] = array[i];
    }

    //--------MODE_up_vertex----------
    res_array = shift_up(res_array, pin[3 - step]); //下シフト1
    res_array = horizontal_vertex(res_array, key_img); //横シフト
    res_array = shift_up(res_array, pin[4 - step]); //下シフト2
    printlog(res_array[0], res_array[1]);
    //----------------------------------

    return res_array;
}

function mode_down_vertex(array) {
    var res_array = new Array(2);
    for (var i = 0; i < 2; i++) {
        res_array[i] = array[i];
    }

    //--------MODE_down_vertex----------
    res_array = shift_down(res_array, pin[3 - step]); //下シフト1
    res_array = horizontal_vertex(res_array, key_img); //横シフト
    res_array = shift_down(res_array, pin[4 - step]); //下シフト2
    printlog(res_array[0], res_array[1]);
    //----------------------------------

    return res_array;
}

function mode_right_color(array) {
    var res_array = new Array(2);
    for (var i = 0; i < 2; i++) {
        res_array[i] = array[i];
    }

    //--------MODE_right_color----------
    res_array = shift_right(res_array, pin[3 - step]); //右シフト1
    res_array = vertical_color(res_array, key_img);//縦シフト
    res_array = shift_right(res_array, pin[4 - step]); //右シフト2
    printlog(res_array[0], res_array[1]);
    //----------------------------------

    return res_array;
}

function mode_left_color(array) {
    var res_array = new Array(2);
    for (var i = 0; i < 2; i++) {
        res_array[i] = array[i];
    }

    //--------MODE_left_color----------
    res_array = shift_left(res_array, pin[3 - step]); //右シフト1
    res_array = vertical_color(res_array, key_img);//縦シフト
    res_array = shift_left(res_array, pin[4 - step]); //右シフト2
    printlog(res_array[0], res_array[1]);
    //----------------------------------

    return res_array;
}

function mode_up_color(array) {
    var res_array = new Array(2);
    for (var i = 0; i < 2; i++) {
        res_array[i] = array[i];
    }

    //--------MODE_up_color----------
    res_array = shift_up(res_array, pin[3 - step]); //下シフト1
    res_array = horizontal_color(res_array, key_img); //横シフト
    res_array = shift_up(res_array, pin[4 - step]); //下シフト2
    printlog(res_array[0], res_array[1]);
    //----------------------------------

    return res_array;
}

function mode_down_color(array) {
    var res_array = new Array(2);
    for (var i = 0; i < 2; i++) {
        res_array[i] = array[i];
    }

    //--------MODE_down_color----------
    res_array = shift_down(res_array, pin[3 - step]); //下シフト1
    res_array = horizontal_color(res_array, key_img); //横シフト
    res_array = shift_down(res_array, pin[4 - step]); //下シフト2
    printlog(res_array[0], res_array[1]);
    //----------------------------------

    return res_array;
}


//------------------vertex--------------------------------------------

function horizontal_vertex(array, key) { //横シフト_vertex(完成)
    console.log("horizontal_vertex");
    //vartex
    var margin = 100;
    var res = [100, 100];
    var tmp_array = new Array(size); //移動前の座標
    for (var i = 0; i < size; i++) {
        tmp_array[i] = new Array(2);
    }

    for (var i = 0; i < size; i++) { //行の要素を取得
        for (var j = 0; j < 2; j++) {
            tmp_array[i][j] = dict[matrix_array[array[0]][i]][j];
        }
    }
    console.log(tmp_array);


    for (var i = 0; i < size; i++) { //dict[key][0](キー図形座標の縦成分)より小さい要素にsizeを足す([2, 4]でkey3の場合, [7, 4に変換])
        if (tmp_array[i][0] <= dict[key][0]) {
            tmp_array[i][0] = tmp_array[i][0] + size;
        }
    }

    for (var i = 0; i < size; i++) { //dict[key][0]に最も近い値をresに格納
        if (margin > (tmp_array[i][0] - dict[key][0])) {
            margin = (tmp_array[i][0] - dict[key][0]);
            res[0] = tmp_array[i][0];
        }
    }
    console.log("key縦 :" + dict[key][0]);
    console.log("res[0] :" + res[0]);

    tmp_array = tmp_array.filter((item => item[0] == res[0])); //図形座標の縦成分がresである要素を抽出

    if (tmp_array.length > 1) { //ユニークに決まらなければ色を用いて決める
        //color
        margin = 100;
        for (var atmp of tmp_array) { //dict[key][1](キー図形座標の横成分)より小さい要素にsizeを足す([4, 2]でkey3の場合, [4, 7に変換])
            if (atmp[1] <= dict[key][1]) {
                atmp[1] = atmp[1] + size;
            }
        }

        for (var atmp of tmp_array) { //dict[key][1]に最も近い値をresに格納(Bugあり)
            if (margin > (atmp[1] - dict[key][1])) {
                margin = (atmp[1] - dict[key][1]);
                res[1] = atmp[1];
            }
        }

        console.log("key横 :" + dict[key][1]);
        console.log("res[1] :" + res[1]);
    } else {
        res[1] = tmp_array[0][1];
    }
    console.log(tmp_array);
    for (var i = 0; i < 2; i++) {
        if (res[i] >= size) {
            res[i] = res[i] - size;
        }
    }
    console.log(res[0] + ", " + res[1]);
    return array_indexOf(matrix_array, res[0] * size + res[1]);
}

function vertical_vertex(array, key) { //縦シフト_vertex
    console.log("vertical_vertex");
    //vartex
    var margin = 100;
    var res = [100, 100];
    var tmp_array = new Array(size); //移動前の座標
    for (var i = 0; i < size; i++) {
        tmp_array[i] = new Array(2);
    }

    for (var i = 0; i < size; i++) { //列の要素を取得
        for (var j = 0; j < 2; j++) {
            tmp_array[i][j] = dict[matrix_array[i][array[1]]][j];
        }
    }
    console.log(tmp_array);

    for (var i = 0; i < size; i++) { //dict[key][0](キー図形座標の縦成分)より小さい要素にsizeを足す([2, 4]でkey3の場合, [7, 4に変換])
        if (tmp_array[i][0] <= dict[key][0]) {
            tmp_array[i][0] = tmp_array[i][0] + size;
        }
    }

    for (var i = 0; i < size; i++) { //dict[key][0]に最も近い値をresに格納
        if (margin > (tmp_array[i][0] - dict[key][0])) {
            margin = (tmp_array[i][0] - dict[key][0]);
            res[0] = tmp_array[i][0];
        }
    }
    console.log("key縦 :" + dict[key][0]);
    console.log("res[0] :" + res[0]);


    tmp_array = tmp_array.filter((item => item[0] == res[0])); //図形座標の縦成分がresである要素を抽出
    console.log(tmp_array);

    if (tmp_array.length > 1) { //ユニークに決まらなければ色を用いて決める
        //color
        margin = 100;
        for (var atmp of tmp_array) { //dict[key][1](キー図形座標の横成分)より小さい要素にsizeを足す([4, 2]でkey3の場合, [4, 7に変換])
            if (atmp[1] <= dict[key][1]) {
                atmp[1] = atmp[1] + size;
            }
        }

        for (var atmp of tmp_array) { //dict[key][1]に最も近い値をresに格納(Bugあり)
            if (margin > (atmp[1] - dict[key][1])) {
                margin = (atmp[1] - dict[key][1])
                res[1] = atmp[1];
            }
        }

        console.log("key横 :" + dict[key][1]);
        console.log("res[1] :" + res[1]);
    } else {
        res[1] = tmp_array[0][1];
    }
    console.log(tmp_array);

    for (var i = 0; i < 2; i++) {
        if (res[i] >= size) {
            res[i] = res[i] - size;
        }
    }
    console.log(res[0] + ", " + res[1]);
    return array_indexOf(matrix_array, res[0] * size + res[1]);
}

//-------------------color------------------------
function horizontal_color(array, key) { //横シフト_color
    console.log("horizontal_color");
    console.log(array);
    //color
    var margin = 100;
    var res = [100, 100];
    var tmp_array = new Array(size); //移動前の座標
    for (var i = 0; i < size; i++) {
        tmp_array[i] = new Array(2);
    }

    for (var i = 0; i < size; i++) { //行の要素を取得
        for (var j = 0; j < 2; j++) {
            tmp_array[i][j] = dict[matrix_array[array[0]][i]][j];
        }
    }
    console.log(tmp_array);

    for (var i = 0; i < size; i++) { //dict[key][0](キー図形座標の横成分)より小さい要素にsizeを足す([2, 4]でkey3の場合, [7, 4に変換])
        if (tmp_array[i][1] <= dict[key][1]) {
            tmp_array[i][1] = tmp_array[i][1] + size;
        }
    }

    for (var i = 0; i < size; i++) { //dict[key][1]に最も近い値をresに格納
        if (margin > (tmp_array[i][1] - dict[key][1])) {
            margin =  (tmp_array[i][1] - dict[key][1]);
            res[1] = tmp_array[i][1];
        }
    }
    console.log("key縦 :" + dict[key][1]);
    console.log("res[1] :" + res[1]);


    tmp_array = tmp_array.filter((item => item[1] == res[1])); //図形座標の縦成分がresである要素を抽出
    console.log(tmp_array);

    if (tmp_array.length > 1) { //ユニークに決まらなければ図形を用いて決める
        //vertex
        margin = 100;
        for (var atmp of tmp_array) { //dict[key][0](キー図形座標の縦成分)より小さい要素にsizeを足す([4, 2]でkey3の場合, [4, 7に変換])
            if (atmp[0] <= dict[key][0]) {
                atmp[0] = atmp[0] + size;
            }
        }

        for (var atmp of tmp_array) { //dict[key][0]に最も近い値をresに格納(Bugあり)
            if (margin > (atmp[0] - dict[key][0])) {
                margin = (atmp[0] - dict[key][0]);
                res[0] = atmp[0];
            }
        }

        console.log("key縦 :" + dict[key][0]);
        console.log("res[0] :" + res[0]);
    } else {
        res[0] = tmp_array[0][0];
    }
    console.log(tmp_array);

    for (var i = 0; i < 2; i++) {
        if (res[i] >= size) {
            res[i] = res[i] - size;
        }
    }
    console.log(res[0] + ", " + res[1]);
    return array_indexOf(matrix_array, res[0] * size + res[1]);
}

function vertical_color(array, key) { //縦シフト_color
    console.log("vartical_vertex");
    //color
    var margin = 100;
    var res = [100, 100];
    var tmp_array = new Array(size); //移動前の座標
    for (var i = 0; i < size; i++) {
        tmp_array[i] = new Array(2);
    }

    for (var i = 0; i < size; i++) { //列の要素を取得
        for (var j = 0; j < 2; j++) {
            tmp_array[i][j] = dict[matrix_array[i][array[1]]][j];
        }
    }
    console.log(tmp_array);

    for (var i = 0; i < size; i++) { //dict[key][0](キー図形座標の横成分)より小さい要素にsizeを足す([2, 4]でkey3の場合, [7, 4に変換])
        if (tmp_array[i][1] <= dict[key][1]) {
            tmp_array[i][1] = tmp_array[i][1] + size;
        }
    }

    for (var i = 0; i < size; i++) { //dict[key][1]に最も近い値をresに格納
        if (margin > (tmp_array[i][1] - dict[key][1])) {
            margin = (tmp_array[i][1] - dict[key][1]);
            res[1] = tmp_array[i][1];
        }
    }
    console.log("key縦 :" + dict[key][1]);
    console.log("res[1] :" + res[1]);


    tmp_array = tmp_array.filter((item => item[1] == res[1])); //図形座標の縦成分がresである要素を抽出
    console.log(tmp_array);

    if (tmp_array.length > 1) { //ユニークに決まらなければ図形を用いて決める
        //vertex
        margin = 100;
        for (var atmp of tmp_array) { //dict[key][0](キー図形座標の縦成分)より小さい要素にsizeを足す([4, 2]でkey3の場合, [4, 7に変換])
            if (atmp[0] <= dict[key][0]) {
                atmp[0] = atmp[0] + size;
            }
        }

        for (var atmp of tmp_array) { //dict[key][0]に最も近い値をresに格納(Bugあり)
            if (margin > (atmp[0] - dict[key][0])) {
                margin = (atmp[0] - dict[key][0]);
                res[0] = atmp[0];
            }
        }

        console.log("key縦 :" + dict[key][0]);
        console.log("res[0] :" + res[0]);
    } else {
        res[0] = tmp_array[0][0];
    }
    console.log(tmp_array);

    for (var i = 0; i < 2; i++) {
        if (res[i] >= size) {
            res[i] = res[i] - size;
        }
    }
    console.log(res[0] + ", " + res[1]);
    return array_indexOf(matrix_array, res[0] * size + res[1]);
}

function shift_right(array, shift) { //右シフト
    array[1] = array[1] + shift;
    if (array[1] > (size - 1)) {
        array[1] = 0 + (array[1] - size);
    }
    return array;
}

function shift_left(array, shift) { //左シフト
    array[1] = array[1] - shift;
    if (array[1] < 0) {
        array[1] = size + array[1];
    }
    return array;
}
function shift_up(array, shift) { //上シフト
    array[0] = array[0] - shift;
    if (array[0] < 0) {
        array[0] = size + array[0];
    }
    return array;
}
function shift_down(array, shift) { //下シフト
    array[0] = array[0] + shift;
    if (array[0] > (size - 1)) {
        array[0] = 0 + (array[0] - size);
    }
    return array;
}