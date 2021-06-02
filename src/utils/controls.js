import { GetSongs, GetSongURL } from "../requests";

const audio=document.getElementById('player');

let songs=[
  
  ];

let index=-1;

let song_status,seeker;

function initialize(){
    song_status=document.getElementById('toggleplay');
    seeker=document.getElementById('seeker');
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


if ('mediaSession' in window.navigator){
   
  
    window.navigator.mediaSession.setActionHandler('play', function() { togglePlay();});
    window.navigator.mediaSession.setActionHandler('pause', function() { togglePlay();});
   
    window.navigator.mediaSession.setActionHandler('previoustrack', function() { Playprev(()=>{}); });
    window.navigator.mediaSession.setActionHandler('nexttrack', function() { Playnext(()=>{});});
    
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



async function PlaySong(data,setloading){
     
    setloading(true);
     const cur_song={
      id:data.id,
      title:data.title,
      description:data.description || data.subtitle,
      image:data.image.replace('150x150','500x500').replace('50x50','500x500'),
      url:data.url
     }
     

  localStorage.setItem('current',JSON.stringify(cur_song));
  
  

  const d=await GetSongURL(data.id);
  let song=JSON.parse(localStorage.getItem('current'));
  song.url=d.url;
  localStorage.setItem('current',JSON.stringify(song));
  audio.src=d.url;
  audio.play();
  setloading(false);

  if(index>=songs.length-1){

    let d= await GetSongs();
    songs=d.data;
    index=-1;
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

async function Playnext(setloading){
    
    if(index+1>=songs.length){
        setloading(false);
        return;
    }
    else{
      index++;
      await PlaySong(songs[index],setloading);
    }
    
}

async function Playprev(setloading){
    if(index<=0){
        setloading(false);
        return;

    }
    index--;
    await PlaySong(songs[index],setloading);
}




async function PlayAlbum(data,setloading){

  songs=data;
  index=-1
  await Playnext(setloading);
   
}




export{
    togglePlay,
    PlaySong,
    Playnext,
    Playprev,
    PlayAlbum

}