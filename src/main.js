import { FilterMenuView } from './view/filter-menu-view.js';
import { EventsPresenter } from './presenter/events-presenter.js';
import { EventsModel } from './model/events-model.js';
import { render } from './render.js';

const filtersContainerELement = document.querySelector('.trip-controls__filters');
const eventsContainerElement = document.querySelector('.trip-events');

const eventsModel = new EventsModel();
const eventsPresenter = new EventsPresenter();

render(new FilterMenuView(), filtersContainerELement);

eventsPresenter.init(eventsContainerElement, eventsModel);
