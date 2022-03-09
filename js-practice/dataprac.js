const result = 'hello world!'.includes('heropy');

console.log(result);

const str = 'hello world!'

console.log(str.slice(6, 11))
console.log(str.replace(' world!', ''))

//정규 표현식
const email = 'akuby1997@gmail.com'

console.log(email.match(/.+(?=@)/)[0])

console.log(new Date())