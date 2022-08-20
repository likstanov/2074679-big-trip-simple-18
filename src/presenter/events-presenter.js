import { EventsListView } from '../view/events-list-view.js';
import { SortMenuView } from '../view/sort-menu-view.js';
import { EventView } from '../view/event-view.js';
import { EditEventView } from '../view/edit-event-view.js';
import { render } from '../render.js';

class EventsPresenter {
  eventsListComponent = new EventsListView();

  init = (eventsContainerElement, eventsModel) => {
    this.eventsContainerElement = eventsContainerElement;
    this.eventsModel = eventsModel;
    this.events = this.eventsModel.getEvents();
    this.destinations = this.eventsModel.getDestinations();
    this.offers = this.eventsModel.getOffers();

    render(new SortMenuView(), this.eventsContainerElement);
    render(this.eventsListComponent, this.eventsContainerElement);
    render(new EditEventView(this.events[0], this.destinations, this.offers), this.eventsListComponent.getElement());

    this.events.forEach((event) => {
      const offerFilteredByType = this.offers.find((offer) => offer.type === event.type);
      const offerFilteredById = offerFilteredByType.offers.filter((item) => event.offers.some((offerId) => offerId === item.id));
      render(new EventView(
        event,
        this.destinations.find((city) => city.id === event.destination),
        offerFilteredById,
      ), this.eventsListComponent.getElement());
    });
  };
}

export { EventsPresenter };
