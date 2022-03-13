const str = `
02-1234-5678
the1997@gmail.com
https://www.omdbapi.com/?apikey=23456&s=something
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
다람쥐_헌 챗바퀴에 타고파
`

// const regexp = new RegExp('the','g') //생성자 함수를 이용
// const regexp = /the/g //리터럴 방식을 이용

//두 글자 이상 3글자 이하의 숫자 포함 '단어'만
console.log(str.match(/\b\w{2,3}\b/g))

//한 글자 이상의 모든 숫자
console.log(str.match(/[0-9]{1,}/g))

//세 글자 이상의 모든 한글
console.log(str.match(/[가-힣]{3,}/g))

//단어 경계 사이의, f로 시작하고, 한 글자 이상의 값
console.log(str.match(/\bf\w{1,}\b/g))

const h = `  the hello  world   !

`
//모든 공백과 줄바꿈 삭제
console.log(h.replace(/\s/g, ''))

//@ 기호 앞쪽의 대상 중, 임의의 글자가 한 글자 이상인 값
console.log(str.match(/.{1,}(?=@)/g))

//@ 기호 뒤쪽의 대상 중, 임의의 글자가 한 글자 이상인 값
console.log(str.match(/(?<=@).{1,}/g))