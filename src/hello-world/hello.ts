// constは変数に再代入されないことを保証する
const message: string = 'Hello World';
console.log(message);



// プリミティブ型 
// 以下以外に、symbol, bigint, null, undefined
const int: number = 1;
const str: string = 'こんにちは';
const flg: boolean = true;


// リテラル型
const fruits: 'apple' = 'apple';


// オブジェクト型
// hogeプロパティがstring型の値を持ち、fugaプロパティがnumber型の値を持つオブジェクトの型
// interfaceでオブジェクト型に名前（MyObj）を付ける
interface MyObj {
  hoge: string;
  fuga: number;
}

// MyObj型のsample_aに値を代入
const sample_a: MyObj = {
  hoge: 'foo',
  fuga: 3,
};


// 構造的部分型
// MyObjはMyObj2の部分型
interface MyObj2 {
  hoge: string;
}

// 要件を満たしていると判定される
const sample_b: MyObj2 = sample_a;

// オブジェクトリテラルの場合はエラーになる
// 余計なプロパティを持つオブジェクトは弾かれる
const sample_c: MyObj2 = {
  hoge: 'hoge', 
  // fuga: 3
};


