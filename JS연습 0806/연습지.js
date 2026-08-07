console.log("===== 문제 7 =====");
const orders = [
  { customer: "김철수", amount: 42000, status: "done" },
  { customer: "이영희", amount: 15000, status: "cancel" },
  { customer: "박민수", amount: 38000, status: "done" },
  { customer: "최지우", amount: 27000, status: "shipping" },
  { customer: "정수진", amount: 17000, status: "done" },
];
// TODO: 여기에 작성
console.log(orders.length);
let doneSum = 0;
let cancelCount = 0;
let maxAmount = 0;
let maxCustomer = 0;

for (let i = 0; i < orders.length; i++) {
  if (orders[i].status === "done") {
    doneSum += orders[i].amount;
  }
  if (orders[i].status === "cancel") {
    cancelCount++;
  }
  if (orders[i].amount > maxAmount) {
    maxAmount = orders[i].amount;
    maxCustomer: orders[i].customer;
  }
}
console.log(`완료 금액 합계:${doneSum}`);
console.log(`취소:${cancelCount}`);
console.log(`최고 금액 고객:${maxCustomer}`);

for (let j = 0; j < orders.length; j++) {
  if (orders[j].status !== "done") continue;
  console.log(
    `${orders[j].customer}:${orders[j].amount >= 30000 ? "VIP" : "일반"}`,
  );
}
