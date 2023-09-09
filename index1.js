// モジュール間同士でもデータのやり取り
import { naming, naming2, log } from './user.js';
// エイリアス「別名」を使用した時のimport文
// import { taku, ko, logger } from './user.js';

// 関数呼び出し
log(naming);
// logger(taku); //エイリアス用

document.body.textContent = naming + naming2;
// document.body.textContent = taku + ko; //エイリアス用