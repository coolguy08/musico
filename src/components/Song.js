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

function imageQuality(url){
  return url.replace('150x150','500x500').replace('50x50','500x500')
 }

 function getid(perma_url){
  return perma_url.split('/').pop();
}

function Song(props) {


  const {loading,data}=useGetDetails(props.id,props.type);
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

  if(loading===false && !data.songs){
    console.log(data);
    return <Error404/>
  }

    return (
      <>
        <Wrapper>
          <Back/>
          <ImageWrapper padding="30px 0 30px 0">
             <Image src={imageQuality(data.songs[0].image)} width="200px" height="200px" borderradius="10px"/>
          </ImageWrapper>

          <IconWrapper>
            <Icon background="#2a2d36" width="50px" height="50px" color="white" BorderRadius="50%"> <i class="fa fa-heart"></i></Icon>
            <Icon background="green" width="50px" height="50px" color="white" BorderRadius="50%" onClick={()=>onListItemPress(data.songs[0])}><i class="fa fa-play"></i></Icon>
          </IconWrapper>

          <Text color="white" family="Poppins" size="1.2em" padding="10px 0 0 20px">{data.songs[0].title}</Text>
          <Text color="gray" family="Poppins" size="0.9em" padding="5px 0 0 20px">{data.songs[0].header_desc}</Text>
          
          {/* section for download and share and plays */}
          <Flexbox>
          <Icon background="#2a2d36" size="13px" width="25px" height="25px" color="white" BorderRadius="50%"><i class="fa fa-arrow-down"></i></Icon>
          <Icon background="#2a2d36" size="13px" width="25px" height="25px" color="white" BorderRadius="50%" onClick={()=>share({title:"Musico",url:window.location.href,text:"Listen To "+data.songs[0].title})}><i class="fa fa-share-alt"></i></Icon>
          <Text color="gray" family="Poppins" size="0.8em">{parseInt(data.songs[0].play_count).toLocaleString('en-US')} Plays</Text>
          </Flexbox>
          
          <ListWrapper>
              <List data={data.songs} />
          </ListWrapper>
           
           {/*you might like Section*/}
         {/* <Section>
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 0 20px">You Might Like</Text>
            <SliderWrapper>
                <Flexbox>
                    <Cards data={data.new_trending} width="150px" height="150px"/>
                </Flexbox>
            </SliderWrapper>
         </Section> */}

         <Section>
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 0 20px">Artists</Text>
            <div>
            {
                data.songs[0].more_info.artistMap.primary_artists.map((artist,index)=>{
                  if(index>4){
                    return <></>;
                  }
                   return <ArtistMap key={index} onClick={()=>history.push(`/artist/${getid(artist.perma_url)}`)}>
                        <Image src={artist.image}
                        height="50px" width="50px" borderradius="50px"
                        />
                        <SingerInfo>
                            <Text color="white" family="Poppins" size="0.8em">{artist.name} </Text>
                            <Text color="white" family="Poppins" size="0.8em">{artist.role} </Text>
                        </SingerInfo>
    
                    </ArtistMap>
                })
            }
            </div>
           
              

         </Section>



         {/* Bottom footer */}
         <Footer>
           <Text color="gray" family="Poppins" size="0.8em">{new Date(data.songs[0].more_info.duration).toISOString().substr(14, 5)}</Text>
           <Text color="gray" family="Poppins" size="0.8em">{data.songs[0].more_info.copyright_text}</Text>
         </Footer>

        </Wrapper>
        <Menubar />
        </>
    )
}

export default Song


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