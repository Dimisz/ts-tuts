const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

const pepsi = ['brown', true, 40]; // an array
const coke: [string, boolean, number] = ['brown', true, 45]; // tuple

// type alias
type Drink = [string, boolean, number];
const sprite: Drink = ['clear', true, 50];