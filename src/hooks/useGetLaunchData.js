import { useEffect, useState } from "react";
import {GetLaunchData} from '../requests';

function useGetLaunchData() {
    const [loading, setloading] = useState(true);
    const [data, setdata] = useState([]);

    useEffect(() => {
        
        async function getdata(){
            const d=await GetLaunchData();
            sessionStorage.setItem('launchdata',JSON.stringify(d.data));
            setdata(d.data);
            setloading(false);
        }

        if(sessionStorage.getItem('launchdata'))
        {
            setloading(false);
            setdata(JSON.parse(sessionStorage.getItem('launchdata')));
            
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

export default useGetLaunchData
