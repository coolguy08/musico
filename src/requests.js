// const url="https://muskan-api.herokuapp.com/api/v1/";
// const url="http://localhost:5000/api/v1/"

const url="https://muskan123.azurewebsites.net/api/v1/";


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
    const res=await get(url+`getsongurl?id=${id}&bitrate=${localStorage.quality}`);
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

const fetchPlaylist=async(data)=>{

    const res=await fetch(url+`playlist`,{
        method:'post',
        headers: {
            'Content-Type': 'application/json'
          },
        body:JSON.stringify(data)

    })

    const result=await res.json();

    return result;
}

const login=async(data)=>{
      
      
      const res=await fetch(url+`user/login`,
      {
          method:'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
      });

      const result=await res.json();

      return result;
}

const AddSong=async(data)=>{
    const res=await fetch(url+`playlist/add`,
      {
          method:'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
      });

      const result=await res.json();

      return result;
}

const RemoveSong=async(data)=>{
    const res=await fetch(url+`playlist/remove`,
      {
          method:'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
      });

      const result=await res.json();

      return result;
}

const Signout=async(data)=>{
    const res=await fetch(url+`user/logout`,
      {
          method:'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify(data)
      });

      const result=await res.json();

      return result;
}

export{
    login,
    fetchPlaylist,
    GetLaunchData,
    GetSearch,
    GetSongURL,
    GetDetails,
    GetSongs,
    GetLyrics,
    AddSong,
    Signout,
    RemoveSong,
    url
}