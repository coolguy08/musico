import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { togglePlay } from './controls';
import {Text} from './Styles';
function Menubar(){
    const [song, setsong] = useState(JSON.parse(localStorage.getItem('current')));


    useEffect(() => {
        const evnt=document.addEventListener("songchanged",()=>{

            setsong(JSON.parse(localStorage.getItem('current')));
        })
        
        return () => {
            
        }
    }, [])

    const pathname=window.location.pathname;
    const history=useHistory();
    return (
        <Wrapper>

        {song && <NowPlaying song={song} history={history}/>}
        
        <MenuWrapper>
            <a onClick={()=>history.push('/home')}>
            <MenuItem active={pathname=='/home'?true:false}>
               <Icon><i class="fa fa-home"></i></Icon>
               <Text family="Poppins">Home</Text>
            </MenuItem>

            </a>
            <a onClick={()=>history.push('/search')}>
            <MenuItem active={pathname=='/search'?true:false}>
               <Icon><i class="fa fa-search"></i></Icon>
               <Text family="Poppins">Search</Text>
            </MenuItem>
            </a>
            
            <a onClick={()=>history.push('/browse')}>
            <MenuItem active={pathname=='/browse'?true:false}>
               <Icon><i class="fa fa-compass"></i></Icon>
               <Text family="Poppins">Browse</Text>
            </MenuItem>
            </a>

            <a onClick={()=>history.push('/mylibrary')}>
            <MenuItem active={pathname=='/mylibrary'?true:false}>
                <Icon><i class="fa fa-user"></i></Icon>
               <Text family="Poppins">My Library</Text>
            </MenuItem>
            </a>
        </MenuWrapper>
        </Wrapper>
    )
}


function NowPlaying({song,history}){
      return <SmallPlayer>
            <Image src={song.image} width="50px" height="50px" onClick={()=>history.push('/player')}/>
            <TextWrapper onClick={()=>history.push('/player')}>
            <Text color="white" family="Poppins" size="0.9em" width="200px">{song.title}</Text>
            <Text color="gray" family="Poppins" size="0.7em" width="220px">{song.description}</Text>
            </TextWrapper>
          
            <PlayerIcon onClick={()=>togglePlay()}><i class="fa fa-play" id="toggleplay"></i></PlayerIcon>
          </SmallPlayer>
}


function MenuItem({children,active})
{

    return (
        <MenuItemWrapper active={active}>{children}</MenuItemWrapper>
    )
}

export default Menubar

const PlayerIcon=styled.a`
color:white;
font-size:1.2em;
padding:15px;
`
const Image=styled.img`
padding:3px;
border-radius:5px;
`

const SmallPlayer=styled.div`
background:#2a2d36;
border-top:0.25px solid gray;
display:flex;
justify-content:space-between;

`
const Wrapper=styled.div`
display:flex;
flex-direction:column;
position:fixed;
bottom:0px;
width:100vw;

`

const TextWrapper=styled.a`
padding:5px;
display:flex;
flex-direction:column;

`

const MenuWrapper=styled.div`

background:#2a2d36;
border-top:0.25px solid gray;
display:flex;
justify-content:space-around;

`
const Icon=styled.div`
font-size:25px;
color:inherit;
padding:0px;
margin:0px;

`
const MenuItemWrapper=styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:3px;
padding-top:8px;
color:${props=>props.active?'white':'gray'};

`