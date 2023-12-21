class Btn extends Display {
    constructor() {
        super();
        this.num = [];
        this.operation = [];
        this.buttonNumbers();
        this.operator();
    }

    validateAndHandleInput(value) {
        const isNumber = !isNaN(Number(value));

        if (isNumber) {
            this.num.push(value);
            this.displayCalculadora(this.operation.join('') + this.num.join(''));
        } else {
            if (this.num.length > 0) {
                this.operation.push(this.num.join(''));
                this.num = [];
            }
            this.operation.push(value);
            this.displayCalculadora(this.operation.join(''));
        }
    }

    operator() {
        const buttonOperator = [...document.getElementsByClassName("btn-others")];
        buttonOperator.forEach(button => {
            button.onclick = e => {
                const value = e.target.textContent;
                this.validateAndHandleInput(value);
            };
        });
    }

    buttonNumbers() {
        const buttonNumbers = [...document.getElementsByClassName("btn-number")];
        buttonNumbers.forEach(button => {
            button.onclick = e => {
                const value = e.target.textContent;
                this.validateAndHandleInput(value);
            };
        });
    }
}

