/*
function getFriendlyNumbers(start, end) {
		let sum1 = 0,
				sum2 = 0,
				start2 = start,
				end2 = end;

	let numFriend = [];
	
	for(start;start<end;start++){
		
		while(start != end){
		for(let i=1;i<start;i++){
			if(start % i === 0){
				sum1 += i;
			}
		}//for1
		for(let j=1;j<end2;j++){
			if(start2 % j == 0 ){
				sum2 += j;
			}
		}//for2
		start2++;
		if(sum2 == sum1){
			numFriend.push([start, start2]);
			break;
		}
	}
}

return numFriend;
}

module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}

console.log(getFriendlyNumbers(1,300));


function getFriendlyNumbers(start, end) {
var sum = 0;
let summAll = [];
	for(start;start<end;start++){
		for(let i=0;i<start;i++){
			if(start % i === 0){
				sum +=i;
			}
			summAll.push(sum);
		}
	}
return summAll;
}

console.log(getFriendlyNumbers(1,10));*/

var arr = [6, 4, 3, 3, 1, 5, 12, 4, 1, 2, 7, 2, 1];
 
var ks=[];
for(var value of arr){
    ks[arr[value]] = (ks[arr[value]]||0)+10;
}
console.log(ks);