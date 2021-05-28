import React from 'react'
import Menubar from './Menubar'
import styled from 'styled-components';
import List from './List';

import { Text } from './Styles';

function MyLibrary() {
    return (
        <>
        <Wrapper>
            
            <BarWrapper>
             <SearchBar type="text"  placeholder="Search"/>
            </BarWrapper>
            
            <Text>Coming soon</Text>
            {/* <List data={album.list} image={true}/> */}
            
            
        </Wrapper>
        <Menubar/>
        </>
    )
}

export default MyLibrary



const Wrapper=styled.div`
padding-top:20px;

`



const BarWrapper=styled.div`
display:flex;
justify-content:center;

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