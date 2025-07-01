const NOVASTART=()=>{

    const H=["name","age"];

    const D=["ee","rr"]

    CLEAR("");

    INSERTDATA("https://docs.google.com/spreadsheets/d/1FaYjZ-wrvulW0AZQ6VQvEKYCp-gYqykahzGf42zi1v0/edit?usp=sharing","tetes",H,D,(data)=>{
        console.log(data)
    })

};