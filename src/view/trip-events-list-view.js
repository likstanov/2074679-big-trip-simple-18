import { createElement } from '../render.js';

const createTripEventsListTemplate = () => '<ul class="trip-events__list"></ul>';

class TripEventsListView {
  getTemplate() {
    return createTripEventsListTemplate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

export { TripEventsListView };
