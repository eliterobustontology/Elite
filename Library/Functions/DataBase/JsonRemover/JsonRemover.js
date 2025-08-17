export const JSONREMOVER = (data, ids, callback) => {
    
    let MYDATA;

    try {

        MYDATA = JSON.parse(data) || [];

    } catch (e) {

        MYDATA = [];

    }

    const idSet = new Set(ids.map(id => String(id)));

    MYDATA.forEach(item => {

        console.log("Item:", item, "| item.id =", item.id);

    });

    const filteredData = MYDATA.filter(item => {

        const itemId = item?.id ?? null;

        return !idSet.has(String(itemId));

    });

    const updatedJSON = JSON.stringify(filteredData);

    callback(updatedJSON);

};
