export const URLCOLLECTED = (L, C) => {

    try {

        const u = new URL(L),

        q = {};

        u.searchParams.forEach((v, k) => {

            q[k] = v;

        });

        const h = u.hash ? u.hash.substring(1) : null,

            p = u.pathname.split("/").filter((s) => s),

           
            d = { query: Object.keys(q).length ? q : null, hash: h || null, path: p.length ? p : null, origin: u.origin, fullUrl: u.href };
        
            Object.keys(d).forEach((k) => {

            if (d[k] === null) delete d[k];

        });

        if (typeof C === "function") C(d);

    } catch (e) {

        console.error("Invalid URL or processing error:", e);

    }
    
};