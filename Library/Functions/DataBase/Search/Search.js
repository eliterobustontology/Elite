export const SEARCH = (data, searchKey, searchTerm, callback) => {

  let parsedData;

  try {

    parsedData = typeof data === "string" ? JSON.parse(data) : data;

  } catch {

    parsedData = [];

  }

  if (!Array.isArray(parsedData)) {

    callback([]);

    return;

  }

  const term = searchTerm.toLowerCase();

  const results = parsedData.filter(item => {

    const value = item[searchKey];

    if (typeof value === "string") {

      return value.toLowerCase().includes(term);

    }

    callback(false);

  });

  callback(results);

};