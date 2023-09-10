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

/*
default exportを使用すると1モジュールにつき1回しか使用できない。
また、エディタ上で補完が効きにくくなったり、名前がimportとexportで違うためリファクタリングがしにくくなるため、
使用はあまり推奨されていない。
しかし、Next.jsで一部使用される箇所があるため知っておくことで損はしない
*/
export default naming; // default exportの書き方
// export default log; // このように1モジュールで2回以上使用することができない。

/*
また宣言した変数や関数には「export default const naming = "takuto"」のように使用できないが、
以下のように、無名関数であれば使用ができる。
export default (value) => {
    console.log(value)
};
*/ 

