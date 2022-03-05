import random from "./getRandom";

const a = random()

//swtich 문
switch (a) { //a가 특정 값으로 떨어지는 경우엔 switch문 유용
  case 0:
    console.log('a is 0')
    break
  case 2:
    console.log("a is 2")
    break
  case 4:
    console.log('a is 4')
    break
  default:
    console.log('rest...');
}
console.log(a);