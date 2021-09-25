import React,{useState} from 'react'
import Menubar from './Menubar'
import styled from 'styled-components';
import useSearch from '../hooks/useSearch';
import { Text } from '../styles/Styles';
import List from './List';
import Loading from './Loading';



function Search() {
    const [query, setquery] = useState(sessionStorage.getItem('query') || '');
    
    
    function handlechange(e){
       
        setquery(e.target.value);
        sessionStorage.setItem('query',e.target.value);
    }
   
   

    
    const {loading,data}=useSearch(query);
    

    return (
        <>
        <BarWrapper>
             <SearchBar type="text" value={query} placeholder="Music, Artists, and Podcasts" onChange={handlechange}/>
            </BarWrapper>
        <Wrapper>
            
            
            
            {loading?<Loading/>:''}

            {
            data?
            <ListWrapper>
            
            {data.topquery.data.length>0 && <List data={data.topquery.data} title="Top Results" />}
            {data.playlists.data.length>0 && <List data={data.playlists.data} title="PlayLists" />}
            
            {data.songs.data.length>0 && <List data={data.songs.data} title="Songs" />}
            {data.albums.data.length>0 && <List data={data.albums.data} title="Albums" />}
            
            

            </ListWrapper>
            :''
        
           }
            
            
        </Wrapper>
        <Menubar />
        </>
    )
}

export default Search



const Wrapper=styled.div`

padding-left:20px;

`
const BarWrapper=styled.div`
display:flex;
justify-content:center;
align-items:center;
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
margin-left:10px;
margin-right:10px;
width:100%;
border-radius:10px;
padding:7px;
outline:none;
border:none;
font-family:Poppins;
font-size:1.2em;
`

