// 형 변환(Type conversion)

const a = 1
const b = '1'

console.log(a == b) //동등 연산자 사용 시 형 변환이 일어남

// Truthy (참 같은 값)
// true, {}, [], 1, -1, 'false', '3.14'...

// Falsy (거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

if (-1) {
  console.log(123)
}
