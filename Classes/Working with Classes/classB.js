const Product = require('./classA')

class Car extends Product{

    constructor(name, price, color ){
        super (name, price);
        this.color = color;


     }

     paintInBlue(){

       return this.color = 'blue';
     }

    
   
}








