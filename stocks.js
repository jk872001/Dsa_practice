// Find the max profit

const findMax = (price) => {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < price.length; i++) {
    if (price[i] < minPrice) {
      minPrice = price[i];
    } else if (price[i] - minPrice > maxProfit) {
      maxProfit = price[i] - minPrice;
    }
  }
  return maxProfit;
};

const price = [7, 1, 5, 3, 6, 4];

console.log(findMax(price));
for (let i = 0; i < n; i++) {
  minIndex=i;
for (let j = i+1; j < n; j++) {
  if (arr[j] < arr[minIndex]) {
      minIndex=j;
  }
}
[arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
}
return arr;