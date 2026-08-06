let age = -1;
if (age >= 20) {
  console.log("성인");
} else if (age >= 17) {
  console.log("고등학생");
} else if (age >= 14) {
  console.log("중학생");
} else if (age >= 8) {
  console.log("초등학생");
} else if (age >= 0) {
  console.log("유아");
} else {
  console.log("정자");
}

//if 중첩
let isSubmitted = true;
let reportScore = 65;
if (isSubmitted) {
  if (reportScore < 80) {
    console.log("보충 과제 대상");
  } else {
    console.log("통과");
  }
}
