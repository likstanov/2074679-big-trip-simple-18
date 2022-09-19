import { EventPresenter } from './event-presenter.js';
import { EventsListView } from '../view/events-list-view.js';
import { SortMenuView } from '../view/sort-menu-view.js';
import { EmptyEventsListView } from '../view/empty-events-list-view.js';
import { updateEvent } from '../utils/common.js';
import { render } from '../framework/render.js';

class AppPresenter {
  #eventsListComponent = new EventsListView();
  #sortMenuComponent = new SortMenuView();
  #emptyEventsListComponent = new EmptyEventsListView();
  #eventPresenters = new Map();

  #eventsListContainerElement = null;
  #eventsModel = null;
  #events = null;

  constructor(eventsContainerElement, eventsModel){
    this.#eventsListContainerElement = eventsContainerElement;
    this.#eventsModel = eventsModel;
    this.#events = this.#eventsModel.events;
  }

  init = () => {

    if(this.#events.length) {
      this.#renderSortMenu();
      this.#renderEventsList();

    } else {
      this.#renderEmptyEventsList();
    }

  };

  #renderEventsList(){
    render(this.#eventsListComponent, this.#eventsListContainerElement);

    this.#events.forEach((event) => this.#renderEvent(event));
  }

  #renderEvent(event) {
    const eventPresenter = new EventPresenter(this.#eventsListComponent.element, this.#eventsModel, this.#handleEventChange, this.#handleModeChange);
    eventPresenter.init(event);
    this.#eventPresenters.set(event.id, eventPresenter);
  }

  #clearEventsList = () => {
    this.#eventPresenters.forEach((presenter) => presenter.destroy());
    this.#eventPresenters.clear();
  };

  #handleEventChange = (updatedEvent) => {
    this.#events = updateEvent(this.#events, updatedEvent);
    this.#eventPresenters.get(updateEvent.id).init(updateEvent);
  };

  #handleModeChange = () => {
    this.#eventPresenters.forEach((presenter) => presenter.resetView());
  };

  #renderSortMenu(){
    render(this.#sortMenuComponent, this.#eventsListContainerElement);
  }

  #renderEmptyEventsList(){
    render(this.#emptyEventsListComponent, this.#eventsListContainerElement);
  }
}

export { AppPresenter };
