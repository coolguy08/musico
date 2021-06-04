import React, { useState } from 'react'
import styled from 'styled-components';
import { Flexbox } from '../styles/Home';
import {Text} from '../styles/Styles';
import { updateAlbum } from '../utils/controls';

function List(props){

    const handleClick=(val,data,index)=>{
         props.handleClick(val);

         if(val.type==="song"){  //checking if the clicked item is song or not to update playlist
            updateAlbum(data,index)
         }
    }
    
    return (
        <Wrapper>
            
            {   props.title?<Text color="white" family="Poppins" size="1.15em" padding="0 0 10px 0" bold={600}>{props.title}</Text>:''}
            {
                props.data.map((val,index)=>{
                    return <a onClick={()=>handleClick(val,props.data,index)} key={val.id}><ListItem key={val.id} data={val} /></a>
                })
            }
        </Wrapper>
    )
}


function ListItem({data})
{
 
    

    return (
        <NewFlexbox>
             
            <Image src={data.image} height="50px" width="50px"/>
            <ItemWrapper>
            <Text color={JSON.parse(localStorage.getItem('current')) && data.id==JSON.parse(localStorage.getItem('current')).id?"green":"white"} family="Poppins" size="0.8em" width="180px">{data.title}</Text>
            <Text color={JSON.parse(localStorage.getItem('current')) && data.id==JSON.parse(localStorage.getItem('current')).id?"green":"gray"} family="Poppins" size="0.6em" width="220px">{data.description || data.subtitle}</Text>
            </ItemWrapper>
        </NewFlexbox>
        
    )
}


export default List

const Wrapper=styled.div`

padding-top:20px;

`

const ItemWrapper=styled.div`
padding-top:10px;
`

const Image=styled.img`
padding:3px;
border-radius:10px;
margin-right:10px
`

const NewFlexbox=styled(Flexbox)`
padding-left:0px;
`