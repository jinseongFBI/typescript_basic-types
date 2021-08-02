// undefined&null
//둘다 소문자만 존재 그자체로는 그다지 유용하지 않는다
let u:undefined=undefined;
let n:null=null;

// number 에 null또는 undefined을 할당 할수 있다는 의미
// 컴파일옵션에 '--strictNullChecks'사용하면 null,undefined는
// void 나 자기자신들에게 만 할당할수있는습니다.
// 이경우,null,undefined 할당하려면 union type을 이용해야 합니다.

// let Myname: string=null;
// let u:undefined=null;
 let v:void=undefined; //오로지 undefined만 넣을 수 있음
let union:string | null=null;
union="Mark";

//null in javascript
//런타임에서 typeof 연산자를 이용해서 알아내면 object

//undeifned in javascript
//무언가가 아예 준비가 안된 상태 typeof 연산자를 이용해서 알아내면 undefined