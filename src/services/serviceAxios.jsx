import axios from "axios";

export const serviceAxios=() =>{

    const url= "https://sheetdb.io/api/v1/dqmvr2e2rl6ru"

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
        const res= await axios.delete(urlID)
        return res;
    }
    return {
        get,
        create,
        destroy,
    }
}
