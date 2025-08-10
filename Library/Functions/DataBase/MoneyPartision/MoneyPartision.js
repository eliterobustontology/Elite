export const MONEYPARTISION = (input, callback) => {
  // Ensure input is a number
  if (typeof input !== 'number' || !Number.isFinite(input)) {
    console.error("Input must be a valid number.");
    callback('');
    return;
  }

  // Convert number to string and format with commas
  const formatted = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Pass formatted value to callback
  if (typeof callback === 'function') {
    callback(formatted);
  }
};