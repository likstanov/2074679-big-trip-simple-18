const getRandomIntegerFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomElementFromArray = (arr) => arr[getRandomIntegerFromRange(0, arr.length - 1)];

const getSeveralUniqueRandomElementsFromArray = (arr, quantity) => {
  if(!quantity) {
    return [];
  }
  const result = new Set();
  for(let i = 0; i <= quantity; i++) {
    result.add(getRandomElementFromArray(arr));
  }
  return [...result];
};

export { getRandomIntegerFromRange, getRandomElementFromArray, getSeveralUniqueRandomElementsFromArray };
