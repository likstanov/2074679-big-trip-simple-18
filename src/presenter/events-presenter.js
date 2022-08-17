import { TripEventsListView } from '../view/trip-events-list-view.js';
import { SortMenuView } from '../view/sort-menu-view.js';
import { TripPointView } from '../view/trip-point-view.js';
import { EditTripPointView } from '../view/edit-trip-point-view.js';
import { AddNewTripPointView } from '../view/add-new-trip-point-view.js';
import { render } from '../render.js';

class EventsPresenter {
  eventsListComponent = new TripEventsListView();

  init = (eventsContainerElement) => {
    this.eventsContainerElement = eventsContainerElement;

    render(new SortMenuView(), this.eventsContainerElement);
    render(this.eventsListComponent, this.eventsContainerElement);
    render(new EditTripPointView(), this.eventsListComponent.getElement());
    render(new AddNewTripPointView(), this.eventsListComponent.getElement());
    for(let i = 0; i < 3; i++) {
      render(new TripPointView, this.eventsListComponent.getElement());
    }
  };
}

export { EventsPresenter };
