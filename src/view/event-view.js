import AbstractView from '../framework/view/abstract-view.js';
import { createEventTemplate } from './templates/event-view-template.js';

class EventView extends AbstractView {
  #event = null;
  #destination = null;
  #offers = null;

  constructor(event, destination, offers) {
    super();
    this.#event = event;
    this.#destination = destination;
    this.#offers = offers;
  }

  get template() {
    return createEventTemplate(this.#event, this.#destination, this.#offers);
  }

  setOpenEditModalClickHandler = (callback) => {
    this._callback.openClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#openEditModalClickHandler);
  };

  #openEditModalClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.openClick();
  };
}

export { EventView };
