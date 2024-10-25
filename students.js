let arr = [
    {name : "james",score:30},
    {name : "mark",score:60},
    {name : "tony",score:50},
    {name : "antony",score:40}
]
// function students(ele){
//     return ele.name;
// }
const newarr = arr.map( ele => ele.name );
console.log(newarr);