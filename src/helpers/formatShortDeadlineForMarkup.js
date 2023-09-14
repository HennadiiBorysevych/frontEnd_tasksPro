export default function formatShortDeadlineForMarkup(deadline) {
  const deadlineDate = new Date(deadline);
  const formatted = `${
    deadlineDate.getMonth() + 1
  }/${deadlineDate.getDate()}/${deadlineDate.getFullYear()}`;

  return formatted;
}
