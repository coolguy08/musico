import { useEffect, useState } from "react";
import axios from 'axios';


function useSearch(query) {

    const [loading, setloading] = useState(false);
    const [data, setdata] = useState(false);
    
    useEffect(() => {
        setdata(false);
        return () => {
            
        }
    }, [query])
    useEffect(() => {
        if(query==""){
            setloading(false);
            return;
        };
        setloading(true);
       let cancel;
        axios({
            method:'GET',
            url:'https://muskan-api.herokuapp.com/api/v1/search?query='+query,
            cancelToken:new axios.CancelToken(c => cancel=c)
        }).then(res=>{
            setdata(res.data.data);
            setloading(false);
        }).catch((err)=>{
                if(axios.isCancel(err)) return;
        })
        return () => {
            cancel();
        }
        
    }, [query])

    return {loading,data};
}

export default useSearch
