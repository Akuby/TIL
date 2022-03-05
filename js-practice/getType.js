//typeof 만으로는 정확한 데이터의 타입을 알 수 없음
//그래서 만든 타입 판별 함수

export default function getType(data){ 
  return Object.prototype.toString.call(data).slice(8, -1)
}