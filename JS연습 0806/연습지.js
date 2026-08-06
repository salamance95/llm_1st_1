const input = "25";
console.log(typeof input === "number");
console.log(3 == "3");
console.log(`${typeof 3} isn't ${typeof "hello"} data type`);
console.log(1 + "2"); //출력: 12 (숫자+문자 -> 문자열 연결)
//-는 뺼셈이라는 뜻 하나뿐이라 "10"을 숫자 10으로 바꿔서 계산합니다.
//즉 +만 유독 다르게 동작합니다. -이 비대칭이 초보자를 가장 많이 괴롭힌다.
console.log(true + 1);
//true=1 false=0로 변환
console.log(String(123)); // 문자열"123"
console.log(Number("123") + 1); //124
console.log(Number("abcde")); //NaN(Not a Number)
//parseInt / ParseFloat / Boolean
console.log(parseInt("42px")); //정수만 출력
console.log(parseFloat("3.14kg")); //정수만 출력
console.log(Boolean(0)); //True/False 출력
console.log(Boolean(1));

//css
console.log(parseInt("42px"));

let mathScore = "77";
let engScore = "88";
let avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(avgScore);

console.log(7 % 4);

console.log(2 ** 3); //8
console.log(3 ** 4); //3^4=81

console.log(Boolean(89 % 2)); //%=나머지 1 ->true

let age = 18;
console.log(age >= 18); //true
console.log(age <= 17); //false
console.log(age <= 20); //true
console.log(age < 21); //true

console.log(1 === "1"); //false
console.log(1 !== "1"); //true
console.log(1 != "1"); //false

//&& (AND) 둘다 모두 참
//|| (OR)  하나라도 참이면 참

let visitor = "뽀로로";
console.log(visitor === "뽀로로" && age > 19); //false
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(!true);
console.log(!false);
