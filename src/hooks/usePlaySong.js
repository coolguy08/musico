import { useEffect, useState } from "react";
import {GetDetails} from '../requests';

function usePlaySong(id,type) {
    const [loading, setloading] = useState(true);
    const [data, setdata] = useState([]);

    useEffect(() => {
        
        async function getdata(){
            const d=await GetDetails(id,type);
            
            console.log(d.data);
            setdata(d.data);
            setloading(false);
        }

        if(sessionStorage.getItem(id))
        {
            setloading(false);
            setdata(JSON.parse(sessionStorage.getItem(id)));
            
        }
        else
        {
            getdata();
        }

        return () => {
            
        }
    }, [])
    
    
    return {loading,data}
}

export default usePlaySong;
