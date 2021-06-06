const url="https://muskan-api.herokuapp.com/api/v1/";
// const url="http://localhost:5000/api/v1/"


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

const GetDetails=async(id,type,n)=>{
    const res=await get(url+`getdetails?id=${id}&type=${type}&n=${n}`);
    return res.data;
}

const GetSongs=async()=>{
    const res=await get(url+`getsongs`);
    return res.data;
}

export{
    GetLaunchData,
    GetSearch,
    GetSongURL,
    GetDetails,
    GetSongs
}