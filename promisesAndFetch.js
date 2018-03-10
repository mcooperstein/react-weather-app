// promise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//       reject();
//   },3000)
//
// });
//
// promise
//   .then(()=>console.log('finally finished'))
//   .then(()=>console.log('I was also ran!'))
//   .catch(()=>console.log('uh oh'))

url = 'https://jsonplaceholder.typicode.com/posts1234/';

fetch(url)
  .then(response => console.log(response))
  .catch(error => console.log('BAD', error))
// Fetch big summary -> dissimilar to other ajax libraries
// since it doesn't reach the catch case on bad requests
