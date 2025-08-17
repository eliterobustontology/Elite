export const TIMECOMPARE = (data, callback) => {

  const givenDate = new Date(data);

  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  const isPast = today > givenDate;

  if (typeof callback === 'function') {

    callback(isPast);

  }
  
};