import { getEvents } from '../mock/events-mock.js';
import { getDestinations } from '../mock/destinations-mock.js';
import { getOffersByType } from '../mock/offers-mock.js';

class EventsModel {
  events = getEvents();
  destinations = getDestinations();
  offers = getOffersByType();

  getEvents = () => this.events;
  getDestinations = () => this.destinations;
  getOffers = () => this.offers;
}

export { EventsModel };
