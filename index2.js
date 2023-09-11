// 「All import」とは、すべてインポートすること
// 「Re export」したものをインポート
import * as pokemon from './pokemon/index.js';

// default import
// import game from './pokemon/index.js';

// default export を named exportに変換されたものをimportすると以下のようになる。
// import { game } from './pokemon/index.js';

document.body.textContent = pokemon.pika + pokemon.game;
// document.body.textContent = game;

//re exportでエイリアスを使用するとこのようになる。
// document.body.textContent = pokemon.pika + pokemon.pokemon.game; 