import React from "react";
import styled from "styled-components";
import { Text } from "../styles/Styles";
import "../styles/loader.css";
function Loading() {
  return (
    <Wrapper>
        <Skeleton2/>
        <Skeleton2/>
        <Skeleton2/>
        <Skeleton2/>
        <Skeleton2/>
  

    </Wrapper>
  )
}

function Skeleton2(){
return <div class="tweet">
<div class="skeleton">
  <div class="skeleton-avatar"></div>
  <div class="tweet-content">
    <div class="tweet-header">
      <div class="skeleton-line heading" style={{ width: "60%" }}></div>
    </div>
    <div class="tweet-text">
      <div class="skeleton-line" style={{ width: "90%" }}></div>
    </div>
  </div>
</div>
</div>
}

export default Loading;

const Wrapper = styled.div`
  padding-top:100px;
 
`;
