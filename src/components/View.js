import React from 'react'
import Album from './Album'
import Song from './Song'

function View(props){
    if(props.match.params.type=="song")
    {
        return (
       
            <Song/>
        
        ) 
    }
    else if(props.match.params.type=="album")
    {
        return (
       
            <Album/>
          
        ) 
    }
    return (
       
            <Album/>
        
    )
}

export default View
