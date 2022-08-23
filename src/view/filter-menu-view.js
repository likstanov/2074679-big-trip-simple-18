import { createElement } from '../render.js';

const createFilterMenuTemplate = () => `
<form class="trip-filters" action="#" method="get" style="">
<div class="trip-filters__filter">
<input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked="">
<label class="trip-filters__filter-label" for="filter-everything">Everything</label>
</div>
<div class="trip-filters__filter">
<input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
<label class="trip-filters__filter-label" for="filter-future">Future</label>
</div>
<button class="visually-hidden" type="submit">Accept filter</button>
</form>`;

class FilterMenuView {
  #element = null;

  get template() {
    return createFilterMenuTemplate();
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

export { FilterMenuView };
