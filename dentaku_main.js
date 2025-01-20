function clickbutton(target) {
    let result = document.getElementById("result");//回答欄の要素を定義
    let target_number = target.innerHTML; //入力された数字を定義
    
    if(target_number == "AC"){ //ACの場合
        result.innerHTML = "0"; //回答欄を0にする
  
    } else if (target_number == "="){ //＝の場合
        result.innerHTML = eval(result.innerHTML); //リザルトの結果を計算する

    } else if (["+", "-", "*", "/"].includes(target_number)) { // 入力に演算子が含まれている場合
        if (result.innerHTML == "0") { // 回答欄がゼロだった場合
            result.innerHTML = "0"; // ゼロのまま
        } else if (["+", "-", "*", "/"].includes(result.innerHTML.slice(-1))) { // 最後が演算子の場合
            // 回答欄に演算子が含まれていた場合何もしない
        } else {
            result.innerHTML += target_number; // 数字+演算子
        }
    } else if (target_number == "."){ //小数点が入力された場合
        if (result.innerHTML == "0"){ //回答欄が0だった場合
            result.innerHTML = "0"; //0のまま
        } else if (["+", "-", "*", "/"].includes(result.innerHTML.slice(-1))) { // 最後が演算子の場合
            // 何もしない
        } else {
            result.innerHTML += target_number; // 数字+.
        }
    } else if (target_number == "00"){ //00が入力された場合
        if (result.innerHTML == "0"){ //回答欄が0の場合
            result.innerHTML = "0"; //0のまま
        } else  { //それ以外が入力された場合
            result.innerHTML += target_number //回答欄+入力
        } 
    } else { //それ以外が入力された場合
        if (result.innerHTML == "0"){ //回答欄が0だった場合
            result.innerHTML = target_number //回答欄は入力された数字なる
        } else  { //回答欄が0以外の場合
            result.innerHTML += target_number //回答欄+入力
        } 
    }
}