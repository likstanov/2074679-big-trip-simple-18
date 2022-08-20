const getDestinationsItemsListTemplate = (destinations) => {
  let destinationItemsList = '';
  destinations.forEach((destination) => {
    destinationItemsList += `<option value="${destination.name}"></option>`;
  });
  return destinationItemsList ? destinationItemsList : 'No additional offers';
};

const getOffersItemsList = (offers, event) => {
  const offersFilteredByEventType = offers.find((offer) => offer.type === event.type);
  let offersItemsList = '';
  for(const offer of offersFilteredByEventType.offers) {
    const isOfferChecked = event.offers.includes(offer.id) ? 'checked' : '';
    offersItemsList += `
        <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}" type="checkbox" name="event-offer-${offer.id}" ${isOfferChecked}>
      <label class="event__offer-label" for="event-offer-${offer.id}">
        <span class="event__offer-title">${offer.title}</span>
        +€&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>
        `;
  }
  return offersItemsList ? offersItemsList : '';
};

const isEventTypeChecked = (event) => setTimeout(() => {
  document.querySelector(`[value=${event.type}]`).checked = true;
});

const createEditEventTemplate = (event, destinations, offers) => {
  const destination = destinations.find((city) => city.id === event.destination);
  isEventTypeChecked(event);
  return (`
  <li class="trip-events__item">
                <form class="event event--edit" action="#" method="post">
                  <header class="event__header">
                    <div class="event__type-wrapper">
                      <label class="event__type  event__type-btn" for="event-type-toggle-1">
                        <span class="visually-hidden">Choose event type</span>
                        <img class="event__type-icon" width="17" height="17" src="img/icons/${event.type}.png" alt="Event type icon">
                      </label>
                      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
                      <div class="event__type-list">
                        <fieldset class="event__type-group">
                          <legend class="visually-hidden">Event type</legend>
                          <div class="event__type-item">
                            <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                            <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                          </div>
                          <div class="event__type-item">
                            <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                            <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                          </div>
                          <div class="event__type-item">
                            <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                            <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                          </div>
                          <div class="event__type-item">
                            <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                            <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                          </div>
                          <div class="event__type-item">
                            <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                            <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                          </div>
                          <div class="event__type-item">
                            <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight">
                            <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                          </div>
                          <div class="event__type-item">
                            <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                            <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                          </div>
                          <div class="event__type-item">
                            <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                            <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                          </div>
                          <div class="event__type-item">
                            <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                            <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                    <div class="event__field-group  event__field-group--destination">
                      <label class="event__label  event__type-output" for="event-destination-1">
                        ${event.type}
                      </label>
                      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
                      <datalist id="destination-list-1">
                        ${getDestinationsItemsListTemplate(destinations)}
                      </datalist>
                    </div>
                    <div class="event__field-group  event__field-group--time">
                      <label class="visually-hidden" for="event-start-time-1">From</label>
                      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
                      —
                      <label class="visually-hidden" for="event-end-time-1">To</label>
                      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
                    </div>
                    <div class="event__field-group  event__field-group--price">
                      <label class="event__label" for="event-price-1">
                        <span class="visually-hidden">Price</span>
                        €
                      </label>
                      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${event.basePrice}">
                    </div>
                    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                    <button class="event__reset-btn" type="reset">Delete</button>
                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </header>
                  <section class="event__details">
                    <section class="event__section  event__section--offers">
                      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                      <div class="event__available-offers">
                      ${getOffersItemsList(offers, event)}
                      </div>
                    </section>
                    <section class="event__section  event__section--destination">
                      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                      <p class="event__destination-description">${destination.description}</p>
                    </section>
                  </section>
                </form>
              </li>
  `);
};

export { createEditEventTemplate };

