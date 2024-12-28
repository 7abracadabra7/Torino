export function resetToMidnight(dateString) {
  const date = new Date(dateString);

  date.setHours(0, 0, 0, 0);

  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);

  return localDate.toISOString();
}
