//window.indexedDB=window.indexedDB || window.mozIndexedDB || window.WebKitIndexedDB || window.msIndexedDB;

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

            
      



const addToPlaylist=(song)=>{
    song.type="song";
    db=request.result;
    tx=db.transaction("Playlist","readwrite");
    store=tx.objectStore("Playlist");
    store.put(song);

}

const removeFromPlaylist=(id)=>{
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
        data.onsuccess=function(e) {
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
    getPlaylist
}

