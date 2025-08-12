export const TIMECOMPARE = (data, callback) => {
  // Convert the given date string to a Date object
  const givenDate = new Date(data);

  // Get today's date (without time)
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to midnight

  // Compare the dates
  const isPast = today > givenDate;

  // Call the callback with the result
  if (typeof callback === 'function') {
    callback(isPast);
  }
};