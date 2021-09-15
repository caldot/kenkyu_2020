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
    console.log(res_array[0] + ", " + res_array[1]);
    //----------------------------------

    return res_array;
}

function mode_left_vertex(array){
    var res_array = new Array(2);
    for (var i = 0; i < 2; i++) {
        res_array[i] = array[i];
    }

    //--------MODE_left_vertex----------
    res_array = shift_left(res_array, pin[3 - step]); //右シフト1
    res_array = vertical_vertex(res_array, key_img);//縦シフト
    res_array = shift_left(res_array, pin[4 - step]); //右シフト2
    console.log(res_array[0] + ", " + res_array[1]);
    //----------------------------------

    return res_array;
}

function mode_up_vertex(array){
    var res_array = new Array(2);
    for (var i = 0; i < 2; i++) {
        res_array[i] = array[i];
    }

    //--------MODE_up_vertex----------
    res_array = shift_up(res_array, pin[3 - step]); //下シフト1
    res_array = horizontal_vertex(res_array, key_img); //横シフト
    res_array = shift_up(res_array, pin[4 - step]); //下シフト2
    console.log(res_array[0] + ", " + res_array[1]);
    //----------------------------------

    return res_array;
}

function mode_down_vertex(array){
    var res_array = new Array(2);
    for (var i = 0; i < 2; i++) {
        res_array[i] = array[i];
    }

    //--------MODE_down_vertex----------
    res_array = shift_down(res_array, pin[3 - step]); //下シフト1
    res_array = horizontal_vertex(res_array, key_img); //横シフト
    res_array = shift_down(res_array, pin[4 - step]); //下シフト2
    console.log(res_array[0] + ", " + res_array[1]);
    //----------------------------------

    return res_array;
}

function mode_right_color(array){
    var res_array = new Array(2);
    for (var i = 0; i < 2; i++) {
        res_array[i] = array[i];
    }

    //--------MODE_right_color----------
    res_array = shift_right(res_array, pin[3 - step]); //右シフト1
    res_array = vertical_color(res_array, key_img);//縦シフト
    res_array = shift_right(res_array, pin[4 - step]); //右シフト2
    console.log(res_array[0] + ", " + res_array[1]);
    //----------------------------------

    return res_array;
}

function mode_left_color(array){
    var res_array = new Array(2);
    for (var i = 0; i < 2; i++) {
        res_array[i] = array[i];
    }

    //--------MODE_left_color----------
    res_array = shift_left(res_array, pin[3 - step]); //右シフト1
    res_array = vertical_color(res_array, key_img);//縦シフト
    res_array = shift_left(res_array, pin[4 - step]); //右シフト2
    console.log(res_array[0] + ", " + res_array[1]);
    //----------------------------------

    return res_array;
}

function mode_up_color(array){
    var res_array = new Array(2);
    for (var i = 0; i < 2; i++) {
        res_array[i] = array[i];
    }

    //--------MODE_up_color----------
    res_array = shift_up(res_array, pin[3 - step]); //下シフト1
    res_array = horizontal_color(res_array, key_img); //横シフト
    res_array = shift_up(res_array, pin[4 - step]); //下シフト2
    console.log(res_array[0] + ", " + res_array[1]);
    //----------------------------------

    return res_array;
}

function mode_down_color(array){
    var res_array = new Array(2);
    for (var i = 0; i < 2; i++) {
        res_array[i] = array[i];
    }

    //--------MODE_down_color----------
    res_array = shift_down(res_array, pin[3 - step]); //下シフト1
    res_array = horizontal_color(res_array, key_img); //横シフト
    res_array = shift_down(res_array, pin[4 - step]); //下シフト2
    console.log(res_array[0] + ", " + res_array[1]);
    //----------------------------------

    return res_array;
}


//------------------vertex--------------------------------------------

function horizontal_vertex(array, key){ //横シフト_vertex
    var res = 100;
    var tmp;
    var tmp_array = new Array(size); //移動前の座標
    for (var i = 0; i < size; i++) {
        tmp_array[i] = new Array(2);
    }

    //vartex
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < 2; j++) {
            if (dict[matrix_array[array[0]][i]][j] <= dict[key][j]) {
                tmp_array[i][j] = dict[matrix_array[array[0]][i]][j] + size;
            } else {
                tmp_array[i][j] = dict[matrix_array[array[0]][i]][j];
            }
        }

        if (res > tmp_array[i][0] - dict[key][0]) {
            res = tmp_array[i][0];
        }
    }
    //console.log(res);
    //console.log(tmp_array);
    var tmp_array = tmp_array.filter((item => item[0] == res));
    //console.log(tmp_array);

    //color
    res = 100;
    for (var i = 0; i < tmp_array.length; i++) {
        if (res > tmp_array[i][1] - dict[key][1]) {
            res = tmp_array[i][1];
        }
    }
    //console.log(res);
    //console.log(tmp_array);
    var tmp_array = tmp_array.filter((item => item[1] == res));
    console.log(tmp_array);

    //matrix_arrayに変換
    for (var i = 0; i < 2; i++) {
        if (tmp_array[0][i] >= 5) {
            tmp_array[0][i] -= size;
        }
    }
    var target_index = tmp_array[0][0] * size + tmp_array[0][1];
    console.log(target_index);
    return array_indexOf(matrix_array, target_index);
}

