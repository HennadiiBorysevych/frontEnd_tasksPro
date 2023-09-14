const formatShortWeekday = (locale, date) => {
  const options = { weekday: 'short' };
  const formattedWeekday = new Intl.DateTimeFormat(locale, options).format(
    date
  );
  return formattedWeekday.slice(0, 2);
};

export default formatShortWeekday;
