export const MONEYPARTISION = (input, callback) => {
  
  if (typeof input !== 'number' || !Number.isFinite(input)) {

    console.error("Input must be a valid number.");

    callback('');

    return;
    
  }

  const formatted = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (typeof callback === 'function') {

    callback(formatted);

  }

};