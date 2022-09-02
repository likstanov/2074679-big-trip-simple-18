import AbstractView from '../framework/view/abstract-view.js';

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

class FilterMenuView extends AbstractView {
  get template() {
    return createFilterMenuTemplate();
  }
}

export { FilterMenuView };
