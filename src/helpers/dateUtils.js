const getDateByCriteria = value => {
  const currentDate = new Date(value);
  currentDate.setHours(23, 59, 59, 999); // Встановлюємо години, хвилини, секунди і мілісекунди на кінець доби

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const endOfCurrentDeadline =
    `${daysOfWeek[currentDate.getUTCDay()]} ${
      months[currentDate.getUTCMonth()]
    } ${currentDate.getUTCDate()} ${currentDate.getUTCFullYear()} ` +
    `${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()}:${currentDate.getUTCSeconds()} GMT+0300 (за східноєвропейським літнім часом)`;

  return endOfCurrentDeadline;
};

const getShortDateByCriteria = date => {
  const dateObject = new Date(date);

  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const day = String(dateObject.getDate()).padStart(2, '0');
  const year = dateObject.getFullYear();

  const formattedDate = `${month} ${day} ${year}`;

  return formattedDate;
};

export const formatSelectedDate = date => {
  const options = {
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  return formattedDate;
};

export const formatShortWeekday = (locale, date) => {
  const options = { weekday: 'short' };
  const formattedWeekday = new Intl.DateTimeFormat(locale, options).format(
    date
  );
  return formattedWeekday.slice(0, 2);
};

export const formatShortDeadlineForMarkup = deadline => {
  const deadlineDate = new Date(deadline);
  const formatted = `${
    deadlineDate.getMonth() + 1
  }/${deadlineDate.getDate()}/${deadlineDate.getFullYear()}`;

  return formatted;
};

export const getCurrentDate = value => getDateByCriteria(value);
export const getDeadlineDate = value => getDateByCriteria(value);
export const getShortCurrentDate = date => getShortDateByCriteria(date);
export const getShortDeadlineDate = date => getShortDateByCriteria(date);
