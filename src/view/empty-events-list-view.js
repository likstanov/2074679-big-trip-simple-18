import { createElement } from '../render.js';

const createEmptyEventsListTemplate = () => `
<p class="trip-events__msg">Click New Event to create your first point</p>
`;

class EmptyEventsListView {
  #element = null;

  get template(){
    return createEmptyEventsListTemplate();
  }

  get element(){
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement(){
    this.#element = null;
  }

}

export { EmptyEventsListView };
