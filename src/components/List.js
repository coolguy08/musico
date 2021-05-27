import React from 'react'
import styled from 'styled-components';
import { GetSongURL } from '../requests';
import { Flexbox } from '../styles/Home';
import {Text} from './Styles';

async function handleClick(data){
    if(data.type=='song'){
    
        const d=await GetSongURL(data.id);
    console.log(data);
    const cur_song={
        title:data.title,
        description:data.description,
        image:data.image.replace('50x50','500x500'),
        url:d.url
    }

    localStorage.setItem('current',JSON.stringify(cur_song));
    const audio=document.getElementById('player');
    audio.src=d.url;
    document.dispatchEvent(new Event("songchanged"));
    audio.play();
    console.log(d);
    }


}


function List(props) {
    return (
        <Wrapper>
            {props.title?<Text color="white" family="Poppins" size="1.15em" padding="0 0 10px 0" bold={600}>{props.title}</Text>:''}
            {
            props.data.map((val)=>{
                return <a onClick={()=>handleClick(val)}><ListItem key={val.id} data={val} /></a>
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
            <Text color="white" family="Poppins" size="0.8em" width="180px">{data.title}</Text>
            <Text color="gray" family="Poppins" size="0.6em" width="220px">{data.description}</Text>
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