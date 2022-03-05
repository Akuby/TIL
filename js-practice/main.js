// 변수 유효범위(Variable Scope)
// var은 함수 레벨의 scope, (might cause 메모리 누수)
// let과 const는 블럭 레벨의 scope를 가진다.

function scope(){
  if(true){
    const a = 123
    console.log(a)
    //선언된 블럭 내부에서만 사용 가능 (=유효 범위)
  }
}
scope();
