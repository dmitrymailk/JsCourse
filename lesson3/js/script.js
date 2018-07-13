let budget, 
		nameShop,
		 time,
		 price;

function start(){
	budget = prompt("Ваш бюджет");
	while(isNaN(budget) || budget == '' || budget == null){
		budget = prompt("Ваш бюджет");
	}

	nameShop = prompt("Название вашего магазина?");
	nameShop[0] = nameShop[0].toUpperCase();
	time = 12;
}

function buyGood(price) {
	if(mainList.discount){
		price = price * 0.8;
	}
	return price;
}



//start();
console.log(nameShop);
const mainList = {
	budget: budget,
	nameShop: nameShop,
	shopGoods: [],
	employers: {},
	discount: true,
	open: true,
}
let i = 0;
function hireEmployers(){
	
	mainList.employers[`${i++}`]  = prompt("Enter name employer.");
}

hireEmployers();
hireEmployers();
console.log(mainList.employers);

function chooseGoods(){
	for(let i=0;i<5;i++){
		let	a = prompt("Какой тип товаров будем продавать?");
		
		if(typeof(a) === 'string' && ((typeof(a) != null && a != '' && a.length < 20) )) {
			mainList.shopGoods.push(a);
		}
		
	}
}



function workTime(time) {
	if(time < 0 || time > 24){
		console.log('Вне времени не принимаем');
	}
	else if (time > 8 && time < 20 ) {
		console.log('Time to work!');
	}
	else if(time < 24){
		console.log('Time to rest, too late');
	}
}

console.log(mainList.shopGoods);
alert(`Ваш бютжет на 1 день составляет: ${+budget/30} рублей`);


