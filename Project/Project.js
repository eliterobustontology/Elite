const NOVASTART=()=>{

    const H="f94ff247-90d3-498a-b337-41c98b66c6eb";

    const D=["ee","Haik"]

    CLEAR("");

    UPDATEDATA("https://docs.google.com/spreadsheets/d/1FaYjZ-wrvulW0AZQ6VQvEKYCp-gYqykahzGf42zi1v0/edit?usp=sharing","tetes",H,D,(data)=>{
        console.log(data)
    })

};