type Pizza = { name: string; toppings: number };

const pizza: Pizza = { name: 'Blazing Inferno', toppings: 5 };

const serialized = JSON.stringify(pizza);
console.log(serialized);