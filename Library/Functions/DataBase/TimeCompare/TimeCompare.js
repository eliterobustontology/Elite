export const TIMECOMPARE = (data, callback) => {

  try {

    const [datePart, timePart] = data.split('T');
    const [year, day, month] = datePart.split('-');
    const fixedDateString = `${year}-${month}-${day}T${timePart}`;

    const givenDate = new Date(fixedDateString);

    if (isNaN(givenDate)) {

      throw new Error("Invalid date format.");

    }

    const today = new Date();

    today.setHours(0, 0, 0, 0); 

    const isPast = today > givenDate;

    if (typeof callback === 'function') {

      callback(isPast);

    } else {

      console.warn("Callback is not a function.");

    }

  } catch (err) {

    console.error("TIMECOMPARE error:", err.message);

  }
  
};
