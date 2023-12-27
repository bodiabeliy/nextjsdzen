import { Product, ProductPrice } from "../../providers/types";

export const sumCalculator = (products:Product[], currency:string) => {
    let sum = 0;  
    products.forEach(product => {
      product.price.forEach((price:ProductPrice) => {
        if (price.symbol === currency) {
          sum += price.value;
        }
      });
    });
  
    return sum;
}