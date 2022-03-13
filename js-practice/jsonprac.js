const user = {
  name : "Hyewon",
  age : 26,
  emails : [
    'akuby1997@gmail.com',
    'wqekmf@fake.com'
  ]
}

localStorage.setItem('user', JSON.stringify(user))

const str = localStorage.getItem('user') //가져와서
const obj = JSON.parse(str) //파싱,
obj.age = 22 //파싱하여 값 변경 가능

localStorage.setItem('user', JSON.stringify(obj)) // 아까의 키에 덮어쓰기

// 덮어쓰지 않고 값을 수정하는 방법은 없을까?

