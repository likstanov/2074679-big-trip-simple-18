import AbstractView from '../framework/view/abstract-view.js';
import { createEditEventTemplate } from './templates/edit-event-view-template.js';

class EditEventView extends AbstractView {
  #event = null;
  #destinations = null;
  #offers = null;

  constructor(event, destinations, offers) {
    super();
    this.#event = event;
    this.#destinations = destinations;
    this.#offers = offers;
  }

  get template() {
    return createEditEventTemplate(this.#event, this.#destinations, this.#offers);
  }

  setCloseEditModalClickHandler = (callback) => {
    this._callback.closeClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#closeEditModalClickHandler);
  };

  #closeEditModalClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.closeClick();
  };

  setSaveEditModalClickHandler = (callback) => {
    this._callback.saveClick = callback;
    this.element.querySelector('.event__save-btn').addEventListener('click', this.#saveEditModalClickHandler);
  };

  #saveEditModalClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.saveClick();
  };
}

export { EditEventView };
