import dayjs from 'dayjs';

const getReadableDateTime = (date, format) => dayjs(date).format(format);

const isEscapeKeydown = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export { getReadableDateTime, isEscapeKeydown };
