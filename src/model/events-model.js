import { getEvents } from '../mock/events-mock.js';
import { getDestinations } from '../mock/destinations-mock.js';
import { getOffersByType } from '../mock/offers-mock.js';

class EventsModel {
  #events = getEvents();
  #destinations = getDestinations();
  #offers = getOffersByType();

  get events(){
    return this.#events;
  }

  get destinations(){
    return this.#destinations;
  }

  get offers(){
    return this.#offers;
  }
}

export { EventsModel };
