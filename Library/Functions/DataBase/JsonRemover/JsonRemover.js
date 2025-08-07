export const JSONREMOVER = (data, ids, callback) => {
    let MYDATA;

    // Parse the original JSON data safely
    try {
        MYDATA = JSON.parse(data) || [];
    } catch (e) {
        MYDATA = [];
    }

    // Normalize all ids to string for safe comparison
    const idSet = new Set(ids.map(id => String(id)));

    // Debug: Check what each item's id is
    MYDATA.forEach(item => {
        console.log("Item:", item, "| item.id =", item.id);
    });

    // Only keep items that are NOT in the id list
    const filteredData = MYDATA.filter(item => {
        const itemId = item?.id ?? null;
        return !idSet.has(String(itemId));
    });

    const updatedJSON = JSON.stringify(filteredData);
    callback(updatedJSON);
};
