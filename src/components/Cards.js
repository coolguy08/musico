import React from 'react'
import { useHistory } from 'react-router';
import styled,{keyframes}from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { getid } from '../utils/common';
import { PlayRadio } from '../utils/controls';



 
function Cards(props){ 
       // this is a default card
       if(props.cardtype==="circle")
       {
           return <CircularCard data={props.data} {...props}/>
       }
       else if(props.cardtype==="rectangle")
       {
           return <RectangleCard data={props.data} {...props}/>
       }
       else
       {
         return <SimpleCard data={props.data} {...props}/>
       }
}

function SimpleCard({data,width,height})
{

    const history=useHistory();
    return (
        <>
        {
            data.map((val,index)=>{
                return <Wrapper key={val.id+index} onClick={()=>history.push(`/view/${val.type}/${getid(val.perma_url)}`)} width={width} height={height}>
                
                <LazyLoadImage
    
                    effect="blur"
                    src={val.image}
                    width={width || "100px" }
                    height={height || "100px"}
                    style={{borderRadius:'10px'}}

                />

                {/* <Image src={val.image} BorderRadius="10px" width="100px" height="100px"/> */}
                
                
                <Text color="white" padding="5px" family="Poppins">{val.title}</Text>
                </Wrapper>
            })
        }
        </>
       
    )
}

function CircularCard({data,setloading})
{
    return (
        <>
        {
            data.map((val,index)=>{
                return <Wrapper key={val.id+index} onClick={()=>PlayRadio(val.title,val.more_info.featured_station_type,setloading)}>
     
                <LazyLoadImage
                
                effect="blur"
                src={val.image}
                width="100px" 
                height="100px"
                style={{borderRadius:'50%'}}

                />

                {/* <Image src={val.image} BorderRadius="50%" width="100px" height="100px"/> */}
                <Text color="white" padding="5px" family="Poppins">{val.title}</Text>
                </Wrapper>
            })
        }
        
        </>
       
    )
}

function RectangleCard(props)
{
    const history=useHistory();
    
    return (
        <>
        {
            props.data.map((val,index)=>{
                return <Wrapper width="150px" key={val.id+index} onClick={props.datatype==='charts'?()=>history.push(`/view/playlist/${getid(val.perma_url)}`):()=>{}}>
                <LazyLoadImage
                
                effect="blur"
                src={val.image}
                width="150px" 
                height="100px"
                

                />
                {/* <Image src={val.image} BorderRadius="10px" width="150px" height="100px"/> */}
                <Text color="white" padding="5px" family="Poppins">{val.title}</Text>
                </Wrapper>
            })
        }
        
        </>
       
    )
}

export default Cards



const zoomout=keyframes`
0%{transform:scale(0.9)}
100%{transform:scale(1.0)}

`
const Wrapper=styled.div`
width:${props=>props.width || '100px'};

padding:5px;

animation-duration:1s;
animation-iteration-count: 1;
&:hover{
    animation-name: ${zoomout};

}

`
const Image=styled.img`
width:${props=>props.width || '100px'};
height:${props=>props.height || '100px'};
border-radius:${props=>props.BorderRadius};
`

const Text=styled.div`

padding:${props=>props.padding || 'opx'};
color:${props=>props.color || 'red'};
font-family:${props=>props.family || 'mono'};
font-size:${props=>props.size || "12px"};
font-weight:${props=>props.bold};
text-align:center;


text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;




`
