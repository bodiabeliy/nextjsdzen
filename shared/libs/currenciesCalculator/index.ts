
export const sumCalculator = (products:any[], currency:string) => {
    let sum = 0;

    products.forEach(product => {
      product.price.forEach((price:any) => {
        if (price.symbol === currency) {
          sum += price.value;
        }
      });
    });
  
    return sum;
}