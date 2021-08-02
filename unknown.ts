//응용 프로그램을 작성할 때 모르는 변수의 타입을 묘사해야 할 수도 있습니다.
//any 보다 Type-safe한 타입 

declare const maybe:unknown;

const aNumber: number=maybe;

if(maybe===true){
 const aBoolean:boolean= maybe;
//  const aString:string=maybe; error
}
if(typeof maybe==='string'){
  const astring:string =maybe;
 //const aBoolean:boolean= maybe; error
}