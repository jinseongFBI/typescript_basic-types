const person1={name:'Mark',age:39};

const person2=Object.create({name:'Mark',age:39});
// const person2=Object.create({});
// const person2=Object.create({39}); 요거는 안됨
// object:primitive type이 아닌 것을 나타내고 싶을떄 사용

// let obj: object={};
// obj={name:"mark"};
// obj = [{name:'Mark'}];

declare function create(o:object|null):void;
create({prop:0});
create(null)
// create(42)//error
// create("string")//error
// create(false)//error
// create(undefined);//error

// object.create(0);