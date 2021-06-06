import React, { useEffect, useState} from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Playnext, togglePlay } from '../utils/controls';
import {Text} from '../styles/Styles';



function setactivetab(tab){

    sessionStorage.setItem('tab',tab);
}

function getactivetab(){
return sessionStorage.getItem('tab');
}

function Menubar({miniplayerloading}){

    const [tab, settab] = useState(1);
    
    const [song, setsong] = useState(JSON.parse(localStorage.getItem('current')));
    const [loading, setloading] = useState(false);

    const pathname=window.location.pathname;
    const audio=document.getElementById('player')
    useEffect(() => {
        

        switch(pathname){
            case '/home':settab(1);setactivetab(1);break;
            case '/search':settab(2);setactivetab(2);break;
            case '/browse':settab(3);setactivetab(3);break;
            case '/mylibrary':settab(4);setactivetab(4);break;
            default:settab(getactivetab());
        }
        
        const onsongended=()=>{
            Playnext(setloading)
          }
        audio.addEventListener("ended",onsongended);
        
        return () => {
            audio.removeEventListener("ended",onsongended); 
        }



    }, [])


    useEffect(() => {
       
          setsong(JSON.parse(localStorage.getItem('current')));
          
        return () => {
        
        }

    }, [miniplayerloading,loading])

   
    const history=useHistory();


    
    
    return (
        <Wrapper>

        {song  && <NowPlaying song={song} history={history} loading={miniplayerloading || loading}/>}
        
        <MenuWrapper>
            <a onClick={()=>history.push('/home')}>
            <MenuItem active={tab==1?true:false}>
               <Icon><i class="fa fa-home"></i></Icon>
               <Text family="Poppins">Home</Text>
            </MenuItem>

            </a>
            <a onClick={()=>history.push('/search')}>
            <MenuItem active={tab==2?true:false}>
               <Icon><i class="fa fa-search"></i></Icon>
               <Text family="Poppins">Search</Text>
            </MenuItem>
            </a>
            
            <a onClick={()=>history.push('/browse')}>
            <MenuItem active={tab==3?true:false}>
               <Icon><i class="fa fa-compass"></i></Icon>
               <Text family="Poppins">Browse</Text>
            </MenuItem>
            </a>

            <a onClick={()=>history.push('/mylibrary')}>
            <MenuItem active={tab==4?true:false}>
                <Icon><i class="fa fa-user"></i></Icon>
               <Text family="Poppins">My Library</Text>
            </MenuItem>
            </a>
        </MenuWrapper>
        </Wrapper>
    )
}



function MenuItem({children,active})
{

    return (
        <MenuItemWrapper active={active}>{children}</MenuItemWrapper>
    )
}

function NowPlaying({song,history,loading}){
    const audio=document.getElementById('player');
    
      return <SmallPlayer>
            <Image src={song.image} width="50px" height="50px" onClick={()=>history.push('/player')}/>
            <TextWrapper onClick={()=>history.push('/player')}>
            <Text color="white" family="Poppins" size="0.9em" width="200px">{song.title}</Text>
            <Text color="gray" family="Poppins" size="0.7em" width="220px"><marquee>{song.description || song.subtitle}</marquee></Text>
            </TextWrapper>
             {
                 loading?
                 <div className="loader" style={{margin:"15px"}}></div>:
                 <PlayerIcon onClick={()=>togglePlay()}><i class={audio.paused?"fa fa-play":"fa fa-pause"} id="toggleplay"></i></PlayerIcon>

             }
          </SmallPlayer>
}



export default React.memo(Menubar);

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
box-shadow:0px 0px 5px inset gray;

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