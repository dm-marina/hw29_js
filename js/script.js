const calculator ={
    read(){
        this.a=+prompt('enter first number');
        this.b=+prompt('enter second number');
       if(Number.isNaN(this.a)&& Number.isNaN(this.b)){
            alert('enter a number');
            return read();
       }
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    }

}
calculator.read();
alert(calculator.sum());
alert(calculator.mul());