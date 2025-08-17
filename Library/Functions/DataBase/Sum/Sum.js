export const SUMARRAY = (data, nameKey, priceKey, callback) => {

  let parsedData;

  try {

    parsedData = typeof data === "string" ? JSON.parse(data) : data;

  } catch {

    parsedData = [];

  }

  if (!Array.isArray(parsedData)) {

    callback({ items: [], total: 0 });

    return;

  }

  const items = [];

  let total = 0;

  parsedData.forEach(item => {

    const name = item[nameKey] || "Unknown";

    const price = Number(item[priceKey]) || 0;

    total += price;

    items.push({ name, price });

  });

  callback({ items, total });
  
};
