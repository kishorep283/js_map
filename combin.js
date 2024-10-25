let arr=[1,2,3,4,5,6,7,8];
const even=arr.filter(ele => ele%2===0);
const mul =even.map(ele => ele*3);
mul.forEach(ele => console.log(ele));