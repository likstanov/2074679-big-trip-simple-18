import dayjs from 'dayjs';

const getReadableDateTime = (date, format) => dayjs(date).format(format);

const isEscapeKeydown = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const updateEvent = (events, updatingEvent) => {
  const index = events.findIndex((event) => event.id === updatingEvent.id);

  if(index === -1) {
    return events;
  }

  return [...events.slice(0, index), updatingEvent, ...events.slice(0, index + 1)];
};

export { getReadableDateTime, isEscapeKeydown, updateEvent };
