const longTimeOptions = {weekday: 'short', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
const dayOnlyOptions = {weekday: 'short', month: 'long', day: 'numeric'};
const timeOnlyOptions = {hour: 'numeric', minute: 'numeric'};
const isSameDay = (date1, date2) => date1.toLocaleDateString() === date2.toLocaleDateString();
export const formatTimes = ([startDateTime, endDateTime]) => {
  if (!endDateTime) {
    formatStartTime(startDateTime);
    return;
  }
  const startDate = new Date(startDateTime.innerText);
  const endDate = new Date(endDateTime.innerText);
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
  const startDate = new Date(startDateTime.innerText);
  startDateTime.setAttribute('datetime', startDate.toISOString());
  startDateTime.innerText = startDate.toLocaleDateString('en-GB', longTimeOptions);
}
