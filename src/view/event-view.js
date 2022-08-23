import { createElement } from '../render.js';
import { createEventTemplate } from './templates/event-view-template.js';

class EventView {
  #event = null;
  #destination = null;
  #offers = null;

  constructor(event, destination, offers) {
    this.#event = event;
    this.#destination = destination;
    this.#offers = offers;
  }

  #element = null;

  get template() {
    return createEventTemplate(this.#event, this.#destination, this.#offers);
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

export { EventView };
