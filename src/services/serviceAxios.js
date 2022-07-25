import axios from "axios";

export class serviceAxios{

    constructor (){
        this.db=axios.create({
            baseURL:" http://localhost:5000/books"
        })
    }
   get =() => {
       return this.db.get().then(res=>res.data)
     
    };

    create = async (data) => {
        const res = await this.db.post(data);
        return res.data;
    };

   destroy = async (id) => {
   
        const res = await this.db.delete(`/${id}`)
        return res.data;
    };

    update = async (id,data) => {

        const res = await this.db.post(`/${id}`, data);
        return res.data;
    };


}

const servicedb = new serviceAxios()
export default servicedb