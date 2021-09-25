import React, { useState } from 'react'
import styled  from 'styled-components';
import useGetDetails from '../hooks/useGetDetails';
import { SliderWrapper } from '../styles/Home';
import Cards from './Cards';
import { PlaySong } from '../utils/controls';
import List from './List';
import Loading from './Loading';
import Menubar from './Menubar';
import { Text } from '../styles/Styles';
import { imageQuality, share } from '../utils/common';
import Back from './Back';
import Error404 from './Error404';
function Artist(props) {
    


  
      
const {loading,data}=useGetDetails(props.match.params.id,'artist')


if(loading){
    return <><Loading/><Menubar/></>
}

if(loading===false && !data.artistId){
    return <Error404/>
  }


    return (
        <>
        <Wrapper>
            <Back/>
            
            <Banner img={imageQuality(data.image)}>
                <ArtistName>
                    <Text color="white" family="Poppins" size="1.3em" bold="600">{data.name}</Text>
                </ArtistName>
            
            </Banner>

            {/* section for download and share and plays */}
          <Flexbox>
          <Icon background="#2a2d36" size="13px" width="25px" height="25px" color="white" BorderRadius="50%"><i class="fa fa-arrow-down"></i></Icon>
          <Icon background="#2a2d36" size="13px" width="25px" height="25px" color="white" BorderRadius="50%" onClick={()=>share({title:"Musico",url:window.location.href,text:data.name+data.subtitle})}><i class="fa fa-share-alt"></i></Icon>
          <Text color="gray" family="Poppins" size="0.9em">{data.subtitle}</Text>
          </Flexbox>
           
          {/*Latest realease*/}
          
          {
              data.latest_release.length>0 &&
              <Section paddingTop="20px">
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 0 20px">Latest Releases</Text>
            <SliderWrapper>
                <Flexbox>
                    <Cards data={data.latest_release} width="150px" height="150px"/>
                </Flexbox>
            </SliderWrapper>
         </Section>
          }
          

        { data.topSongs.length>0 && <ListWrapper>
            <List data={data.topSongs} title="Top Songs"/>
         </ListWrapper>}
          
            
         
         {/*Dedicated artist pplaylist*/}
         {
            data.dedicated_artist_playlist.length>0 && 
            <Section >
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 0 20px">Just {data.name}</Text>
            <SliderWrapper>
                <Flexbox>
                    <Cards data={data.dedicated_artist_playlist} width="150px" height="150px"/>
                </Flexbox>
            </SliderWrapper>
           </Section>
         }
         

          {/*Featured In*/}
        {   data.featured_artist_playlist.length>0 && 
            <Section>
                <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 0 20px">Featured In</Text>
                <SliderWrapper>
                    <Flexbox>
                        <Cards data={data.featured_artist_playlist} width="150px" height="150px"/>
                    </Flexbox>
                </SliderWrapper>
        </Section>
        }

          {/*Top Albums of current singer*/}
          {data.topAlbums.length>0 && <Section>
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 0 20px">Top Albums</Text>
            <SliderWrapper>
                <Flexbox>
                    <Cards data={data.topAlbums} width="150px" height="150px"/>
                </Flexbox>
            </SliderWrapper>
         </Section>}

         {/*Singles*/}
        {data.singles.length>0 && <Section>
        <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 0 20px">Singles</Text>
        <SliderWrapper>
            <Flexbox>
                <Cards data={data.singles} width="150px" height="150px"/>
            </Flexbox>
        </SliderWrapper>
        </Section>}
         
         {/* About Section */}
         {/* <Section>
             {data.bio && console.log(JSON.parse(data.bio))}

         </Section> */}

        </Wrapper>
        <Menubar />
        </>
    )
}

export default Artist


const Wrapper=styled.div`
padding-bottom:100px

`
const ListWrapper=styled.div`
padding-left:20px;
padding-bottom:20px;
`
const Section=styled.div`
padding-top:${props=>props.paddingTop||''};
padding-bottom:20px
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