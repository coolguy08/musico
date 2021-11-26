import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components';

function Back() {
    const history=useHistory();
    return (
        <div>
            <Icon background="#2a2d36" size="15px" width="30px" height="30px" color="white" BorderRadius="50%" onClick={()=>history.goBack()}><i class="fa fa-arrow-left"></i></Icon>
            
        </div>
    )
}

export default Back


const Icon=styled.button`
background:${props=>props.background};
border:0.25px solid white;
width:${props=>props.width};
height:${props=>props.width};
border-radius:${props=>props.BorderRadius};
outline:none;
color:${props=>props.color};
font-size:${props=>props.size};
position:fixed;
left:20px;
top:20px;
z-index:1;
box-shadow:0px 0px 5px inset gray;

`