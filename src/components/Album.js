import React,{useState}from 'react'
import styled from 'styled-components';
import List from './List';
import Cards from './Cards';
import {SliderWrapper} from '../styles/Home';
import Menubar from './Menubar';
import useGetDetails from '../hooks/useGetDetails';
import Loading from './Loading';
import { PlayAlbum, PlaySong } from '../utils/controls';
import { imageQuality, share } from '../utils/common';
import Back from './Back';
import Error404 from './Error404';
import { useDispatch } from 'react-redux';



function Album(props){
           
      
      const dispatch=useDispatch();
      const {loading,data}=useGetDetails(props.id,props.type,50);

      
     
    
    if(loading){
        return <><Loading/><Menubar/></>
    }

    if(loading===false && !data.list){
      return <Error404/>
    }

    return (
      <>
        <Wrapper>
          <Back/>
          <ImageWrapper padding="30px 0 0 0">
             <Image src={imageQuality(data.image)}/>
          </ImageWrapper>

          <IconWrapper>
            <Icon background="#2a2d36" width="50px" height="50px" color="white" BorderRadius="50%"> <i class="fa fa-heart"></i></Icon>
            <Icon background="green" width="50px" height="50px" color="white" BorderRadius="50%" onClick={()=>PlayAlbum(data.list,dispatch)}><i class="fa fa-play"></i></Icon>
          </IconWrapper>

          <Text color="white" family="Poppins" size="1.2em" padding="10px 0 0 20px">{data.title}</Text>
          <Text color="gray" family="Poppins" size="0.9em" padding="5px 0 0 20px">{data.header_desc}</Text>
          
          {/* section for download and share and plays */}
          <Flexbox>
          <Icon background="#2a2d36" size="13px" width="25px" height="25px" color="white" BorderRadius="50%"><i class="fa fa-arrow-down"></i></Icon>
          <Icon background="#2a2d36" size="13px" width="25px" height="25px" color="white" BorderRadius="50%" onClick={()=>share({title:"Musico",url:window.location.href,text:data.title})}><i class="fa fa-share-alt"></i></Icon>
          <Text color="gray" family="Poppins" size="0.8em">{parseInt(data.list[0].play_count).toLocaleString('en-US')} Plays</Text>
          </Flexbox>
          
          <ListWrapper>
              <List data={data.list} />
          </ListWrapper>
           
           
         {/*you might like Section*/}
         {/*
          <Section>
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 0 20px">You Might Like</Text>
            <SliderWrapper>
                <Flexbox>
                    <Cards data={data.new_trending} width="150px" height="150px"/>
                </Flexbox>
            </SliderWrapper>
         </Section> 
         */}



         {/* Bottom fotter */}
         <Footer>
           <Text color="gray" family="Poppins" size="0.8em">{data.list_count} Songs</Text>
           <Text color="gray" family="Poppins" size="0.8em">{data.more_info.copyright_text}</Text>
         </Footer>

        </Wrapper>
        <Menubar />
        </>
    )
}

export default Album


const Wrapper=styled.div`

width:100vw;
padding-bottom:150px;


`
const Section=styled.div`
padding-bottom:30px
`
const ListWrapper=styled.div`
padding-left:20px;

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
background:linear-gradient(to bottom, #d6d3d3, #2a2d36);

`

const Image=styled.img`
width:200px;
height:200px;
border-radius:10px;
box-shadow:0px 0px 50px  black;
`

const IconWrapper=styled.div`
display:flex;
justify-content:center;
padding-top:20px;
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

const Footer=styled.div`
display:flex;
flex-direction:column;
align-items:center;

`