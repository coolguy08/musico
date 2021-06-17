import { useEffect, useState } from "react";
import {GetDetails} from '../requests';



function useGetDetails(id,type,n) {
    const [loading, setloading] = useState(true);
    const [data, setdata] = useState([]);

   

    useEffect(() => {
        
        async function getdata(){
            const d=await GetDetails(id,type,n);
            sessionStorage.setItem(id,JSON.stringify(d.data));
            
           
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

export default useGetDetails;
