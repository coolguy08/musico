import { setSong, setsongloading } from "../redux/actions/song";
import { GetSongs, GetSongURL } from "../requests";
import { getid } from "./common";

const audio=document.getElementById('player');

let songs=[
  
  ];

let index=-1;

let song_status;

function initialize(){
    song_status=document.getElementById('toggleplay');
   
}



audio.onpause=()=>{
    initialize();
    // songimg.style="animation-play-state:paused"
    if(song_status){
      song_status.className='fa fa-play';
    }
    
}

audio.ontimeupdate=()=>{
    initialize();
    localStorage.setItem('currentTime',audio.currentTime);
    
}

audio.onplay=()=>{
    //when song start playing add the meta data
    initialize();
    MediaSessionApi();
    if(song_status){
      song_status.className='fa fa-pause';
    }
    
    
  
    
}


function MediaSessionApi(){
    const song=JSON.parse(localStorage.getItem('current'));
    navigator.mediaSession.metadata = new window.MediaMetadata({
        title:song.title,
        artist: song.description,
        //album: 'The Ultimate Collection (Remastered)',
        artwork: [
         
          { src: song.image, sizes: '512x512', type: 'image/png' },
        ]
    });
}



async function PlaySong(data,dispatch){
     
    audio.pause();

    
    dispatch(setsongloading(true));
   
  
   // setloading(true);
     const cur_song={
      id:data.id,
      title:data.title,
      description:data.description || data.subtitle,
      image:data.image.replace('150x150','250x250').replace('50x50','250x250'),
      share_url:data.share_url || window.location.origin+`/view/song/${getid(data.perma_url || data.url)}`
     }

     
     dispatch(setSong(cur_song));

  localStorage.setItem('current',JSON.stringify(cur_song));
  
  

  const d=await GetSongURL(data.id);
  audio.src=d.url;
  
  let song=JSON.parse(localStorage.getItem('current'));
  song.url=d.url;
  audio.play();
  localStorage.setItem('current',JSON.stringify(song));


  //setloading(false);
  dispatch(setsongloading(false));

 
 


  if(index>=songs.length-1){ // add songs in queue if no songs are remaining
    
    let d;
    if(!data.more_info){
      return;
    }
    if(data.more_info.artistMap){
      let random_artists=data.more_info.artistMap.primary_artists;//get artists array
      let random_index=Math.floor(Math.random()*random_artists.length);
      let artist_id=getid(random_artists[random_index].perma_url);
       d=await GetSongs('','',artist_id,'artist');
    }
    else
    {

      d=await GetSongs(data.more_info.primary_artists,'artist','','radio');
    }
    
    

    if(d.data[0]){
      songs=d.data;
      index=-1;
    }
    
  }
    

}

function togglePlay(){
    if(audio.paused)
    {
        audio.play();
    }
    else{
        audio.pause();
    }
}

function addtonext(data){

  if(songs.length==0){
    songs.push(data);
    alert('song added');
    return;
  }
  songs.splice(index+1,0,data);
  alert('song added');
  console.log("song added to next");

}

async function Playnext(dispatch){
    
    if(index+1>=songs.length){
        dispatch(setsongloading(false));
        return;
    }
    else
    {
      index++;
      await PlaySong(songs[index],dispatch);
    }
    
}

async function Playprev(dispatch){
    if(index<=0){
        dispatch(setsongloading(false));
        return;

    }
    index--;
    await PlaySong(songs[index],dispatch);
}




async function PlayAlbum(data,dispatch){

  songs=data;
  index=-1
  await Playnext(dispatch);
   
}

async function PlayRadio(radio_name,radiotype,dispatch){
  
  dispatch(setsongloading(true));
  //setloading(true);
  const d=await GetSongs(radio_name,radiotype,'','radio');
  if(d.data[0]!=null){
    songs=d.data;
    index=-1;
  }
  
  await Playnext(dispatch);

}

function updateAlbum(data,idx){ //this function set index of thesong that is pressed
  songs=data;
  index=idx;//current song that is pressed
}




export{
    togglePlay,
    PlaySong,
    Playnext,
    Playprev,
    PlayAlbum,
    updateAlbum,
    addtonext,
    PlayRadio

}