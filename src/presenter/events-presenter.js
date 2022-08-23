import { EventsListView } from '../view/events-list-view.js';
import { SortMenuView } from '../view/sort-menu-view.js';
import { EventView } from '../view/event-view.js';
import { EditEventView } from '../view/edit-event-view.js';
import { EmptyEventsListView } from '../view/empty-events-list-view.js';
import { render } from '../render.js';

class EventsPresenter {
  #eventsListComponent = new EventsListView();
  #eventsContainerElement = null;
  #eventsModel = null;
  #events = null;
  #destinations = null;
  #offers = null;

  init = (eventsContainerElement, eventsModel) => {
    this.#eventsContainerElement = eventsContainerElement;
    this.#eventsModel = eventsModel;
    this.#events = this.#eventsModel.events;
    this.#destinations = this.#eventsModel.destinations;
    this.#offers = this.#eventsModel.offers;

    if(this.#events.length) {
      render(new SortMenuView(), this.#eventsContainerElement);
      render(this.#eventsListComponent, this.#eventsContainerElement);

      for(const event of this.#events) {
        this.#renderEvent(event);
      }

    } else {
      render(new EmptyEventsListView(), this.#eventsContainerElement);
    }

  };

  #renderEvent(event) {
    const eventOffersFilteredByType = this.#offers.find((offer) => offer.type === event.type);
    const eventOffersFilteredById = eventOffersFilteredByType.offers.filter((item) => event.offers.some((offerId) => offerId === item.id));
    const eventDestination = this.#destinations.find((city) => city.id === event.destination);

    const eventComponent = new EventView(event, eventDestination, eventOffersFilteredById);
    const editEventComponent = new EditEventView(event, this.#destinations, this.#offers);

    const replaceEventToEditElementForm = () => {
      this.#eventsListComponent.element.replaceChild(editEventComponent.element, eventComponent.element);
    };

    const replaceEditElementFormToEvent = () => {
      this.#eventsListComponent.element.replaceChild(eventComponent.element, editEventComponent.element);
      document.removeEventListener('keydown', escKeyDownHandler);
    };

    eventComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceEventToEditElementForm();
      document.addEventListener('keydown', escKeyDownHandler);
    });

    function escKeyDownHandler (evt) {
      if(evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceEditElementFormToEvent();
      }
    }

    editEventComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceEditElementFormToEvent();
    });

    editEventComponent.element.querySelector('.event__save-btn').addEventListener('click', (evt) => {
      evt.preventDefault();
      replaceEditElementFormToEvent();
    });

    render(eventComponent, this.#eventsListComponent.element);
  }
}

export { EventsPresenter };
