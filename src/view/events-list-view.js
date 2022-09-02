import AbstractView from '../framework/view/abstract-view.js';

const createEventsListTemplate = () => '<ul class="trip-events__list"></ul>';

class EventsListView extends AbstractView {
  get template() {
    return createEventsListTemplate();
  }
}

export { EventsListView };
