import { EventsListView } from '../view/events-list-view.js';
import { SortMenuView } from '../view/sort-menu-view.js';
import { EventView } from '../view/event-view.js';
import { EditEventView } from '../view/edit-event-view.js';
import { EmptyEventsListView } from '../view/empty-events-list-view.js';
import { render, replace } from '../framework/render.js';
import { isEscapeKeydown } from '../utils.js';

class EventsPresenter {
  #eventsListComponent = new EventsListView();
  #eventsListContainerElement = null;
  #eventsModel = null;
  #events = null;
  #destinations = null;
  #offers = null;

  constructor(eventsContainerElement, eventsModel){
    this.#eventsListContainerElement = eventsContainerElement;
    this.#eventsModel = eventsModel;
    this.#events = this.#eventsModel.events;
    this.#destinations = this.#eventsModel.destinations;
    this.#offers = this.#eventsModel.offers;
  }

  init = () => {

    if(this.#events.length) {
      this.#renderSortMenu();
      this.#renderEventList();

      for(const event of this.#events) {
        this.#renderEvent(event);
      }

    } else {
      this.#renderEmptyEventsList();
    }

  };

  #renderEventList(){
    render(this.#eventsListComponent, this.#eventsListContainerElement);
  }

  #renderSortMenu(){
    render(new SortMenuView(), this.#eventsListContainerElement);
  }

  #renderEmptyEventsList(){
    render(new EmptyEventsListView(), this.#eventsListContainerElement);
  }

  #renderEvent(event) {
    const eventOffersFilteredByType = this.#offers.find((offer) => offer.type === event.type);
    const eventOffersFilteredById = eventOffersFilteredByType.offers.filter((item) => event.offers.some((offerId) => offerId === item.id));
    const eventDestination = this.#destinations.find((city) => city.id === event.destination);

    const eventComponent = new EventView(event, eventDestination, eventOffersFilteredById);
    const editEventComponent = new EditEventView(event, this.#destinations, this.#offers);

    const replaceEventToEditElementForm = () => {
      replace(editEventComponent, eventComponent);
      document.addEventListener('keydown', escKeyDownHandler);
    };

    const replaceEditElementFormToEvent = () => {
      replace(eventComponent, editEventComponent);
      document.removeEventListener('keydown', escKeyDownHandler);
    };

    eventComponent.setOpenEditModalClickHandler(replaceEventToEditElementForm);

    editEventComponent.setCloseEditModalClickHandler(replaceEditElementFormToEvent);

    function escKeyDownHandler (evt) {
      if(isEscapeKeydown(evt)) {
        evt.preventDefault();
        replaceEditElementFormToEvent();
      }
    }

    editEventComponent.setSaveEditModalClickHandler(replaceEditElementFormToEvent);

    render(eventComponent, this.#eventsListComponent.element);
  }
}

export { EventsPresenter };
