 class Display{

    constructor(){
        this.display = document.getElementById("display");
    }
    displayCalculadora(x) {
        this.display.innerHTML = x
        return this.display
    }

  

}