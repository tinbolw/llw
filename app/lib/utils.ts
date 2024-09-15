
// returns a date in mm/dd/YYYY format, PST/PDT
export function dateToString(date: Date | undefined) {
  //return string
  return date === undefined ? 'undefined' : date.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' });
}

export function stringToDate(string: string | undefined) {
  //return Date
  if (!string) return undefined;
  try {
    return new Date(string);
  } catch (e) {
    return 'Invalid Date';
  }
}