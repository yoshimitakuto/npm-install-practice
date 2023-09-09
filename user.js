// モジュール間同士でもデータのやり取り
const naming = "takuto";
const naming2 = "kota";

const log = (value) => {
    console.log(value);
};

/*
変数や関数を一つの「export」でまとめることもできる
export { naming, naming2, log };
*/ 

// 以下のように「変数」「関数」で分けるとわかりやすくていいかも。。
export { naming, naming2 }; //変数
export { log }; //関数

// エイリアス＝「別名」をexport/importで設定できる(asをつける)
// export { naming as taku, naming2 as ko, log as logger };