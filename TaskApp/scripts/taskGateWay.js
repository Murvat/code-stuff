// const successRequest = Promise.resolve({name:'Tom'});

// successRequest
// .then(data => {
//     console.log(data)
//     throw new Error('Unexpected error');
// })
// .catch(err=>{
//     console.error(err)
// });


// const failedRequest = Promise.reject(new Error('Fail'));

// failedRequest
// .then(data => {
//     console.log(data);
// })
// .catch(err => {
//     console.warn(err.message);
// })
// .then(data=>{
//     console.log(data)
// })

// fetch('https://api.com')
// .then(response =>{
//     return response.json();
// })
// .then(data=>console.log(data))
// console.log(55)

const asyncCalc = num => new Promise((resolve)=>{
    setTimeout(() => {
        console.log(num)
        resolve(num)
    },500);
})
.then(value =>new Promise((resolve)=>{
    setTimeout(() => {
        const res = value * value;
        resolve(res);
        console.log(res);
}, 1000);
}))
.then(value=>{
    const res = value*2
    console.log(res)
    return res;
});
asyncCalc(4).then(value=>console.log(value));
const asyncCalc = num => new Promise((resolve) => {
    setTimeout(() => {
        console.log(num);
//         resolve(num);
//     }, 500);
// })
//     .then(value => new Promise((resolve) => {
//         setTimeout(() => {
//             const res = value * value;
//             resolve(res);
//             console.log(res);
//         }, 1000);
//     }))
//     .then(value => {
//         const res = value * 2;
//         console.log(res);
//         return res; // Need to return the value for chaining
//     });

// asyncCalc(4).then(value => console.log(value));
