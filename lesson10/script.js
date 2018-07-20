class options{
	constructor(height,width,bg,fontSize,textAlign){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createElem(){
		let element = document.createElement('div');
		element.style.height = this.height + 'px';
		element.style.width = this.width + 'px';
		element.style.backgroundColor = this.bg;
		element.style.fontSize = this.fontSize + 'px';
		element.style.textAlign = this.textAlign;
		element.innerHTML = 'Я прямоугольник! И у меня тоже есть чувства';
		element.style.color = 'white';
		element.style.display = 'flex';
		element.style.alignItems = 'center';
		element.style.justifyContent = 'center';
		element.style.margin = '10px'
		return element;
	}


};

let rec1 = new options(200,300,'blue',20,'center');
let rec2 = new options(300,400,'aqua',25,'center');
let rec3 = new options(400,500,'green',30,'center');

document.body.style.display = 'flex';

document.body.appendChild(rec1.createElem());
document.body.appendChild(rec2.createElem());
document.body.appendChild(rec3.createElem());
