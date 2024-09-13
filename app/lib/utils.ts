
// returns a date in mm/dd/YYYY format, PST/PDT
export function DateParser(date: Date | undefined) {
  //return string
  return date === undefined ? 'undefined' : date.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' });
}