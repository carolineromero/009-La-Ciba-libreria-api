import axios from "axios";

export const serviceAxios=() =>{

    let url= "http://localhost:3000"

    const get =async()=>{
         const res= await axios.get("http://localhost:3000");
         return res; 
    };

    const create =async()=>{
        const res= await axios.post("http://localhost:3000",data);
        return res;
    };

    const delate =async()=>{
        let urlID=`${"http://localhost:3000"}/${id}`;
        const res= await axios.delete(urlID)
        return res;
    }
}
