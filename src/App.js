import React, { Suspense, lazy } from 'react';
import Welcome from "./components/Welcome";
import styled from 'styled-components';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { useEffect } from "react";
import Loading from './components/Loading';
import { useDispatch } from 'react-redux';
import { Playnext, Playprev, togglePlay } from './utils/controls';

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

  const dispatch=useDispatch();


  function toggleonspace(event){
    
      if(event.key==" " && event.target.localName!="input"){
        event.preventDefault();
        togglePlay();
      }
  }


  useEffect(() => {

    document.addEventListener("keypress",toggleonspace);

    if ('mediaSession' in window.navigator){
   
  
      window.navigator.mediaSession.setActionHandler('play', function() { togglePlay();});
      window.navigator.mediaSession.setActionHandler('pause', function() { togglePlay();});
     

      window.navigator.mediaSession.setActionHandler('previoustrack', function() { Playprev(dispatch)});
      window.navigator.mediaSession.setActionHandler('nexttrack', function() { Playnext(dispatch)});
      
  }
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
