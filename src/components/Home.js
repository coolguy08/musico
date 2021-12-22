import React, { useEffect } from 'react'
import {Text, Wrapper,SliderWrapper,Section,Flexbox} from '../styles/Home';
import Menubar from './Menubar';
import useGetLaunchData from '../hooks/useGetLaunchData';
import Loading from './Loading';
import '../utils/db';
import Header from './Header';
import { useState } from 'react';
import Cards from './Cards';


function Home() {
    
   
    const {loading,data}=useGetLaunchData();


    useEffect(() => {

        let nodeid=sessionStorage.getItem("home");

        

        if(nodeid){

            var node = document.getElementById(nodeid);
            
            

            if(node){

                sessionStorage.removeItem("home");


                

               node.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});

           }
            
        }

        return () => {
            
        }
    }, [loading,data])

    if(loading || !data){
        return <><Header title="Musico"/><Loading/><Menubar/></>
    }

    

    return (
        <>
        <Header title="Musico"/>
        <Wrapper>
         <Text color="white" family="Poppins" size="1.0em" padding="20px">{data.greeting}</Text>
         
         {/*Trending now Section */}
         <Section id="trending">
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 0 20px">Trending Now</Text>
            <Text color="gray" family="Poppins" size="0.8em"  padding="0 0 10px 20px">TRENDING THIS WEEK</Text>
            <SliderWrapper>
                <Flexbox >
                    <Cards data={data.new_trending} nodeid="trending"/>
                </Flexbox>
            </SliderWrapper>
         </Section>


         {/*Playlists*/}
         <Section id="playlists">
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 0 20px">Playlists For You</Text>
            <Text color="gray" family="Poppins" size="0.8em"  padding="0 0 10px 20px">TOP PLAYLISTS</Text>
            <SliderWrapper>
                <Flexbox>

                    <Cards data={data.top_playlists} nodeid="playlists"/>
                </Flexbox>
            </SliderWrapper>
         </Section>

         {/*Artists*/}
         { data.artist_recos &&
             <Section id="artists">
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 20px 20px">Search By Artists</Text>
            <SliderWrapper>
                <Flexbox >
                   <Cards data={data.artist_recos} cardtype="circle" nodeid="artists"/>

                </Flexbox>
            </SliderWrapper>
         </Section>
         }

         {/*Radio Stations*/}
         <Section id="radio">
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 20px 20px">Radio Stations</Text>
            <SliderWrapper>
                <Flexbox  width={`${(data.radio.length/2)*110}px`} wrap="wrap">
                    <Cards data={data.radio} cardtype="circle" nodeid="radio"/>
                     
                </Flexbox>
            </SliderWrapper>
         </Section>

         {/*new albums*/}
         <Section id="albums">
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 20px 20px">New Releases</Text>
            <SliderWrapper>
                <Flexbox >
                    <Cards data={data.new_albums} cardtype="simple" nodeid="albums"/>
                </Flexbox>
            </SliderWrapper>
         </Section>

        

         

         {/*charts*/}
         <Section id="charts">
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 20px 20px">Charts</Text>
            <SliderWrapper >
                <Flexbox >
                    <Cards data={data.charts} cardtype="rectangle" datatype="charts" nodeid="charts"/>
                </Flexbox>
           
            </SliderWrapper>
            
         </Section>

         {/*discovers*/}
         <Section id="discover">
            <Text color="white" family="Poppins" size="1.2em" bold="600" padding="0 0 20px 20px">Explore</Text>
            <SliderWrapper >
                <Flexbox width={`${(data.browse_discover.length/2)*165}px`} wrap="wrap">
                    <Cards data={data.browse_discover} cardtype="rectangle" nodeid="discover"/>
                </Flexbox>
           
            </SliderWrapper>
            
         </Section>
            
      </Wrapper>
      <Menubar />
      </>
     )
}

export default Home;

