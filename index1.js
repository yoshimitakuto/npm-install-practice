// モジュール間同士でもデータのやり取り
import { naming as taku, naming2 as ko, log as logger } from './user.js';
import naming, { log } from './user.js'; // default importの書き方（{}がいらない）
import { naming as naru } from './user2.js'; //importでもエイリアスを使用でき、現場でよく採用されている
// エイリアス「別名」を使用した時のimport文
// import { taku, ko, logger } from './user.js';

// 関数呼び出し
// log(naming);
logger(taku + naru); //エイリアス用
log(naming);

// document.body.textContent = naming + naming2;
document.body.textContent = taku + ko + naru; //エイリアス用