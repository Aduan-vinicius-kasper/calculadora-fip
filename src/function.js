class Function {

	constructor() {
		this.currentDate; 
		this.initial_number = 0;
		this.formula = [];
		this._lastNumber='';
		this._lastOperator='';
		this.displayTime =document.getElementById('hora');
		this.display = document.getElementById("display");
		this.display1 = document.getElementById("display1");
		this.initButtons();
		this.initialize();
	};
	initialize(){
		setInterval(()=>{
			this.timeDisplay = [this.currentDate.toLocaleTimeString('pt-BR') //+ ' '  + this.currentDate.toLocaleDateString('pt-BR')
		];

		},1000)
		
		
	};
	clearAll(){
		this.formula =[];
		
	}
	changeFormula(number, operation = null) {
		// pega ultima fórmula inserida, verifica se está pronta para execução e altera/cria nova
		var last_formula = this.formula[this.formula.length - 1]
		// verifica se existe
		if (typeof last_formula != 'undefined') {
			console.log(last_formula);
		};
	};

	isoperator(value){
		return (['+','-','*','/','%','√','÷','x²','¹/x','C','CE','←','±'].indexOf(value) > -1);

	}

	multiEvents(element,events, fn){
			events.split(' ').forEach(event=>{

				element.addEventListener(event, fn);
			});

		};
	initButtons() {
		// Botões de números
		let btnNumbers = document.querySelectorAll(".row > .btn-number")
		btnNumbers.forEach(btn => {
			this.multiEvents(btn,"click drag", e => {
			console.log(btn)
				// Pega o elemento do botão que foi clicado
				var btn_clicked = e.currentTarget;
				
				// Pega número do botão
				this.initial_number = parseInt(btn_clicked.innerHTML)
			
		
				this.display.innerHTML = this.initial_number;
			//	this.display1.innerHTML = this.initial_number;
			});

		});
		
		// Botões de operações
		let btnOperations = document.querySelectorAll(".row > .btn-others")
		btnOperations.forEach(btn => {
			this.multiEvents(btn,"click drag ", e => {
				// Pega o elemento do botão que foi clicado
			//	console.log(btn)
				
				//fn
				let btn_clicked = e.currentTarget;
				//forEach, adquire o texto 
				let btn_forEach = btn.innerText;
				
				switch (btn_forEach) {
					case 'X': 
					console.log('deu certo')
						break;
					case 'CE':
					
				var cleanAll =	document.getElementById('cleanAll')
					console.log(cleanAll)
						break;
					case '%':
						this.display.innerHTML = this.initial_number;
						break;

					case '√':
						break;

					case 'x²':
						break;

					case '¹/x':
						break;

					case '÷':
						break;

					case 'X':
						break;

					case '-':
						break;

					case '=':
						console.log('okk')
						break;

					case '+':
						break;

					case '±':
						break;
				};
				
				 this.display.innerHTML = this.initial_number;
			});
		});
		

	};
	
	get timeDisplay(){
		
		return this.displayTime.innerHTML;

	};
	set timeDisplay(value){

		return this.displayTime.innerHTML= value;

	};

	get currentDate(){

		return new Date();
	}
	set currentDate(value){

		return this.currentDate = value;
	}
	

};