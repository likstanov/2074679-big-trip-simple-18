import { getSeveralUniqueRandomElementsFromArray, getRandomIntegerFromRange } from './utils.js';
import { OFFERS } from './const-data.js';

const getRandomOffersByTypeId = (type) => {
  const result = [];
  const offerByType = OFFERS.find((offer) => offer.type === type);
  if(!offerByType) {
    return [];
  }
  offerByType.offers.forEach((offer) => {
    result.push(offer.id);
  });
  return getSeveralUniqueRandomElementsFromArray(result, getRandomIntegerFromRange(0,offerByType.offers.length));
};

const getOffersByType = () => OFFERS;

export { getRandomOffersByTypeId, getOffersByType };
