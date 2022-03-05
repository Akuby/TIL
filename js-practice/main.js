// 함수 복습

function sum(x, y) { //x와 y는 매개변수 (Parameter)
  console.log(x + y);
}

sum(1, 3); //1과 3은 인수 (Argument)
sum(2, 7);

function sum1(x, y) {
  return x + y
}

console.log(sum1(1, 3));
console.log(sum1(3, 2));
console.log(sum1(1, 3) + sum1(3, 2)); //이러면 함수를 두번 돌린다.

const a = sum1(1, 3),
  b = sum1(3, 2); //이렇게 다른 변수에 할당해놓으면 함수 호출을 줄일 수 있다.
//적은 수라도 뭔가가 반복되는 경우에는 따로 할당하는게 좋을듯.
console.log(a);
console.log(b);
console.log(a + b);


const 함수 = function (a, b) { //익명 함수. 함수를 변수에 담아 한번만 쓴다.
  return a * b;
}

function 함수1(a, b) { //기명 함수. 함수 명을 통해 여러번 쓴다.
  return a * b;
}

//return 키워드

function sum2(x, y) {
  if (x < 2) {
    return //return 키워드는 함수를 "종료"한다.
  }
  return x + y
}

// argument 객체

function argu() { //argument는 받은 인자를 배열로 반환한다.
  return arguments[0] + arguments[1];
}

console.log(argu(3, 7))