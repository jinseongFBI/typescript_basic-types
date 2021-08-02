//symbol 함수를 이용해서 symbol 타입을 만들수 있다.j
//프리미티브 타입의 값을 담아서 사용합니다.
console.log(Symbol('foo')===Symbol('foo'));

const sym=Symbol();

const obj={
  [sym]:"value",
};

obj[sym]