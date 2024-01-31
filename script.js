'use strict';
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0,
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelievery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`order Received! ${this.starterMenu[starterIndex]} and
    ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
  },
};
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// example
const Days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of Days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'close';
  console.log(`On ${day}, we open at ${open}`);
}

// methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist');

// arrays

const user = [{ name: 'Maryam', gmail: 'maryamarshad248@gmail.com', age: 27 }];
//const user = [];
console.log(user[0]?.name ?? 'user array empty');

if (user.length > 0) console.log(user[0].name);
else console.log('user array empty');
