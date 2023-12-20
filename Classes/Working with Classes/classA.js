
class Product{
      constructor(name, price){
         this.name = name;
         this.price = price;

      }

      showProduct(){

         console.log(`Product: ${this.name}`);
         console.log(`Price: $${this.price.toFixed(2)}`);
      }

      calculateDdsTax(){
         return this.price + (this.price * 0.20)
      }      

}



module.exports = Product;

