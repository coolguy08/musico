import React, { useState } from 'react'
import styled from 'styled-components';
import { Flexbox } from '../styles/Home';
import {Text} from '../styles/Styles';
import { updateAlbum } from '../utils/controls';
import PopUp from './PopUp';

function List(props){

    const handleClick=(val,index)=>{
         props.handleClick(val);

         if(val.type==="song"){  //checking if the clicked item is song or not to update playlist
            updateAlbum(props.data,index)
         }
    }
    
    return (
        <Wrapper>
            
            {   props.title?<Text color="white" family="Poppins" size="1.15em" padding="0 0 10px 0" bold={600}>{props.title}</Text>:''}
            {
                props.data.map((val,index)=>{
                    return <ListItem key={val.id} data={val} index={index} handleClick={handleClick}/>
                })
            }
        </Wrapper>
    )
}


function ListItem({data,handleClick,index})
{
     const [open, setopen] = useState(false);
    

    return (
        <NewFlexbox>
            <a onClick={()=>handleClick(data,index)}>
            <NewFlexbox>
             
             <Image src={data.image} height="50px" width="50px"/>
             <ItemWrapper>
             <Text color={JSON.parse(localStorage.getItem('current')) && data.id==JSON.parse(localStorage.getItem('current')).id?"yellow":"white"} family="Poppins" size="0.8em" width="180px">{data.title}</Text>
             <Text color={JSON.parse(localStorage.getItem('current')) && data.id==JSON.parse(localStorage.getItem('current')).id?"yellow":"gray"} family="Poppins" size="0.6em" width="220px">{data.description || data.subtitle}</Text>
             </ItemWrapper>
 
            
              </NewFlexbox>
            </a>
         {data.type=="song"?<Icon ><i class="fa fa-ellipsis-v" onClick={()=>setopen(true)}></i></Icon>:''}
         {open?<PopUp setopen={setopen} data={data} index={index} handleClick={handleClick}/>:""}
         
        </NewFlexbox>
        
        
    )
}


export default List

const Wrapper=styled.div`

padding-top:20px;

`

const Icon=styled.button`

background:#2a2d36;
color:white;
outline:none;
border:none;
font-size:20px;
margin-left:10px;

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