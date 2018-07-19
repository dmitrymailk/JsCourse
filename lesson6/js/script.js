let open = document.getElementById('open-btn'),
		name_value = document.getElementsByClassName('name-value')[0],
		budget_value = document.getElementsByClassName('budget-value')[0],
		goods_value = document.getElementsByClassName('goods-value')[0],
		items_value = document.getElementsByClassName('items-value')[0],
		employers_value = document.getElementsByClassName('employers-value')[0],
		discount_value = document.getElementsByClassName('discount-value')[0],
		isopen_value = document.getElementsByClassName('isopen-value')[0],
		count_budget_value = document.querySelector('.count-budget-value'),
		time_value = document.querySelector('.time-value');

		
		goods_item = document.getElementsByClassName('goods-item'),
		choose_item = document.querySelector('.choose-item'),
		hire_employers_item = document.querySelectorAll('.hire-employers-item'),
		goods_btn = document.getElementsByTagName('button')[1],
		budget_btn = document.getElementsByTagName('button')[2],
		employers_btn = document.getElementsByTagName('button')[3];

	


		const mainList = {
			budget: null,
			nameShop: '',
			shopGoods: [],
			shopItems: [],
			employers: [],
			discount: true,
			open: false,
			buyGood: function buyGood(price) {
										if(mainList.discount){
											price = price * 0.8;
										}
										return price;
									},
			hireEmployers: function hireEmployers(){

				for(let i=0;i<hire_employers_item.length;i++){
					if(hire_employers_item[i].value !== ''){
					let name = hire_employers_item[i].value;
					mainList.employers.push(name);
					}
				}
				employers_value.textContent = mainList.employers;
									},
			chooseGoods: function chooseGoods(){
										for(let i=0;i<4;i++){
											let	a = goods_item[i].value;
										if(typeof(a) === 'string' && typeof(a) !== null && a.length < 20 && a !== ''){
											console.log('So good!');
											mainList.shopGoods.push(a);
											 goods_value.textContent = mainList.shopGoods;
											}
											else{
													continue;
											}
											
										}
											
										},
		
			workTime:	function workTime() {

				let time = time_value.value;
				console.log(time);
										if(time < 8 || time > 24){
											console.log('В это время не работаем');
											mainList.open = false;
										}
										else if (time > 8 && time < 20 ) {
											console.log('Time to work!');
											mainList.open = true;
										}
										else if(time > 20 && time < 24){
											console.log('Time to rest, too late');
											mainList.open = false;
										}

										if (mainList.open){
												isopen_value.style.backgroundColor = 'green';
										}
										else{
											isopen_value.style.backgroundColor = 'red';
										}
									},
			oneDayBudget: function(){
				count_budget_value.value = Math.floor(mainList.budget/30) + ' руб';
			},
			start: function start(){
								budget = prompt("Ваш бюджет");
								
								while(isNaN(budget) && budget == '' || budget == null){
									budget = prompt("Ваш бюджет");
								}
								mainList.budget = budget;
								budget_value.textContent = budget;


								nameShop = prompt("Название вашего магазина?");
							  name_value.textContent = nameShop.charAt(0).toUpperCase() + nameShop.slice(1);;
							},
			chooseShopItems: function chooseShopItems(){
				let items = choose_item.value;
				if(!isNaN(items) || items !== ''){
					mainList.shopItems = items.split(', ');
					mainList.shopItems.sort();
					items_value.textContent = mainList.shopItems;
				}
			},
		}
		
		open.addEventListener('click', () => {
			mainList.start();
		});

		goods_btn.addEventListener('click', () =>{
			mainList.chooseGoods();
		});

		choose_item.addEventListener('change', () =>{
			mainList.chooseShopItems();
		});

		time.addEventListener('change', () =>{
			mainList.workTime();
		});

		budget_btn.addEventListener('click', () => {
			mainList.oneDayBudget();
		});

		employers_btn.addEventListener('click', () =>{
			mainList.hireEmployers();
		});