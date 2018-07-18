let menuItem = document.getElementsByClassName('menu-item'),
menu = document.getElementsByClassName('menu'),
body = document.getElementsByTagName('body'),
titl = document.getElementById('title'),
adv = document.getElementsByClassName('adv'),
column = document.getElementsByClassName('column'),
promp = document.getElementById('prompt');


function replaceItems(parent,child,pos1,pos2){
			temp = child[pos2];
			parent[0].replaceChild(child[pos1],	child[pos2]);
			parent[0].insertBefore(temp, child[pos1]);
}
replaceItems(menu,menuItem,1,2);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

titl.textContent = "Мы продаем только подлиную технику Apple";
console.log(column[1]);
column[1].removeChild(adv[0]);
let a = prompt('Как относитесь к яблокам?');

promp.textContent = `Ваше отношение к продукции: 
${a}`;
