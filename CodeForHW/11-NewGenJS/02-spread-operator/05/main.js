// Math.random(); // [0, 1)
// [1, 2, 3, 4, 5, 6] // 0, 1, 2, 3, 4, 5
// Math.random() * arr.length // [0, arr.length)
// Math.floor(Math.random() * arr.length) // 0, 1, 2, ... arr.length-1

const removeRandom = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  arr.splice(randomIndex, 1);
  return arr;
};
