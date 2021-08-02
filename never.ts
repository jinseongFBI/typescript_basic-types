function error(message:string):never {
  throw new Error(message);
}

function fail() {
  return error("failed");
}

function infintieLoop():never {
  while(true){}
}
//never타입은 모든 타입의 subtype이며,모든 타입에 할당할수 있습니다.
//하지만 never 어떤값도 할당 할 수 없다

// let a:string="hello";
declare const a:string |number;

if(typeof a!=='string'){
  a;
}
type Indexable<T>=T extends string ? T &{[index:string]: any}:never;
 type ObjectIndexable=Indexable<{}>;
// const b:Indexable<{}>=''; error