import { EventsListView } from '../view/events-list-view.js';
import { SortMenuView } from '../view/sort-menu-view.js';
import { EventView } from '../view/event-view.js';
import { EditEventView } from '../view/edit-event-view.js';
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

    render(new SortMenuView(), this.#eventsContainerElement);

    render(this.#eventsListComponent, this.#eventsContainerElement);

    for(const event of this.#events) {
      this.#renderEvent(event, this.#eventsListComponent.element);
    }
  };

  #renderEvent(event, placeToRender) {
    const eventOffersFilteredByType = this.#offers.find((offer) => offer.type === event.type);
    const eventOffersFilteredById = eventOffersFilteredByType.offers.filter((item) => event.offers.some((offerId) => offerId === item.id));
    const eventDestination = this.#destinations.find((city) => city.id === event.destination);

    render(new EventView(event, eventDestination, eventOffersFilteredById), placeToRender);
  }
}

export { EventsPresenter };
