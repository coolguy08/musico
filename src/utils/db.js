//window.indexedDB=window.indexedDB || window.mozIndexedDB || window.WebKitIndexedDB || window.msIndexedDB;

import { AddSong, fetchPlaylist, RemoveSong } from "../requests";

let request=window.indexedDB.open("Playlist",2);

let db,tx,store,index;




request.onupgradeneeded=function(e) {
    db=request.result;
    store=db.createObjectStore("Playlist",{keyPath:"id"});
    
}

request.onsuccess=function(e){

    db=request.result;
    console.log("PlayList Created");

    tx=db.transaction("Playlist","readwrite");
    store=tx.objectStore("Playlist");

    
    db.onerror=function(err) {
        console.log(err);
    }
}

request.onerror=function(e){

    console.log("error",e);
}

            
      



const addToPlaylist=(song,fromserver)=>{

    const loginStatus=localStorage.user!=undefined?true:false;
    const guid= loginStatus?(JSON.parse(localStorage.user)).googleId:null;

    if(loginStatus && fromserver==undefined){
        let r=AddSong({guid:guid,songid:song.id});
    }
  
    song.type="song";
    db=request.result;
    tx=db.transaction("Playlist","readwrite");
    store=tx.objectStore("Playlist");
    store.put(song);

}

const removeFromPlaylist=(id)=>{
    const loginStatus=localStorage.user!=undefined?true:false;
    const guid= loginStatus?(JSON.parse(localStorage.user)).googleId:null;

    if(loginStatus){
       let r=RemoveSong({guid:guid,songid:id});
    }

    db=request.result;
    tx=db.transaction("Playlist","readwrite");
    store=tx.objectStore("Playlist");
    return new Promise(
        function (resolve,reject){
            const data=store.delete(id);
            data.onsuccess=function(e){
                if(e.target.result!=undefined){
                    
                    resolve(true);
                }
                resolve(false);
            }
            
        }
    ); 
}

let initialload=true;

const getPlaylist=()=>{
    
    return new Promise(
        async function (resolve,reject){

            if(initialload){
                await new Promise(resolve=>setTimeout(resolve,1000));
                console.log("initial load");
                initialload=false;
            }

            db=request.result;
            tx=db.transaction("Playlist","readwrite");
            store=tx.objectStore("Playlist");

            const data=store.getAll();
            data.onsuccess=function(e) {
                if(e.target.result!=undefined){
                   
                    resolve(e.target.result);
                }
                resolve(false);
            }
            
        }
    ); 
}



const search_song=async(query)=>{
    
    let song=query.toLowerCase(); // song to search
    

    return new Promise(

     async function (resolve,reject){
 
       const data=await getPlaylist();

       if(song===" " || song===""){
          resolve(data);
       }
       
       let res=[];
       for(let i=0;i<data.length;i++){
           let obj=data[i];
           let songname=obj.title.toLowerCase();
           songname+=" "+obj.description.toLowerCase();// so that search by singer is possible
           if(songname.indexOf(song)>=0){
               res.push(obj);
           }
       }

       resolve(res);



     }


    )
}


const clearPlayList=async()=>{

    return new Promise(
        
        async function (resolve,reject){
        
        if(initialload){
            await new Promise(resolve=>setTimeout(resolve,1000));
            console.log("initial load");
            initialload=false;
        }
         
        db=request.result;
        tx=db.transaction("Playlist","readwrite");
        store=tx.objectStore("Playlist");

        const data=store.clear();
        data.onsuccess=function(e){
            
            if(e.target.result!=undefined){
                   resolve(true);
            }
            resolve(false);
        }

        data.onerror=function(e){
            reject(e);
        }
        

        
    }
); 
}


const getUserPlayList=async(data)=>{
   // clear previous playlist;
   await clearPlayList();
   const res=await fetchPlaylist(data);

   res.data.map((song)=>{ // add song to db
       addToPlaylist(song,true);
   })
}





const checkInPlaylist=async(id)=>{
    
    return new Promise(
        
        async function (resolve,reject){
        
        if(initialload){
            await new Promise(resolve=>setTimeout(resolve,1000));
            console.log("initial load");
            initialload=false;
        }
         
        db=request.result;
        tx=db.transaction("Playlist","readwrite");
        store=tx.objectStore("Playlist");

        const data=store.get(id);
        data.onsuccess=function(e){
            if(e.target.result!=undefined){
                
                resolve(true);
            }
            resolve(false);
        }

        data.onerror=function(e){
            reject(e);
        }
        // request.onsuccess=function(e){
           
            
         
        
        // }


        
        
    }
); 
   
    
}


export{
    removeFromPlaylist,
    addToPlaylist,
    checkInPlaylist,
    getPlaylist,
    search_song,
    getUserPlayList
}

