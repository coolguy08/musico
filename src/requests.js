const url="https://muskan-api.herokuapp.com/api/v1/";


const get=async(url)=>{
    const res={};
    res.data=[];
    try {
        const d=await fetch(url);
        res.data=await d.json();
    } catch (error) {
        console.log(error);
        res.error=error.message;
    }

    return res;
}

const GetLaunchData=async()=>{

     const res=await get(url+'getlaunchdata');
     return res.data;

}

const GetSearch=async(query)=>{
    const res=await get(url+'search?query='+query);
    return res.data;
}

const GetSongURL=async(id)=>{
    const res=await get(url+'getsongurl?id='+id);
    return res.data;
}

export{
    GetLaunchData,
    GetSearch,
    GetSongURL
}