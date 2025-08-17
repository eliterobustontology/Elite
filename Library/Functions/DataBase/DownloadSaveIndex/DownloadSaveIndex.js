export const DOWNLOADSAVEINDEX = (API, NAME, NAMED, callback) => {

    CHECKER(navigator.onLine, () => {

        GETDATA(API, NAME, (data) => {

            const Data = { Name: NAMED, data: data };

            STOREINDEXED(NAMED, NAMED, Data, (resback) => {

                CONDITION(resback === false,() => {

                        UPDATEINDEX(NAMED, NAMED, Data, () => {});

                    },

                    () => {

                        callback();

                    }

                );

            });

        });

    });
    
};