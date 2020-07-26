// .map() function that takes an array of items and a function that returns an array with each item manipulated by that function.
const myArr = [1, 3, 2, 6, 7];
let newArr = [];
const mapScratch = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    let addOne = arr[i] + 1
    newArr.push(addOne);
  }
  console.log(newArr);
}
mapScratch(myArr);


// .reduce() function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
const foodOrders = [3.25, 6.75, 10, 25];
let sum = 0;
const reduceScratch = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
reduceScratch(foodOrders);


// .filter() function that takes an array of items and a function that returns an array with only the items that return true in the function.
const itemsArr = [5, 6, 2, 3, 10, 1];
const trueItems = [];
const filterScratch = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= 5) {
      trueItems.push(arr[i]);
    }
  }
  console.log(trueItems);
}
filterScratch(itemsArr);
