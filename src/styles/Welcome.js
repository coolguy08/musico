import styled from 'styled-components';

const Wrapper=styled.div`
display:flex;
align-items:center;
flex-direction:column;
width:100vw;

`

const Text=styled.div`

padding:${props=>props.padding || 'opx'};
color:${props=>props.color || 'red'};
font-family:${props=>props.family || 'mono'};
font-size:${props=>props.size || "10px"};
font-weight:${props=>props.bold};
text-align:center;
`
const ImageWrapper=styled.div`
padding:${props=>props.padding}

`

const Image=styled.img`
width:200px;
height:200px;
border-radius:50%;

`
const Button=styled.button`
background:${props=>props.background};
font-size:20px;
border:none;
width:80%;
border-radius:30px;
outline:none;

`

export{
    Wrapper,Text,Image,ImageWrapper,Button
}