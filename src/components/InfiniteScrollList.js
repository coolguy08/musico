import React, { useState,useRef ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
import { GetMoreSongs } from '../requests';
import { Flexbox } from '../styles/Home';
import {Text} from '../styles/Styles';
import { getid } from '../utils/common';
import { PlaySong, updateAlbum } from '../utils/controls';
import PopUp from './PopUp';

let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
  }

function InfiniteScrollList(props){

    const [page,setpage]=useState(2);
    const target = useRef(null);
    const [songs,setsongs]=useState(props.data);
    const [query,setquery]=useState(props.query);
    const [loading,setloading]=useState(false);
    const [hasmore,sethasmore]=useState(true);

    const getsongs=async()=>{
        setloading(true);
        const res=await GetMoreSongs(query,page);
        if(res.data.length>0){
          setsongs([...songs,...res.data]); 
         }
         else{
           sethasmore(false);
         }
        setloading(false);   
    }

  

    const callback=(entries)=>{
        let [entry] = entries;
        if(entry.isIntersecting){
          if(target.current){
            observer.unobserve(target.current);
          }
          
          setpage(page+1)
          getsongs();
        }
    }

    let observer = new IntersectionObserver(callback, options);


    useEffect(()=>{

        if(target.current && hasmore){
          observer.observe(target.current);
        }
    
        return ()=>{
          if(target.current){
            observer.unobserve(target.current);
          }
        }
        
      },[songs])



    const dispatch=useDispatch();

    const history=useHistory();
    
    const handleClick=async(val,index)=>{

         PlaySong(val,dispatch);

         if(val.type==="song"){  //checking if the clicked item is song or not to update playlist
            updateAlbum(props.data,index);
         }
    }
    
    return (
        <Wrapper id="scrollArea">
            
            {   props.title?<Text color="white" family="Poppins" size="1.15em" padding="0 0 10px 0" bold={600}>{props.title}</Text>:''}
            {
                songs.map((val,index)=>{
                    return <ListItem  key={val.id} data={val} index={index} handleClick={handleClick}  target={songs.length-1===index?target:null}/>
                })
            }
            {
                loading?<Loading>Loading...</Loading>:""
            }
        </Wrapper>
    )
}


function ListItem({data,handleClick,index,target})
{
     const [open, setopen] = useState(false);

     const cursong=useSelector((state)=>state.song.cursong);
   

    return (
        <ItemFlex ref={target}>
            <a onClick={()=>handleClick(data,index)}>
            
            <NewFlexbox>
             <Image src={data.image} height="50px" width="50px"/>
             <ItemWrapper>
             <Text color={cursong && data.id==cursong.id?"yellow":"white"} family="Poppins" size="0.8em" width="180px">{data.title}</Text>
             <Text color={cursong && data.id==cursong.id?"yellow":"gray"} family="Poppins" size="0.6em" width="220px">{data.description || data.subtitle}</Text>
             </ItemWrapper>
 
            
              </NewFlexbox>
            </a>
         {data.type=="song"?<Icon ><i class="fa fa-ellipsis-v" onClick={()=>setopen(true)}></i></Icon>:''}
         {open?<PopUp setopen={setopen} data={data} index={index} handleClick={handleClick}/>:""}
         
        </ItemFlex>
        
        
    )
}


export default InfiniteScrollList

const Wrapper=styled.div`

padding-top:60px;

`

const Icon=styled.button`

background:#2a2d36;
color:white;
outline:none;
border:none;
font-size:20px;
margin-right:15px;

`

const ItemFlex=styled(Flexbox)`
padding-left:0px;
justify-content:space-between;

`

const Loading=styled.div`
color:white;
display:flex;
justify-content:center;
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