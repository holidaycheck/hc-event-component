const fixOneDigitHourForSafari = date => {
  // The hour MUST be two-digits, otherwise Safari will say "Invalid Date" :(
  const splitDate = date.split(' ');
  if (/^\d\:/.test(splitDate[1])) {
    return [splitDate[0], '0'+splitDate[1]].join(' ');
  }
  return date;
}
const fixDateForSafari = (date) => fixOneDigitHourForSafari(date).replace(' ', 'T');
const newDate = date => new Date(fixDateForSafari(date));
const longTimeOptions = {weekday: 'short', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
const dayOnlyOptions = {weekday: 'short', month: 'long', day: 'numeric'};
const timeOnlyOptions = {hour: 'numeric', minute: 'numeric'};
const isSameDay = (date1, date2) => date1.toLocaleDateString() === date2.toLocaleDateString();

export const formatTimes = ([startDateTime, endDateTime]) => {
  if (!endDateTime) {
    formatStartTime(startDateTime);
    return;
  }
  const startDate = newDate(startDateTime.innerText);
  const endDate = newDate(endDateTime.innerText);
  startDateTime.setAttribute('datetime', startDate.toISOString());
  endDateTime.setAttribute('datetime', endDate.toISOString());
  if (isSameDay(startDate, endDate)) {
    startDateTime.innerText = startDate.toLocaleDateString('en-GB', longTimeOptions);
    endDateTime.innerText = endDate.toLocaleTimeString('en-GB', timeOnlyOptions);
  } else {
    startDateTime.innerText = startDate.toLocaleDateString('en-GB', dayOnlyOptions);
    endDateTime.innerText = endDate.toLocaleDateString('en-GB', dayOnlyOptions);
  }
}

const formatStartTime = startDateTime => {
  const startDate = newDate(startDateTime.innerText);
  startDateTime.setAttribute('datetime', startDate.toISOString());
  startDateTime.innerText = startDate.toLocaleDateString('en-GB', longTimeOptions);
}
