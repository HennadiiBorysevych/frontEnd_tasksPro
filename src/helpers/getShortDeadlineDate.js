const getShortDeadlineDate = date => {
  const dateObject = new Date(date);

  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const day = String(dateObject.getDate()).padStart(2, '0');
  const year = dateObject.getFullYear();

  const formattedDate = `${month} ${day} ${year}`;

  return formattedDate;
};

export default getShortDeadlineDate;
