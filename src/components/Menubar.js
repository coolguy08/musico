import React, { useEffect} from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Playnext, togglePlay } from '../utils/controls';
import {Text} from '../styles/Styles';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import {setTab} from '../redux/actions/Tab';


function Menubar(){

    const tab=useSelector((state)=>state.tab.activetab);
    const dispatch = useDispatch();
    
    const cursong=useSelector((state)=>state.song.cursong);

    const loading=useSelector((state)=>state.song.loading);

    
    const audio=document.getElementById('player')


    function setactivetab(tab){
        
        dispatch(setTab(tab));
    }


    useEffect(() => {

       const pathname=window.location.pathname;

       switch(pathname){
           case '/home':setactivetab(1);break;
           case '/search':setactivetab(2);break;
           case '/browse':setactivetab(3);break;
           case '/mylibrary':setactivetab(4);break;
          
       }


        
        const onsongended=()=>{
            Playnext(dispatch);
        }
        audio.addEventListener("ended",onsongended);
        
        return () => {
            audio.removeEventListener("ended",onsongended); 
        }



    }, [])


   

   
    const history=useHistory();


    
    
    return (
        <Wrapper>

        {cursong  && <NowPlaying song={cursong} history={history} loading={loading}/>}
        
        <MenuWrapper>
            <a onClick={()=>{history.push('/home');setactivetab(1)}}>
            <MenuItem active={tab===1?true:false}>
               <Icon><i class="fa fa-home"></i></Icon>
               <Text family="Poppins">Home</Text>
            </MenuItem>

            </a>
            <a onClick={()=>{history.push('/search');setactivetab(2)}}>
            <MenuItem active={tab===2?true:false}>
               <Icon><i class="fa fa-search"></i></Icon>
               <Text family="Poppins">Search</Text>
            </MenuItem>
            </a>
            
            <a onClick={()=>{history.push('/browse');setactivetab(3)}}>
            <MenuItem active={tab===3?true:false}>
               <Icon><i class="fa fa-compass"></i></Icon>
               <Text family="Poppins">Browse</Text>
            </MenuItem>
            </a>

            <a onClick={()=>{history.push('/mylibrary');setactivetab(4)}}>
            <MenuItem active={tab===4?true:false}>
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
   
    
      return <SmallPlayer onClick={()=>history.push('/player')}>
            <Image src={song.image} width="50px" height="50px" />
            <TextWrapper >
            <Text color="white" family="Poppins" size="0.9em" width="200px">{song.title}</Text>
            <Text color="gray" family="Poppins" size="0.7em" width="220px"><marquee>{song.description || song.subtitle}</marquee></Text>
            </TextWrapper>
             {
                 loading?
                 <Loader width="20px" height="20px"/>:
                 <PlayerIcon onClick={(e)=>{togglePlay();e.stopPropagation()}}><i class={audio.paused?"fa fa-play":"fa fa-pause"} id="toggleplay"></i></PlayerIcon>

             }
          </SmallPlayer>
}



export default Menubar;

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
cursor:pointer;
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