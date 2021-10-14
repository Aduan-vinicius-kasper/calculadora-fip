class Function {

	constructor() {

		this.initial_number = 0;
		this.formula = [];
		this.display = document.getElementById("display");
		this.display1 = document.getElementById("display1");
		this.initButtons();
	};


	changeFormula(number, operation = null) {
		// pega ultima fórmula inserida, verifica se está pronta para execução e altera/cria nova
		var last_formula = this.formula[this.formula.length - 1]
		// verifica se existe
		if (typeof last_formula != 'undefined') {
			console.log(last_formula);
		};
	};

	initButtons() {
		// Botões de números
		let btnNumbers = document.querySelectorAll(".row > .btn-number")
		btnNumbers.forEach(btn => {
			btn.addEventListener("click", e => {
				// Pega o elemento do botão que foi clicado
				var btn_clicked = e.currentTarget;
				// Pega número do botão
				this.initial_number = parseInt(btn_clicked.innerHTML)
				this.formula.push({
					'number': this.initial_number,
					'operation': null,
					'result': null
				});
		
				this.display.innerHTML = this.initial_number;
				this.display1.innerHTML = this.initial_number;
			});
		});


		// Botões de operações
		let btnOperations = document.querySelectorAll(".row > .btn-others")
		btnOperations.forEach(btn => {
			btn.addEventListener("click", e => {
				// Pega o elemento do botão que foi clicado
				var btn_clicked = e.currentTarget;
				switch (btn_clicked.innerHTML) {
					case 'X':
						this.formula += '*';
						this.display.innerHTML = this.initial_number;
						break;
					case 'CE':
						break;
					case '%':
						this.formula += '';
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
						break;

					case '+':
						break;

					case '±':
						break;
				};
				// Pega número do botão
				// this.initial_number = parseInt(btn_clicked.innerHTML)
				// this.display.innerHTML = this.initial_number;
			});
		});
	}

};