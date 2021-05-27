import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { togglePlay } from './controls';
import { Text } from './Styles';

function Player() {
    const [song, setsong] = useState(JSON.parse(localStorage.getItem('current')))

    useEffect(() => {
        const audio=document.getElementById('player');
        const seeker=document.getElementById('seeker');

        seeker.oninput=(e)=>{
            console.log("input changed");
            audio.currentTime=e.target.value;
        }
        return () => {
            
        }
    }, [])

    

    return (
        <Wrapper>
            

            <Text color="white" family="Poppins" size="1.2em" padding="30px 0 0 20px" bold={600}>Now Playing</Text>
           <ImageWrapper>
                   
                   <Image src={song.image} width="250px" height="250px"/>
                   
           </ImageWrapper>
            
            <Footer>
            <Text color="white" family="Poppins" size="1.2em" padding="0 0 0 20px">{song.title}</Text>
            
            <Text color="gray" family="Poppins" size="0.9em" padding="0 0 0 20px"><marquee>{song.description}</marquee></Text>
            <ProgressBarWrapper>
                <ProgressBar id="seeker" type="range" value="100" max="340"/>
            </ProgressBarWrapper>

            
            <ToolBar>
                <Icon color="white" size="1.5em"><i class="fa fa-heart"></i></Icon>
                <Icon color="white" size="1.5em"><i class="fa fa-chevron-circle-left"></i></Icon>
                <Icon color="white" size="1.8em" onClick={togglePlay}><i class="fa fa-play" id="toggleplay"></i></Icon>
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
padding-top:15vh;
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
// border-radius:50%;
// animation:disc 8s infinite linear;
`


