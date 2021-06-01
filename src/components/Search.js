import React,{useState} from 'react'
import Menubar from './Menubar'
import styled from 'styled-components';
import useSearch from '../hooks/useSearch';
import { Text } from './Styles';
import List from './List';
import Loading from './Loading';
import { PlaySong } from '../utils/controls';
import { useHistory } from 'react-router-dom';

function getid(perma_url){
    return perma_url.split('/').pop();
}

function Search() {
    const [query, setquery] = useState(sessionStorage.getItem('query') || '');
    const [issongloading, setissongloading] = useState(false)
    
    function handlechange(e){
       
        setquery(e.target.value);
        sessionStorage.setItem('query',e.target.value);
    }
   
   const history=useHistory();
    async function onListItemPress(data){
       if(data.type=="song"){
        await PlaySong(data,setissongloading);
       }else if(data.type=="album" || data.type=="playlist"){
           
           history.push(`/view/${data.type}/${getid(data.url)}`)
       }else if(data.type=="artist"){
           
           history.push(`/artist/${getid(data.url)}`)
       }


       
        
        
    }

    
    const {loading,data}=useSearch(query);
    

    return (
        <>
        <Wrapper>
            
            <BarWrapper>
             <SearchBar type="text" value={query} placeholder="Music, Artists, and Podcasts" onChange={handlechange}/>
            </BarWrapper>
            
            {loading?<Loading/>:''}

            {
            data?
            <ListWrapper>
            
            {data.topquery.data.length>0 && <List data={data.topquery.data} title="Top Results" handleClick={onListItemPress}/>}
            {data.songs.data.length>0 && <List data={data.songs.data} title="Songs" handleClick={onListItemPress}/>}
            {data.albums.data.length>0 && <List data={data.albums.data} title="Albums" handleClick={onListItemPress}/>}
            {data.playlists.data.length>0 && <List data={data.playlists.data} title="PlayLists" handleClick={onListItemPress}/>}
            
            

            </ListWrapper>
            :''
        
           }
            
            
        </Wrapper>
        <Menubar miniplayerloading={issongloading}/>
        </>
    )
}

export default Search



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
padding-top:55px;
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

