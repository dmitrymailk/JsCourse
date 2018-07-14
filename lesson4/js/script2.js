console.log('How much arrays include in array?');
let arrays = 5;
let array = [];
for(let i=0; i<arrays;i++){
	array.push([Math.floor(Math.random()*6)]);
}

let sum = 0;
array.forEach(element => {
	sum += Number(element);
});

console.log(array);
console.log(sum);