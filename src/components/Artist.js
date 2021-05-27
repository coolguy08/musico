import React from 'react'
import styled  from 'styled-components';
import { SliderWrapper } from '../styles/Home';
import Cards from './Cards';
import {album,data} from './data'
import List from './List';
import { Text } from './Styles';
function Artist() {
    return (
        <Wrapper>
            
            
            <Banner img="http://sagraecdnems03.cdnsrv.jio.com/c.saavncdn.com/artists/Jubin_Nautiyal_002_20180507091834_500x500.jpg">
                <ArtistName>
                    <Text color="white" family="Poppins" size="1.3em" bold="600">Jubin Nautiyal</Text>
                </ArtistName>
            
            </Banner>

            {/* section for download and share and plays */}
          <Flexbox>
          <Icon background="#2a2d36" size="13px" width="25px" height="25px" color="white" BorderRadius="50%"><i class="fa fa-arrow-down"></i></Icon>
          <Icon background="#2a2d36" size="13px" width="25px" height="25px" color="white" BorderRadius="50%"><i class="fa fa-share-alt"></i></Icon>
          <Text color="gray" family="Poppins" size="0.8em">18,776,316 Listeners</Text>
          </Flexbox>
           
          <Text color="white" family="Poppins" size="1.2em" bold="600" padding="20px 0 0px 20px">Top Songs</Text>
          <List data={album.list} />
            
          {/*Top Albums of current singer*/}
         <Section>
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 0 20px">Top Albums</Text>
            <SliderWrapper>
                <Flexbox>
                    <Cards data={data.top_playlists} width="150px" height="150px"/>
                </Flexbox>
            </SliderWrapper>
         </Section>

         {/*Singles*/}
         <Section>
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 0 20px">Singles</Text>
            <SliderWrapper>
                <Flexbox>
                    <Cards data={data.new_trending} width="150px" height="150px"/>
                </Flexbox>
            </SliderWrapper>
         </Section>

        </Wrapper>
    )
}

export default Artist


const Wrapper=styled.div`


`
const Section=styled.div`
padding-bottom:30px
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
const ArtistName=styled.div`
position:absolute;
bottom:360px;
left:30px
`

const Banner=styled.div`
background-image:url(${props=>props.img});
background-position: center; /* Center the image */
background-repeat: no-repeat;
background-size: cover;
width:100vw;
height:300px;
box-shadow:inset 0px 0px 500px 50px;
clip-path: polygon(0 0, 100% 0, 100% 89%, 0 100%);
`