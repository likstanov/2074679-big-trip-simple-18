import { createElement } from '../render.js';
import { createEventTemplate } from './templates/event-view-template.js';

class EventView {
  constructor(event, destination, offers) {
    this.event = event;
    this.destination = destination;
    this.offers = offers;
  }

  getTemplate() {
    return createEventTemplate(this.event, this.destination, this.offers);
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

export { EventView };
