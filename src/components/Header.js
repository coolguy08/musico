import React from 'react';
import styled from 'styled-components';
import { Text } from '../styles/Styles';

function Header(props) {
    return (
        <Wrapper>
            <Image src="/favicon.ico" width="35px" height="35px"/>&nbsp;&nbsp;
            <Text color="white" family="Sofia" size="2em">{props.title}</Text>

        </Wrapper>
    )
}

export default Header

const Image=styled.img`
border-radius:50%;
box-shadow:0px 0px 10px  gray;
`

const Wrapper=styled.div`

position:fixed;
top:0px;
height:60px;
//box-shadow:0px 0px 10px inset gray;
background:#2a2d36;
width:100vw;
display:flex;
align-items:center;
justify-content:center;
z-index:1;

`