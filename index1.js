// const naming = "ichiro";

// モジュール間同士でもデータのやり取り
import { naming, naming2, log } from './user.js';
// 関数呼び出し
log("foo");
document.body.textContent = naming + naming2;