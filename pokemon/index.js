// pokemon.jsの内容をすべてexportしている。（Re export == "再宣言"）
export * from './pokemon.js';

// 以下のようにReexportにエイリアスを使用することもできる。
// export * as pokemon from './pokemon.js';

// default export re export
// export { default } from './pokemon.js';

// default re exportをnamed exportにすることも可能
// export { default as game } from './pokemon.js';