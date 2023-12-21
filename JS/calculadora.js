
class Calculadora extends Btn {
    constructor() {
        super();
        this.clearCalculadora()
        this.cancelEntry()
    }

    clearCalculadora() {
        const btnClearAll = [...document.getElementsByClassName("btn-clearAll")]
        btnClearAll.forEach(button => {
            console.log(button);
            button.onclick = e=> {
                this.num = []
                this.operation = []
                return this.displayCalculadora("0")
            }
        })
        
    }
    cancelEntry(){
        const btnCancelEntry = [...document.getElementsByClassName("btn-clearEntry")]
        btnCancelEntry.forEach( btn =>{
            btn.onclick = e => {
               (!Number(this.lastOperationElement)) ? (() => {
                    this.num.pop();
                     return this.operation.push(this.num.join(""))
                    })()
                    :
                    (() => {
                        this.operation.pop()
                    })()
                    return this.displayCalculadora(this.operation)
            }   
        })
    }




}
