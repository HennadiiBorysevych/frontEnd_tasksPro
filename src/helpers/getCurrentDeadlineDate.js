export default function getCurrentDeadlineDate(value) {
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
}
