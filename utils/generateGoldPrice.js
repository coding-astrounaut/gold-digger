
export function generateGoldPrice() {
  const minPrice = 3000;
  const maxPrice = 3500;
  const price = Math.random() * (maxPrice - minPrice) + minPrice;
  return price.toFixed(2);
}