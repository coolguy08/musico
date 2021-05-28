import styled from 'styled-components';

const Wrapper=styled.div`

padding-bottom:100px;

`
const Section=styled.div`
padding-bottom:30px
`

const SliderWrapper=styled.div`
overflow:scroll;
&::-webkit-scrollbar {
    display: none;
  };

`


const Flexbox=styled.div`
display:flex;
overflow:scroll;
padding-left:20px;
flex-wrap:${props=>props.wrap && 'wrap'};
width:${props=>props.width || ''};
&::-webkit-scrollbar {
    display: none;
  };

`

const Text=styled.div`

padding:${props=>props.padding || 'opx'};
color:${props=>props.color || 'red'};
font-family:${props=>props.family || 'mono'};
font-size:${props=>props.size || "10px"};
font-weight:${props=>props.bold};

`
const ImageWrapper=styled.div`
padding:${props=>props.padding}

`

const Image=styled.img`
width:100px;
height:100px;
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
    Wrapper,Text,Image,ImageWrapper,Button,
    SliderWrapper,Section,Flexbox
}