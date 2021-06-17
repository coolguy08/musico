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
    const res=await get(url+`getsongurl?id=${id}&bitrate=${sessionStorage.quality}`);
    return res.data;
}

const GetDetails=async(id,type,n)=>{
    const res=await get(url+`getdetails?id=${id}&type=${type}&n=${n}`);
    return res.data;
}

const GetSongs=async(radio,radiotype,artistid,type)=>{
    const res=await get(url+`getsongs?type=${type}&name=${radio}&artist_id=${artistid}&radio_type=${radiotype}`);
    return res.data;
}

const GetLyrics=async(id)=>{
    
    const res=await get(url+`getlyrics?id=${id}`);
    return res.data;


}

export{
    GetLaunchData,
    GetSearch,
    GetSongURL,
    GetDetails,
    GetSongs,
    GetLyrics
}