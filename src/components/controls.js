import { GetSongURL } from "../requests";

const audio=document.getElementById('player');

let song_status,seeker;

function initialize(){
    song_status=document.getElementById('toggleplay');
    seeker=document.getElementById('seeker');
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

audio.onpause=()=>{
    initialize();
    // songimg.style="animation-play-state:paused"
    song_status.className='fa fa-play';
}

if ('mediaSession' in window.navigator){
   
  
    window.navigator.mediaSession.setActionHandler('play', function() { togglePlay();});
    window.navigator.mediaSession.setActionHandler('pause', function() { togglePlay();});
   
    // window.navigator.mediaSession.setActionHandler('previoustrack', function() { playprev(); });
    // window.navigator.mediaSession.setActionHandler('nexttrack', function() { playnext();});
    
  }



audio.onplay=()=>{
    //when song start playing add the meta data
    initialize();
    MediaSessionApi();

    song_status.className='fa fa-pause';
  
    
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
    const d=await GetSongURL(data.id);
    
    const cur_song={
        title:data.title,
        description:data.description || data.subtitle,
        image:data.image.replace('150x150','500x500').replace('50x50','500x500'),
        url:d.url
    }

    localStorage.setItem('current',JSON.stringify(cur_song));

    setloading(false);
    audio.src=d.url;
    //document.dispatchEvent(new Event("songchanged"));
    audio.play();
    console.log(d);

}

export{
    togglePlay,
    PlaySong

}