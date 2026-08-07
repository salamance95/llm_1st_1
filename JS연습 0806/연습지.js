//while 문과 for문을 사용하는 경우
//for 문: 반복되는 횟수를 미리 알 때, 초기화;조건;증감 이 한줄에 모여있음
//while 문: 조건이 만족될때까지 사용, 흩어져있어 빠뜨리기 쉬움
//조건이 참인 동안 반복 - 증감식이 포함되어있지 않아 직접 챙겨야 함
let i = 1;
let j = 1;
while (i < 10) {
  while (j < 10) {
    console.log(`${i}x${j}= ${i * j}`);
    j++;
  }
  i++;
  j = 1; // j 값 초기화
}
let sum = 0;
for (let n = 0; n <= 100; n++) {
  if (n % 2 == 0 || n % 5 == 0) {
    sum += n;
  }
}
console.log(sum);
