import styled from 'styled-components';



const Text=styled.div`

padding:${props=>props.padding || 'opx'};
color:${props=>props.color || 'inherit'};
font-family:${props=>props.family || 'mono'};
font-size:${props=>props.size || "12px"};
font-weight:${props=>props.bold};
width:${props=>props.width || ''};
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
// text-align:center;

`


export{
    Text
}