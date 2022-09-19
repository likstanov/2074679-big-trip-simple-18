import { getReadableDateTime } from '../../utils/common.js';

const getOffersItemsListTemplate = (offers) => {
  let listItemsList = '';
  offers.forEach((offer) => {
    listItemsList += `
    <li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
        +€&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </li>
    `;
  });
  return listItemsList ? listItemsList : 'No additional offers';
};

const createEventTemplate = (event, destination, offers) => (`<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="2019-03-18">${getReadableDateTime(event.dateFrom, 'DD MMM')}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${event.type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${event.type} ${destination.name}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T10:30">${getReadableDateTime(event.dateFrom, 'HH:MM')}</time>
        —
        <time class="event__end-time" datetime="2019-03-18T11:00">${getReadableDateTime(event.dateTo, 'HH:MM')}</time>
      </p>
    </div>
    <p class="event__price">
      €&nbsp;<span class="event__price-value">${event.basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${getOffersItemsListTemplate(offers)}
    </ul>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>
`);

export { createEventTemplate };
