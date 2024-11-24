/**
 * Returns a String representation of a Date object in mm/dd/YYYY format, PST/PDT
 * @param date
 * @param time Include the time of the Date object in the string?
 * @return String
 */
// todo split date and time to have more formatting options?
export function dateToString(date: Date, time?:boolean) {
  const options:Intl.DateTimeFormatOptions = {
    timeZone: 'America/Los_Angeles',
    hour12: false,
    hour: time?'2-digit':undefined,
    minute: time?'2-digit':undefined,
    second: time?'2-digit':undefined
  };
  return date.toLocaleDateString('en-US', options);
}

