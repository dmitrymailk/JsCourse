
/*// task 1

let x = 5;
console.log(`task 1: ${x++}`);  // 5

//task 2

let a = [] + false - null + true;

console.log(`task 2: ${a}`); //NaN

//task 3

let y = 1;
let x1 = y = 2;

console.log(`task 3: ${x1}`); // 2

//task 4

let x3 = [] + 1 + 2;

console.log(`task 4: ${x3}`); // 12

//task 5 

console.log(`task 5: ${"1"[0]}`); // 1

//task 6

console.log(`task 6: ${null || 2 && 3 || 4 }`); // 3

//task 7

a = [1,2,3];
b = [1,2,3];
c = a == b;

console.log(`task 7: ${c}`); // false

//task 8

console.log(`task 8: ${+"Infinity"}`); // Infinity

//task 9

let word = "женщина" == "человек";

console.log(`task 9: ${word}`); // false

//task 10

console.log(`task 10: ${0 || "" || 2 || undefined || true || falsе }`); // 2

/*ADDITIONAL TASKS*/

/*TASKS 1*/

let week = ['Monday',
						'Tuesday',
						'Wednesday',
						'Thursday',
						'Friday',
						'Saturday',
						'Sunday',
];

let currentDay = 'Wednesday';

for(let i=0;i<week.length;i++){
		let day = document.createElement("p");
	if(i>4){
		day.innerHTML = `<strong>${week[i]}</strong>`;
	}
	else if(week[i] === currentDay){
		day.innerHTML = `<i>${week[i]}</i>`;
	}
	else{
		day.innerHTML = week[i];
	}
	body.appendChild(day);
}

/*TASKS 2*/

let arr = ['123',
					 '123',
					 '73',
					 '23444',
					 '3331',
					 '213',
					 '1233',
					];


for(let i=0;i<arr.length;i++){
	if(+arr[i][0] === 3 || +arr[i][0] === 7){
		console.log(arr[i]);
	}
}
