import React, {useState, useEffect} from "react";

function ImageBook ({isbn}){
    
    const [imgBook, setImgBook] = useState([]);
    useEffect (()=>{
        fetch(`https://openlibrary.org/isbn/${isbn}.json`)
        .then (response=>response.json())
        .then (data=>setImgBook(data))
    }, [isbn])
    if (typeof imgBook === 'object'){
        if (imgBook.covers === undefined || imgBook.covers === null){
            return(
                <img className="bookCover" src={"https://as2.ftcdn.net/v2/jpg/01/98/86/63/1000_F_198866399_vQambmqMEK9975X1Yg7686t4nFpSaubL.jpg"} alt ="imagen de libro"/>
            )
        } else {
            return(
                <img className="bookCover" src={`https://covers.openlibrary.org/b/id/${imgBook.covers}.jpg`} alt ="imagen de libro"/>
            )
        }
    } else {
        return(
            <img className="bookCover" src={"https://as2.ftcdn.net/v2/jpg/01/98/86/63/1000_F_198866399_vQambmqMEK9975X1Yg7686t4nFpSaubL.jpg"} alt ="imagen de libro"/>
        )
    }
}
export default ImageBook;