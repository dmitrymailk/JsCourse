/*let budget = prompt("Ваш бюджет");
let nameShop = prompt("Название вашего магазина?");

const mainList = {
	budget: 12,
	nameShop: "",
	shopGoods: [],
	employers: {

	},
	open: true,
}

mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
console.log(mainList.shopGoods);
alert(`Ваш бютжет на 1 день составляет: ${+budget/30} рублей`);

/*УСЛОЖНЕННОЕ ЗАДАНИЕ*/

let num = 1234;
let a = 1;

for(let i=0;i<4;i++){
	b = num % 10;
	a =  a * b;
	num = Math.floor(num / 10);
}

console.log(`Это число с перемножиными цифрами ${a}`);
let deg = 3;
console.log(`Это число с это число ${a} возвуденное в степень ${deg}: ${Math.pow(a,deg)}
`);

