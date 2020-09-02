class Calculator {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add() {
        this.result = this.x + this.y;
    }

}

module.exports = Calculator;