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


// 配列型
const nums: number[] = [0, 1, 2, 3];
nums.push(4);


// 関数型
// 第1引数としてstring型, 第2引数としてnumber型の引数を受け取る
// 返り値としてboolean型の値を返す
const e: (hoge: string, fuga: number)=> boolean = index1;

function index1(name: string, age: number): boolean {
  return true;
}

const f: (hoge: string)=> number = func;

function func(arg: string): number {
  return Number(arg);
}

// 分割代入
// 任意の変数名を指定
const color = { r: 0, g: 100, b: 90 };
const { r: red, g: green, b: blue } = color;

// 入れ子構造
const continent = {
  name: "北アメリカ",
  us: {
    name: "アメリカ合衆国",
    capitalCity: "ワシントンD.C.",
  },
};

// const {
//   us: { name, capitalCity },
// } = continent;

// オプショナルチェーン
const book_js = undefined;  // js

let book_ts: undefined | { title: string };  // ts

const title1 = book_ts?.title;

// 関数の呼び出し
const increment_js = undefined;  // js
// const result = increment_js?.(1);

const increment = (n: number) => n + 1;
const result2 = increment?.(1);


// 配列
[1, 2, 3];

[
  1,
  2,
  3,
]

// 配列の型注釈
let array1: number[];
array1 = [1, 2, 3];

let array2: Array<number>;
array2 = [1, 2, 3];


// タプルの型
const list: [number, string, boolean] = tuple();

function tuple(): [number, string, boolean] {
  return [1, 'OK', true];
}

// タプルへのアクセス
list[0].toExponential();
list[1].length;
list[2].valueOf();


// 列挙型 (enum)
enum Position {
  Top,
  Right,
  Bottom,
  Left,
}

// 文字列列挙型 (string enum)
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// ユニオン型 (union type)
// いずれかの型を表現する
let numberOrUndefined: number | undefined;

// 冒頭に書いてもOK
type ErrorCode =
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405;

// 配列要素にユニオン型を使う際、()で囲む
// string[] or number[]
type List = (string | number)[];

// 絞り込み
const maybeUserId: string | null = 'ユーザー１';
if (typeof maybeUserId === "string") {
  const userId: string = maybeUserId;
  console.log(userId);  // => ユーザー１
}

// 複雑なユニオン型の絞り込み（ネガティブな例）
// type UploadStatus = InProgress | Success | Failure;
// type InProgress = { done: boolean; progress: number };
// type Success = { done: boolean };
// type Failure = { done: boolean; error: Error };

function printStatus(status: UploadStatus) {
  if (status.done) {
    if ("error" in status) {
      console.log(`アップロード失敗:${status.error.message}`);
    } else {
      console.log("アップロード成功");
    }
  } else if ("progress" in status) {
    console.log(`アップロード中:${status.progress}%`);
  }
}

// 判別可能なユニオン型
// ディスクリミネータtypeを追加
type UploadStatus = InProgress | Success | Failure;
type InProgress = { type: "InProgress"; progress: number };
type Success = { type: "Success" };
type Failure = { type: "Failure"; error: Error };


// インターセクション型
type TwoDimensionalPoint = {
  x: number;
  y: number;
};

type Z = {
  z: number;
};

type ThreeDimensionalPoint = TwoDimensionalPoint & Z;

const p: ThreeDimensionalPoint = {
  x: 0,
  y: 1,
  z: 2,
};

// typeキーワード
type UserID = string;
type UserName = string;

function getUser(id: UserID): { id: UserID; name: UserName } {
  return user;
}

const user: { id: UserID; name: UserName } = getUser("12345");
