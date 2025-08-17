export const JSONADDER = (data, contents, callback) => {
    
    let MYDATA;

    try {

        MYDATA = JSON.parse(data) || [];

    } catch (e) {

        MYDATA = [];

    }

    const existingIds = MYDATA.map(item => item.id);

    let nextId = existingIds.length > 0 ? Math.max(...existingIds) + 1 : 1;

    contents.forEach((content) => {
    
        const contentId = content.id;

        const isDuplicate = contentId !== undefined && existingIds.includes(contentId);

        if (!isDuplicate) {

            if (contentId === undefined) {

                content.id = nextId++;

            } else {
                
                existingIds.push(contentId);
            }

            MYDATA.push(content);
        }

    });

    const updatedJSON = JSON.stringify(MYDATA);

    callback(updatedJSON);

};
