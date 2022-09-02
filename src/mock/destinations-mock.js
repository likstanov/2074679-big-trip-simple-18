import { getRandomIntegerFromRange, getRandomElementFromArray } from './utils.js';
import { CITIES, DESCRIPTIONS, DESTINATION_PICTURES_AMOUNT } from './const-data.js';

const generateCitiesPictures = () => {
  const {min, max} = DESTINATION_PICTURES_AMOUNT;
  const randomPicturesAmount = getRandomIntegerFromRange(min, max);
  return Array.from({length: randomPicturesAmount}, () => ({
    src: `http://picsum.photos/300/200?r=${getRandomIntegerFromRange(1,100)}`,
    description: getRandomElementFromArray(DESCRIPTIONS),
  }));
};

const getDestinations = () => {
  const result = [];
  CITIES.forEach((city, index) => {
    result.push({
      id: index + 1,
      name: city,
      description: getRandomElementFromArray(DESCRIPTIONS),
      pictures: generateCitiesPictures(),
    });
  });
  return result;
};

export { getDestinations };
