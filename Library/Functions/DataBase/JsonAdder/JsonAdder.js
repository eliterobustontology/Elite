export const JSONADDER = (data, contents, callback) => {
    let MYDATA;

    // Parse existing JSON data safely
    try {
        MYDATA = JSON.parse(data) || [];
    } catch (e) {
        MYDATA = [];
    }

    // Find the current highest ID
    const existingIds = MYDATA.map(item => item.id);
    let nextId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;

    contents.forEach((content) => {
        // If content already has an id and exists in MYDATA, skip it
        const contentId = content.id;
        const isDuplicate = contentId !== undefined && existingIds.includes(contentId);

        if (!isDuplicate) {
            // If no id provided, assign a new unique id
            if (contentId === undefined) {
                content.id = nextId++;
            } else {
                // Ensure we don't re-add this id in this same loop
                existingIds.push(contentId);
            }

            MYDATA.push(content);
        }
    });

    // Convert updated data to JSON and return
    const updatedJSON = JSON.stringify(MYDATA);
    callback(updatedJSON);
};
