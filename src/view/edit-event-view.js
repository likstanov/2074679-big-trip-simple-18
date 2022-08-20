import { createElement } from '../render.js';
import { createEditEventTemplate } from './templates/edit-event-view-template.js';

class EditEventView {
  constructor(event, destinations, offers) {
    this.event = event;
    this.destinations = destinations;
    this.offers = offers;
  }

  getTemplate() {
    return createEditEventTemplate(this.event, this.destinations, this.offers);
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

export { EditEventView };
