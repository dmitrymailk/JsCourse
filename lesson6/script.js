let budget, 
		nameShop,
		 time,
		 price;



const mainList = {
	budget: budget,
	nameShop: nameShop,
	shopGoods: [],
	employers: {},
	discount: true,
	open: true,
	buyGood: function buyGood(price) {
								if(mainList.discount){
									price = price * 0.8;
								}
								return price;
							},
	hireEmployers: function hireEmployers(){
								mainList.employers[`${i++}`]  = prompt("Enter name employer.");
							},
	chooseGoods: function chooseGoods(){
								for(let i=0;i<3;i++){
									let	a = prompt("Какой тип товаров будем продавать?");
								while(typeof(a) !== 'string' || typeof(a) == null || a === "" || `${Number(a)}` !== 'NaN'){
									a = prompt("Какой тип товаров будем продавать?");
									}
									mainList.shopGoods.push(a);	//если тип данных строка то добавляем в массив
								}
									
								},

	workTime:	function workTime(time) {
								if(time < 0 || time > 24){
									console.log('Вне времени не принимаем');
								}
								else if (time > 8 && time < 20 ) {
									console.log('Time to work!');
								}
								else if(time < 24){
									console.log('Time to rest, too late');
								}
							},
	oneDayBudget: function(budget){
		console.log(`Ваш бютжет на 1 день составляет: ${+budget/30} рублей`);
	},
	start: function start(){
						budget = prompt("Ваш бюджет");
						while(isNaN(budget) || budget == '' || budget == null){
							budget = prompt("Ваш бюджет");
						}
					
						nameShop = prompt("Название вашего магазина?");
						nameShop[0] = nameShop[0].toUpperCase();
						time = 12;
					}
}

//mainList.start();
mainList.chooseGoods();
console.log('Вы можете у нас купить.');
mainList.shopGoods.forEach(function(item,i,arr){
	console.log(`Номер ${i+1}: ${item}`);
});
console.log('Наш магазин включает в себя');
for(let item in mainList.shopGoods){
	console.log(`Товар: ${mainList.shopGoods[item]}`);
}









