import { useEffect, useState } from "react";
import {GetLaunchData} from '../requests';


let cache=[];

function useGetLaunchData() {
    const [loading, setloading] = useState(true);
    const [data, setdata] = useState([]);

    useEffect(() => {
        
        async function getdata(){
            const d=await GetLaunchData();
            
            if(d.data!=undefined){
                sessionStorage.setItem('launchdata',JSON.stringify(d.data));
                cache=d.data;
                setdata(d.data);
                setloading(false);
            }
            else{
                alert("No Internet");
            }
            
            
        }

        const d=JSON.parse(sessionStorage.getItem('launchdata'));
   //console.log(d);
        if(d!=undefined && d.greeting)
        {
            
            
            setdata(d);
            setloading(false);
            
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
