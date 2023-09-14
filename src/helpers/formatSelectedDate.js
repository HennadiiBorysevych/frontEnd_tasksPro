export default function formatSelectedDate(date) {
  const options = {
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  return formattedDate;
}
