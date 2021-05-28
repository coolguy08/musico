import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { togglePlay } from './controls';
import { Text } from './Styles';

function Player() {
    const [song, setsong] = useState(JSON.parse(localStorage.getItem('current')))
    const [seekerpos, setseekerpos] = useState(0);
    const audio=document.getElementById('player');
    useEffect(() => {
        
        const seeker=document.getElementById('seeker');
        

        seeker.oninput=(e)=>{
            
            audio.currentTime=e.target.value;
        }

        audio.ontimeupdate=()=>{
          
            seeker.max=audio.duration;
            //seeker.value=audio.currentTime;
            setseekerpos(audio.currentTime)
          // songimg.style="animation-play-state:play";
           
          // //song_status.className='fa fa-pause fa-lg';
          // //console.log(Math.round(audio.duration-audio.currentTime));
          
          // const cur_song=JSON.parse(localStorage.getItem('song'));
          // cur_song.currenttime=audio.currentTime;
          // localStorage.setItem('song',JSON.stringify(cur_song));
      
      
      
      
      // document.getElementById('current').innerHTML=new Date(audio.currentTime*1000).toISOString().substr(14, 5)
      
      // document.getElementById('duration').innerHTML=new Date(audio.duration?audio.duration*1000:237*1000).toISOString().substr(14, 5)
      
      
      }
        return () => {
            
        }
    }, [])

    

    return (
        <Wrapper>
            

            <Text color="white" family="Poppins" size="1.2em" padding="30px 0 0 20px" bold={600}>Now Playing</Text>
           <ImageWrapper>
                   
                   <Image src={song.image} width="300px" height="300px"/>
                   
           </ImageWrapper>
            
            <Footer>
            <Text color="white" family="Poppins" size="1.2em" padding="0 0 0 20px">{song.title}</Text>
            
            <Text color="gray" family="Poppins" size="0.9em" padding="0 0 0 20px"><marquee>{song.description}</marquee></Text>
            <ProgressBarWrapper>
                <ProgressBar id="seeker" type="range" value={seekerpos} max="0"/>
            </ProgressBarWrapper>

            
            <ToolBar>
                <Icon color="white" size="1.5em"><i class="fa fa-heart"></i></Icon>
                <Icon color="white" size="1.5em"><i class="fa fa-chevron-circle-left"></i></Icon>
                <Icon color="white" size="1.8em" onClick={togglePlay}><i class={audio.paused?"fa fa-play":"fa fa-pause"} id="toggleplay"></i></Icon>
                <Icon color="white" size="1.5em"><i class="fa fa-chevron-circle-right"></i></Icon>

            </ToolBar>
            </Footer>
           
        </Wrapper>
    )
}

export default Player


const Wrapper=styled.div`

width:100vw;
`
const Footer=styled.div`
position:fixed;
bottom:0px;
width:100vw;

`
const ImageWrapper=styled.div`
display:flex;
width:100%;
justify-content:center;
align-items:center;
padding-top:10vh;
height:100%;

`
const ProgressBarWrapper=styled.div`
padding:10px;

`
const ProgressBar=styled.input`

width:100%;
height:8px;
fill:white;
appearance:none;
background-color: white;
box-shadow: none;



&::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: green;
    cursor:pointer;
  };

&::-webkit-slider-runnable-track {
    height: 10px;
    -webkit-appearance: none;
    color: green;
    margin-top: -1px;
  };
&::-ms-fill-upper {  
    background-color: green;
  };
&::-moz-range-track {  
    background-color: green;
  };

&::-moz-range-progress {
    background-color: green; 
  }


`
const Icon=styled.a`
color:${props=>props.color};
font-size:${props=>props.size};

`
const ToolBar=styled.div`
display:flex;
padding:20px;
justify-content:space-around;

`
const Image=styled.img`
border-radius:30px;
// animation:disc 8s infinite linear;
`


