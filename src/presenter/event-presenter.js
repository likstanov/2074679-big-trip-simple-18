import { EventView } from '../view/event-view.js';
import { EditEventView } from '../view/edit-event-view.js';
import { isEscapeKeydown } from '../utils/common.js';
import { remove, render, replace } from '../framework/render.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

class EventPresenter {
  #eventsListContainer = null;
  #eventComponent = null;
  #editEventComponent = null;
  #offers = null;
  #destinations = null;

  #changeData = null;
  #changeMode = null;

  #event = null;

  #mode = Mode.DEFAULT;

  constructor(container, eventsModel, changeData, changeMode) {
    this.#eventsListContainer = container;
    this.#offers = eventsModel.offers;
    this.#destinations = eventsModel.destinations;
    this.#changeData = changeData;
    this.#changeMode = changeMode;
  }

  init = (event) => {
    this.#event = event;
    const eventOffersFilteredByType = this.#offers.find((offer) => offer.type === this.#event.type);
    const eventOffersFilteredById = eventOffersFilteredByType.offers.filter((item) => this.#event.offers.some((offerId) => offerId === item.id));
    const eventDestination = this.#destinations.find((city) => city.id === this.#event.destination);

    const prevEventComponent = this.#eventComponent;
    const prevEditEventComponent = this.#editEventComponent;

    this.#eventComponent = new EventView(this.#event, eventDestination, eventOffersFilteredById);
    this.#editEventComponent = new EditEventView(this.#event, this.#destinations, this.#offers);

    this.#eventComponent.setOpenEditModalClickHandler(this.#handleOpenEditFormClick);

    this.#editEventComponent.setCloseEditModalClickHandler(this.#handleCloseEditFormClick);

    this.#editEventComponent.setSaveEditModalClickHandler(this.#handleCloseEditFormClick);

    if(prevEventComponent === null || prevEditEventComponent === null) {
      render(this.#eventComponent, this.#eventsListContainer);
      return;
    }

    if(this.#mode === Mode.DEFAULT) {
      replace(this.#eventComponent, prevEventComponent);
    }

    if(this.#mode === Mode.EDITING) {
      replace(this.#editEventComponent, prevEditEventComponent);
    }

    remove(prevEventComponent);
    remove(prevEditEventComponent);

  };

  destroy = () => {
    remove(this.#eventComponent);
    remove(this.#editEventComponent);
  };

  resetView = () => {
    if(this.#mode !== Mode.DEFAULT) {
      this.#replaceEditFormToEvent();
    }
  };

  #replaceEventToEditForm = () => {
    replace(this.#editEventComponent, this.#eventComponent);
    this.#changeMode();
    this.#mode = Mode.EDITING;
  };

  #replaceEditFormToEvent = () => {
    replace(this.#eventComponent, this.#editEventComponent);
    this.#mode = Mode.DEFAULT;
  };

  #escKeyDownHandler = (evt) => {
    if(isEscapeKeydown(evt)) {
      evt.preventDefault();
      this.#replaceEditFormToEvent();
    }
  };

  #handleOpenEditFormClick = () => {
    this.#replaceEventToEditForm();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #handleCloseEditFormClick = () => {
    this.#replaceEditFormToEvent();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };
}

export { EventPresenter };
