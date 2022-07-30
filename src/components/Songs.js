import React,{useEffect, useState}from 'react'

import styled from 'styled-components';
import Cards from './Cards';
import {SliderWrapper} from '../styles/Home';
import Menubar from './Menubar';
import useGetDetails from '../hooks/useGetDetails';
import Loading from './Loading';
import List from './List';
import { PlaySong, updateAlbum } from '../utils/controls';
import { useHistory } from 'react-router';
import Back from './Back';
import { share } from '../utils/common';
import Error404 from './Error404';
import { useDispatch } from 'react-redux';
import { GetMoreSongs } from '../requests';
import InfiniteScrollList from './InfiniteScrollList';

function imageQuality(url){
  return url.replace('150x150','500x500').replace('50x50','500x500')
 }

 function getid(perma_url){
  return perma_url.split('/').pop();
}



function Songs(props) {


    const [page,setpage]=useState(1);
    const [query,setquery]=useState(props.match.params.query);
    const [songs,setsongs]=useState([]);
    const [loading,setloading]=useState(true);

   const getsongs=async()=>{
         const res=await GetMoreSongs(query,page);
         setsongs(res.data)
   }
    useEffect(async()=>{
           await getsongs();
           setloading(false);
    },[])



  
  const history=useHistory();

  const dispatch=useDispatch();
  
    const onListItemPress=async(val)=>{
        PlaySong(val,dispatch);
        if(val.type==="song"){  //checking if the clicked item is song or not to update playlist
          updateAlbum([val],0);
        }
     }
  
  if(loading){
    return <><Loading/><Menubar/></>
  }

  if(loading===false && !songs){
    console.log(songs);
    return <Error404/>
  }

    return (
      <>
        <Wrapper>
          <Back/>
         

          <ListWrapper>
              <InfiniteScrollList data={songs} query={query}/>
          </ListWrapper>
           
         
         {/* Bottom footer */}

         <Footer>
           <Text color="gray" family="Poppins" size="0.8em">{new Date(songs[0].more_info.duration).toISOString().substr(14, 5)}</Text>
           <Text color="gray" family="Poppins" size="0.8em">{songs[0].more_info.copyright_text}</Text>
         </Footer>

        </Wrapper>
        <Menubar />
        </>
    )
}

export default Songs


const Wrapper=styled.div`

width:100vw;
padding-bottom:50px

`
const ListWrapper=styled.div`
padding-left:20px;

`
const Section=styled.div`
padding-bottom:25px;
padding-top:25px;
`



const Flexbox=styled.div`
display:flex;
overflow:scroll;
padding-left:20px;
padding-top:10px;
gap:10px;
flex-wrap:${props=>props.wrap && 'wrap'};
width:${props=>props.width || ''};
&::-webkit-scrollbar {
    display: none;
  };

`

const Text=styled.div`

padding:${props=>props.padding || 'opx'};
color:${props=>props.color || 'red'};
font-family:${props=>props.family || 'mono'};
font-size:${props=>props.size || "10px"};
font-weight:${props=>props.bold};

`
const ImageWrapper=styled.div`
padding:${props=>props.padding};
display:flex;
justify-content:center;
width:100vw;
background:linear-gradient(to top, #ffaa0d, #2a2d36);
clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
`

const Image=styled.img`

border-radius:${props=>props.borderradius}
`

const IconWrapper=styled.div`
display:flex;
justify-content:center;
padding-top:0px;
margin-top:-10px;
padding-left:50%;
gap:10px;

`
const Icon=styled.button`
background:${props=>props.background};
font-size:20px;
border:0.25px solid white;
width:${props=>props.width};
height:${props=>props.width};
border-radius:${props=>props.BorderRadius};
outline:none;
color:${props=>props.color};
font-size:${props=>props.size};

`

const ArtistMap=styled.a`
padding-left:20px;
display:flex;
padding-bottom:3px;
`

const SingerInfo=styled.div`
display:flex;
flex-direction:column;
padding:6px;
`

const Footer=styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-bottom:30px;
`