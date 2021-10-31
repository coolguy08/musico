import React,{useState,useEffect}from 'react'
import { GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { setUser } from '../redux/actions/Auth';
import { Signout } from '../requests';

import {Wrapper,Text,Image, ImageWrapper} from '../styles/Welcome';
import Back from './Back';

import Header from './Header';

const clientId="1097284669182-eee65ec791mdlue6d2npfhhpai794g10.apps.googleusercontent.com";

const qualities=['Low','Medium','High'];

const Qualitymap={
    'Low':'96',
    'Medium':'160',
    'High':'320'
}


function Settings() {

    const user=useSelector((state)=>state.Auth.user);
    const dispatch=useDispatch();
    const [bitrate, setbitrate] = useState(localStorage.quality || '96');
    const history=useHistory();

    async function logout(){
        dispatch(setUser(null));
        Signout({guid:JSON.parse(localStorage.user).googleId});
        localStorage.removeItem('user');
        history.push('/')
        console.log("logged out");
    }

    function handlechange(e){
        setbitrate(e.target.value)
        localStorage.quality=Qualitymap[e.target.value];
    }

    useEffect(() => {
       
        if(!localStorage.user){
            history.push('/');
        }
        return () => {
            
        }
    }, []);

    if(user==undefined){
        return null;
    }

 return (
        <>
        <Header title="Musico"/>
           <Wrapper>
            <Text color="white" family="Poppins" size="1.0em" padding="30px 0 0 0">Create Account</Text><br/>
           <Back/>
           <ImageWrapper padding="20px 0 30px 0px">
              <Image src={user.imageUrl} width="150px" height="150px"/>
           </ImageWrapper>
           
           <Text color="white" family="Poppins" size="1.2em" bold="600">Hii {user.givenName}</Text>
           <Text color="gray" family="Poppins" size="1.0em" padding="0 20px 30px 20px">{user.email}</Text>

           <List>

            <ListItem>
                <Text color="white" family="Poppins" size="1.2em"> 
                    Quality
                </Text>
            <select name="quality" onChange={handlechange} >
                {
                    qualities.map((quality)=>{
                        return <option val={Qualitymap[quality]} selected={bitrate==Qualitymap[quality]}>{quality}</option>
                    })
                }
                
            </select>
                
                </ListItem> 

           </List>
            
            
           
          <GoogleLogout
           text="Signout"
          clientId={clientId}
          onLogoutSuccess={logout}
          
          />


        </Wrapper>
        </>
    )
}

export default Settings

const List=styled.div`

padding-bottom:40px;

`

const ListItem=styled.div`
width:100vw;
display:flex;
justify-content:space-around;
`