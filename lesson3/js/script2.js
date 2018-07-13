
//task 1

let str = "урок-3-был слишком легким";
str = str[0].toUpperCase() + str.substring(1); //Make first letter Capitalize
console.log(str);

//task 2

let newStr = '';
for (let i=0;i<str.length;i++){
	if(str[i] == '-'){
		newStr = newStr + ' ';
	}
	else{
		newStr = newStr + str[i];
	}
}
console.log(newStr); // remove middle-line in str

// task3

let newStr2 = '';

for(let i=0;i<newStr.length;i++){
	if(newStr[i] == 'л' && newStr[i+1] == 'е'){
		break;
	}
	newStr2 += newStr[i];
}
newStr2 += 'оо';
console.log(newStr2); // remove word легким, add two 'o'

// task4

arr = [20, 33, 1, 'Человек', 2, 3]
let sum = 0;
for(let i=0;i<arr.length;i++){
	if(typeof(arr[i]) == 'number'){
		sum += Math.pow(arr[i],3);
	}
}
console.log(`Это квадратный корень из суммы кубов чисел: ${Math.sqrt(sum)}`);