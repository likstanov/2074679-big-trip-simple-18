import { createElement } from '../render.js';
import { createEditEventTemplate } from './templates/edit-event-view-template.js';

class EditEventView {
  #event = null;
  #destinations = null;
  #offers = null;

  constructor(event, destinations, offers) {
    this.#event = event;
    this.#destinations = destinations;
    this.#offers = offers;
  }

  #element = null;

  get template() {
    return createEditEventTemplate(this.#event, this.#destinations, this.#offers);
  }

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}

export { EditEventView };
