import React, { Suspense, lazy } from 'react';
import Welcome from "./components/Welcome";
import styled from 'styled-components';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

// import Home from "./components/Home";
// import View from "./components/View";
// import Search from "./components/Search";
// import Browse from "./components/Browse";
// import MyLibrary from "./components/MyLibrary";
// import Artist from "./components/Artist";

// import Player from "./components/Player";
import { useEffect } from "react";
// import Settings from "./components/Settings";
// import Error404 from "./components/Error404";
import Loading from './components/Loading';

const Home = lazy(() => import('./components/Home'));
const View = lazy(() => import('./components/View'));
const Search = lazy(() => import('./components/Search'));
const Browse = lazy(() => import('./components/Browse'));
const MyLibrary = lazy(() => import('./components/MyLibrary'));
const Artist = lazy(() => import('./components/Artist'));
const Player = lazy(() => import('./components/Player'));
const Settings = lazy(() => import('./components/Settings'));
const Error404 = lazy(() => import('./components/Error404'));



function App(){

  useEffect(() => {
    const song=JSON.parse(localStorage.getItem('current'));
    if(song){
      
      document.getElementById('player').src=song.url;
    }
    return () => {
      
    }
  }, [])

  return (
    <Main>
     
      <BrowserRouter>
        <Suspense fallback={<Loading/>}>

          <Switch>
            
            <Route exact path="/" component={Welcome}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/view/:type/:id" component={View}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/browse" component={Browse}/>
            <Route exact path="/mylibrary" component={MyLibrary}/>
            <Route exact path="/player" component={Player}/>
            <Route exact path="/artist/:id" component={Artist}/>
            <Route exact path="/settings" component={Settings}/>
            <Route  component={Error404}/>
            
            
          </Switch>

        </Suspense>
        
      </BrowserRouter>
      
    </Main>
   
  );
}

export default App;


const Main=styled.div`
background:#2a2d36;
height:100vh;
width:100vw;


`
