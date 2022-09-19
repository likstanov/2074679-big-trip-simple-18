import { getRandomElementFromArray, getRandomIntegerFromRange } from '../utils/mock-utils.js';
import { EVENT_TYPES, CITIES, POINTS_AMOUNT } from './const-data.js';
import { getRandomOffersByTypeId } from './offers-mock.js';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';

const generateDate = (date) => {
  const gap = getRandomIntegerFromRange(1,4);
  return dayjs(date).add(gap, 'days').add(gap, 'hours').toISOString();
};

const getEvents = (amount = POINTS_AMOUNT) => {
  const result = [];
  for(let i = 0; i < amount; i++) {
    const dateFrom = generateDate();
    const getRandomPointType = getRandomElementFromArray(EVENT_TYPES);
    result.push({
      basePrice: getRandomIntegerFromRange(1000, 5000),
      dateFrom,
      dateTo: generateDate(dateFrom),
      destination: getRandomIntegerFromRange(1, CITIES.length),
      id: nanoid(),
      offers: getRandomOffersByTypeId(getRandomPointType),
      type: getRandomPointType
    });
  }
  return result;
};

export { getEvents };
