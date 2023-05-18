// constは変数に再代入されないことを保証する
var message = 'Hello World';
console.log(message);
// プリミティブ型 
// 以下以外に、symbol, bigint, null, undefined
var int = 1;
var str = 'こんにちは';
var flg = true;
// リテラル型
var fruits = 'apple';
// MyObj型のsample_aに値を代入
var sample_a = {
    hoge: 'foo',
    fuga: 3,
};
// 要件を満たしていると判定される
var sample_b = sample_a;
// オブジェクトリテラルの場合はエラーになる
// 余計なプロパティを持つオブジェクトは弾かれる
var sample_c = {
    hoge: 'hoge',
    // fuga: 3
};
// 配列型
var nums = [0, 1, 2, 3];
nums.push(4);
// 関数型
// 第1引数としてstring型, 第2引数としてnumber型の引数を受け取る
// 返り値としてboolean型の値を返す
var e = index1;
function index1(name, age) {
    return true;
}
var f = func;
function func(arg) {
    return Number(arg);
}
// 分割代入
// 任意の変数名を指定
var color = { r: 0, g: 100, b: 90 };
var red = color.r, green = color.g, blue = color.b;
// 入れ子構造
var continent = {
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
var book_js = undefined; // js
var book_ts; // ts
var title1 = book_ts === null || book_ts === void 0 ? void 0 : book_ts.title;
// 関数の呼び出し
var increment_js = undefined; // js
// const result = increment_js?.(1);
var increment = function (n) { return n + 1; };
var result2 = increment === null || increment === void 0 ? void 0 : increment(1);
// 配列
[1, 2, 3];
[
    1,
    2,
    3,
];
// 配列の型注釈
var array1;
array1 = [1, 2, 3];
var array2;
array2 = [1, 2, 3];
// タプルの型
var list = tuple();
function tuple() {
    return [1, 'OK', true];
}
// タプルへのアクセス
list[0].toExponential();
list[1].length;
list[2].valueOf();
// 列挙型 (enum)
var Position;
(function (Position) {
    Position[Position["Top"] = 0] = "Top";
    Position[Position["Right"] = 1] = "Right";
    Position[Position["Bottom"] = 2] = "Bottom";
    Position[Position["Left"] = 3] = "Left";
})(Position || (Position = {}));
// 文字列列挙型 (string enum)
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
// ユニオン型 (union type)
// いずれかの型を表現する
var numberOrUndefined;
// 絞り込み
var maybeUserId = 'ユーザー１';
if (typeof maybeUserId === "string") {
    var userId = maybeUserId;
    console.log(userId);
}
