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

audio.ontimeupdate=()=>{
    initialize();
    if(!audio.paused)//if the song is playing
    {
      song_status.className='fa fa-pause';
    }
    
    if(seeker!=null){

      seeker.max=audio.duration;
      seeker.value=audio.currentTime;
    }
    // songimg.style="animation-play-state:play";
     
    // //song_status.className='fa fa-pause fa-lg';
    // //console.log(Math.round(audio.duration-audio.currentTime));
    
    // const cur_song=JSON.parse(localStorage.getItem('song'));
    // cur_song.currenttime=audio.currentTime;
    // localStorage.setItem('song',JSON.stringify(cur_song));




// document.getElementById('current').innerHTML=new Date(audio.currentTime*1000).toISOString().substr(14, 5)

// document.getElementById('duration').innerHTML=new Date(audio.duration?audio.duration*1000:237*1000).toISOString().substr(14, 5)


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

export{
    togglePlay
}