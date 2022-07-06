import axios from "axios";

export const serviceAxios=() =>{

    const url= "https://sheetlabs.com/MELQ/catalog"

    const get =async()=>{
         const res= await axios.get(url);
         return res; 
    };

    const create =async()=>{
        const res= await axios.post(url,data);
        return res;
    };

    const destroy =async()=>{
        let urlID=`${url}/${id}`;
        const res= await axios.delete(url,data)
        return res;
    }
    return {
        get,
        create,
        destroy,
    }
}
