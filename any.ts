function returnAny(message: any):any {
  console.log(message);
  
}
const any1= returnAny("아무거나");

any1.tostring();

//최대한 쓰지 않는게 핵심 

let looselyTyped: any={};

const d= looselyTyped.a.b.c.d;

function leakingAny(obj:any) {
  const a:number=obj.num;
  const b=a+1;
  return b;
  
}
const c=leakingAny({num:0});
c.indexOf("0");