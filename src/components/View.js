import React from 'react'
import Album from './Album'
import Song from './Song'

function View(props){
    if(props.match.params.type=="song")
    {
        return (
       
            <Song id={props.match.params.id} type={props.match.params.type}/>
        
        ) 
    }
    else if(props.match.params.type=="album")
    {
        return (
       
            <Album id={props.match.params.id} type={props.match.params.type}/>
          
        ) 
    }
    return (
       
            <Album id={props.match.params.id} type={props.match.params.type}/>
        
    )
}

export default View
