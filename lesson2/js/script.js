let budget = prompt("Ваш бюджет");
let nameShop = prompt("Название вашего магазина?");

const mainList = {
	budget: 23,
	nameShop: "",
	shopGoods: [],
	employers: {

	},
	open: true,
}

for(let i=0;i<5;i++){
let	a = prompt("Какой тип товаров будем продавать?");

if(typeof(a) === 'string' && ((typeof(a) != null && a != '' && a.length < 20) )) {
	mainList.shopGoods.push(a);
}

}

let time = 12;

if(time < 0 || time > 24){
	console.log('Вне времени не принимаем');
}
else if (time > 8 && time < 20 ) {
	console.log('Time to work!');
}
else if(time < 24){
	console.log('Time to rest, too late');
}
console.log(mainList.shopGoods);
alert(`Ваш бютжет на 1 день составляет: ${+budget/30} рублей`);


