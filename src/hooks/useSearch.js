import { useEffect, useState } from "react";
import {url} from '../requests';
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

        if(sessionStorage.getItem('searchdata')){
            //if user has searched a term previously
            const searchdata=JSON.parse(sessionStorage.getItem('searchdata'));
            if(searchdata.query==query){
                setdata(searchdata);
                setloading(false);
                return;
            }

        }

        let cancel;
        axios({
            method:'GET',
            url:url+'search?query='+query,
            cancelToken:new axios.CancelToken(c => cancel=c)
        }).then(res=>{
            setdata(res.data.data);
            const searchdata=res.data.data;
            searchdata.query=query;
            sessionStorage.setItem('searchdata',JSON.stringify(searchdata));
            setloading(false);
        }).catch((err)=>{
                if(axios.isCancel(err)) return;
        })
        return () => {
            cancel();
        }
        
    },[query])

    return {loading,data};
}

export default useSearch
