import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import { Text } from '../styles/Styles';
import Header from './Header';
function Error404() {

    const history=useHistory();
    return (
        <Wrapper>
            <Header title="Musico"/>
                  
            
            <ImageWrapper>
            <center>
                <Image src="https://s.saavncdn.com/404/_i/404.hero.png" width="100%"/>
               
                <Text color="white" family="Poppins" size="2em">
                  Page Not Found
                </Text>
                <Text style={{textDecoration:'underline'}}color="white" family="Poppins" size="1.5em" onClick={()=>history.goBack()}>
                Go Back
            </Text>
                </center>
            </ImageWrapper>
 
        </Wrapper>
    )
}

export default Error404

const Wrapper=styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
justify-content:center;


`

const ImageWrapper=styled.div`
width:100vw;

`

const Image=styled.img`
max-width:500px;
max-height:600px
`