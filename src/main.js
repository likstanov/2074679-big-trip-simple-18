import { FilterMenuView } from './view/filter-menu-view.js';
import { EventsPresenter } from './presenter/events-presenter.js';
import { render } from './render.js';

const filtersContainerELement = document.querySelector('.trip-controls__filters');
const eventsContainerElement = document.querySelector('.trip-events');

const eventsPresenter = new EventsPresenter();

render(new FilterMenuView(), filtersContainerELement);

eventsPresenter.init(eventsContainerElement);
