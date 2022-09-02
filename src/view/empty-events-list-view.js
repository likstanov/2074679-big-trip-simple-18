import AbstractView from '../framework/view/abstract-view.js';

const createEmptyEventsListTemplate = () => `
<p class="trip-events__msg">Click New Event to create your first point</p>
`;

class EmptyEventsListView extends AbstractView {
  get template(){
    return createEmptyEventsListTemplate();
  }
}

export { EmptyEventsListView };
