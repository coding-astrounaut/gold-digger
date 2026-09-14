
export function generateGoldPrice() {
  const minPrice = 2000;
  const maxPrice = 2500;
  const price = Math.random() * (maxPrice - minPrice) + minPrice;
  return price.toFixed(2);
}