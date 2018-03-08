var names = ["Marc", "Lexi", "Katy", "Moe"];
//
// names.forEach(function(name){
//   console.log(name);
// })
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + "!";
//
// console.log(returnMe("Marc"))

// var person = {
//   name: 'Marc',
//   greet:function(){
//     names.forEach((name)=>{
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// }
// person.greet();

function add(a,b){
  return a + b;
}

//addStatement
var addStatement = (a,b)=>{
  console.log(a+b);
}
addStatement(12,21);
//addExpression
var addExpression = (a,b)=>a+b;
console.log(addExpression(99,99));



console.log(add(1,3));
console.log(add(9,0));