function vertical_vertex(array, key) { //縦シフト_vertex
    //console.log(array)
    //console.log(key)
    var res = 100;
    var tmp;
    var tmp_array = new Array(size);
    for (var i = 0; i < size; i++) {
        tmp_array[i] = new Array(2);
    }

    //vartex
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < 2; j++) {
            if (dict[matrix_array[i][array[1]]][j] <= dict[key][j]) {
                tmp_array[i][j] = dict[matrix_array[i][array[1]]][j] + size;
            } else {
                tmp_array[i][j] = dict[matrix_array[i][array[1]]][j];
            }
        }

        if (res > tmp_array[i][0] - dict[key][0]) {
            res = tmp_array[i][0];
        }
    }
    //console.log(res);
    //console.log(tmp_array);
    var tmp_array = tmp_array.filter((item => item[0] == res));
    //console.log(tmp_array);

    //color
    res = 100;
    for (var i = 0; i < tmp_array.length; i++) {
        if (res > tmp_array[i][1] - dict[key][1]) {
            res = tmp_array[i][1];
        }
    }
    //console.log(res);
    //console.log(tmp_array);
    var tmp_array = tmp_array.filter((item => item[1] == res));
    console.log(tmp_array);

    //matrix_arrayに変換
    for (var i = 0; i < 2; i++) {
        if (tmp_array[0][i] >= 5) {
            tmp_array[0][i] -= size;
        }
    }
    var target_index = tmp_array[0][0] * size + tmp_array[0][1];
    console.log(target_index);
    return array_indexOf(matrix_array, target_index);
}

//-------------------color------------------------
function horizontal_color(array, key){ //横シフト_color
    var res = 100;
    var tmp;
    var tmp_array = new Array(size); //移動前の座標
    for (var i = 0; i < size; i++) {
        tmp_array[i] = new Array(2);
    }

    //vartex
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < 2; j++) {
            if (dict[matrix_array[array[0]][i]][j] <= dict[key][j]) {
                tmp_array[i][j] = dict[matrix_array[array[0]][i]][j] + size;
            } else {
                tmp_array[i][j] = dict[matrix_array[array[0]][i]][j];
            }
        }

        if (res > tmp_array[i][1] - dict[key][1]) {
            res = tmp_array[i][1];
        }
    }
    //console.log(res);
    //console.log(tmp_array);
    var tmp_array = tmp_array.filter((item => item[1] == res));
    //console.log(tmp_array);

    //vertex
    res = 100;
    for (var i = 0; i < tmp_array.length; i++) {
        if (res > tmp_array[i][0] - dict[key][0]) {
            res = tmp_array[i][0];
        }
    }
    //console.log(res);
    //console.log(tmp_array);
    var tmp_array = tmp_array.filter((item => item[0] == res));
    console.log(tmp_array);

    //matrix_arrayに変換
    for (var i = 0; i < 2; i++) {
        if (tmp_array[0][i] >= 5) {
            tmp_array[0][i] -= size;
        }
    }
    var target_index = tmp_array[0][0] * size + tmp_array[0][1];
    console.log(target_index);
    return array_indexOf(matrix_array, target_index);
}

function vertical_color(array, key) { //縦シフト_color
    //console.log(array)
    //console.log(key)
    var res = 100;
    var tmp;
    var tmp_array = new Array(size);
    for (var i = 0; i < size; i++) {
        tmp_array[i] = new Array(2);
    }

    //color
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < 2; j++) {
            if (dict[matrix_array[i][array[1]]][j] <= dict[key][j]) {
                tmp_array[i][j] = dict[matrix_array[i][array[1]]][j] + size;
            } else {
                tmp_array[i][j] = dict[matrix_array[i][array[1]]][j];
            }
        }

        if (res > tmp_array[i][1] - dict[key][1]) {
            res = tmp_array[i][1];
        }
    }
    //console.log(res);
    //console.log(tmp_array);
    var tmp_array = tmp_array.filter((item => item[1] == res));
    //console.log(tmp_array);

    //color
    res = 100;
    for (var i = 0; i < tmp_array.length; i++) {
        if (res > tmp_array[i][0] - dict[key][0]) {
            res = tmp_array[i][0];
        }
    }
    //console.log(res);
    //console.log(tmp_array);
    var tmp_array = tmp_array.filter((item => item[0] == res));
    console.log(tmp_array);

    //matrix_arrayに変換
    for (var i = 0; i < 2; i++) {
        if (tmp_array[0][i] >= 5) {
            tmp_array[0][i] -= size;
        }
    }
    var target_index = tmp_array[0][0] * size + tmp_array[0][1];
    console.log(target_index);
    return array_indexOf(matrix_array, target_index);
}

function shift_right(array, shift) { //右シフト
    array[1] = array[1] + shift;
    if (array[1] > (size - 1)) {
        array[1] = 0 + (array[1] - size);
    };
    return array;
}

function shift_left(array, shift) { //左シフト
    array[1] = array[1] - shift;
    if (array[1] < 0) {
        array[1] = size + array[1];
    };
    return array;
}
function shift_up(array, shift) { //上シフト
    array[0] = array[0] - shift;
    if (array[0] < 0) {
        array[0] = size + array[0];
    };
    return array;
}
function shift_down(array, shift) { //下シフト
    array[0] = array[0] + shift;
    if (array[0] > (size - 1)) {
        array[0] = 0 + (array[0] - size);
    };
    return array;
}