import React from 'react'
import {Text, Wrapper,SliderWrapper,Section,Flexbox} from '../styles/Home';
import Menubar from './Menubar';
import useGetLaunchData from '../hooks/useGetLaunchData';
import Loading from './Loading';
import '../utils/db';
import Header from './Header';
import { useState } from 'react';
import Cards from './Cards';

function Home() {
    const [issongloading, setissongloading] = useState(false)
   
    const {loading,data}=useGetLaunchData();

    if(loading || !data){
        return <><Header title="Musico"/><Loading/><Menubar/></>
    }

    return (
        <>
        <Header title="Musico"/>
        <Wrapper>
         <Text color="white" family="Poppins" size="1.0em" padding="20px">{data.greeting}</Text>
         
         {/*Trending now Section */}
         <Section>
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 0 20px">Trending Now</Text>
            <Text color="gray" family="Poppins" size="0.8em"  padding="0 0 10px 20px">TRENDING THIS WEEK</Text>
            <SliderWrapper>
                <Flexbox>
                    <Cards data={data.new_trending}/>
                </Flexbox>
            </SliderWrapper>
         </Section>


         {/*Playlists*/}
         <Section>
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 0 20px">Playlists For You</Text>
            <Text color="gray" family="Poppins" size="0.8em"  padding="0 0 10px 20px">TOP PLAYLISTS</Text>
            <SliderWrapper>
                <Flexbox>

                    <Cards data={data.top_playlists}/>
                </Flexbox>
            </SliderWrapper>
         </Section>

         {/*Artists*/}
         { data.artist_recos &&
             <Section>
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 20px 20px">Search By Artists</Text>
            <SliderWrapper>
                <Flexbox >
                   <Cards data={data.artist_recos} cardtype="circle" setloading={setissongloading}/>

                </Flexbox>
            </SliderWrapper>
         </Section>
         }

         {/*Radio Stations*/}
         <Section>
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 20px 20px">Radio Stations</Text>
            <SliderWrapper>
                <Flexbox  width={`${(data.radio.length/2)*110}px`} wrap="wrap">
                    <Cards data={data.radio} cardtype="circle" setloading={setissongloading}/>
                     
                </Flexbox>
            </SliderWrapper>
         </Section>

         {/*new albums*/}
         <Section>
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 20px 20px">New Releases</Text>
            <SliderWrapper>
                <Flexbox >
                    <Cards data={data.new_albums} cardtype="simple"/>
                </Flexbox>
            </SliderWrapper>
         </Section>

        

         

         {/*charts*/}
         <Section>
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 20px 20px">Charts</Text>
            <SliderWrapper >
                <Flexbox >
                    <Cards data={data.charts} cardtype="rectangle" datatype="charts"/>
                </Flexbox>
           
            </SliderWrapper>
            
         </Section>

         {/*discovers*/}
         <Section>
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 20px 20px">Explore</Text>
            <SliderWrapper >
                <Flexbox width={`${(data.browse_discover.length/2)*165}px`} wrap="wrap">
                    <Cards data={data.browse_discover} cardtype="rectangle"/>
                </Flexbox>
           
            </SliderWrapper>
            
         </Section>
            
      </Wrapper>
      <Menubar miniplayerloading={issongloading}/>
      </>
     )
}

export default Home;

