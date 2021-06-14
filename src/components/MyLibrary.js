import React, { useEffect, useState } from 'react'
import Menubar from './Menubar'
import styled from 'styled-components';
import List from './List';
import { Text } from '../styles/Styles';
import { getPlaylist } from '../utils/db';
import { PlaySong } from '../utils/controls';
import { useHistory } from 'react-router';

function MyLibrary(){
    const [songs, setsongs] = useState([]);
    const [issongloading, setissongloading] = useState(false);

    const history=useHistory();
      async function onListItemPress(data){
       
        await PlaySong(data,setissongloading);
        
      }
     
    useEffect(() => {
        
        async function get(){
            const d=await getPlaylist();
            setsongs(d);
        }

        get();

        return () => {
            
        }
    }, [])


    return (
        <>
        <Wrapper>
            
            <BarWrapper>
             <SearchBar type="text"  placeholder="Search"/>
             <Icon color="white" size="1.7em" background="#2a2d36" onClick={()=>history.push('/settings')}><i class="fa fa-cog"></i></Icon>
             
            </BarWrapper>
            
           
            <ListWrapper>
                {songs.length > 0?
                <List data={songs} handleClick={onListItemPress} title="Songs"></List>:
                <center><Text color="white" size="1.2em" family="Poppins" padding="50px 0 0 0">No Songs Added</Text></center>
                }
            </ListWrapper>
            
            
        </Wrapper>
        <Menubar miniplayerloading={issongloading} />
        </>
    )
}

export default MyLibrary



const Wrapper=styled.div`
padding-left:20px;

`
const BarWrapper=styled.div`
//display:flex;
//justify-content:center;
position:fixed;
background:#2a2d36;
width:100vw;
padding-top:20px;


`
const ListWrapper=styled.div`
padding-top:60px;
padding-bottom:150px;
`

const SearchBar=styled.input`
width:80vw;
border-radius:10px;
padding:7px;
outline:none;
border:none;
font-family:Poppins;
font-size:1.2em;
`
const Icon=styled.button`
background:${props=>props.background};
width:${props=>props.width};
height:${props=>props.height};
outline:none;
border:none;
color:${props=>props.color};
font-size:${props=>props.size};




`