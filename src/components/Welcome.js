import React,{useState,useEffect}from 'react'
import { useHistory } from 'react-router';
import {Wrapper,Text,Image, ImageWrapper} from '../styles/Welcome';
import {GoogleLogin} from 'react-google-login';
import { login } from '../requests';
import { getUserPlayList } from '../utils/db';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/actions/Auth';




const artists=[
    "http://sagracdnems03.cdnsrv.jio.com/c.saavncdn.com/artists/Arijit_Singh_500x500.jpg",
    "https://sagraecdnems03.cdnsrv.jio.com/c.saavncdn.com/artists/Jubin_Nautiyal_002_20180507091834_500x500.jpg",
    "https://sagracdnems03.cdnsrv.jio.com/c.saavncdn.com/artists/Diljit_Dosanjh_500x500.jpg"
]

const greets=[
    {
        greet:"Let's Rock",
        msg:"Create an account or log in to keep using Musico!"
    },
    {
        greet:"Unlimited Listening",
        msg:"No Limits. Just music. Create your account or log in to keep listening"
    },
    {
        greet:"Recommendations",
        msg:"We'll learn what you dig and suggest more you might like"
    }
]

const clientId="1097284669182-eee65ec791mdlue6d2npfhhpai794g10.apps.googleusercontent.com";

function Welcome() {

    const [index, setindex] = useState(0)

   const history=useHistory();

   const dispatch=useDispatch();

   const user=useSelector((state)=>state.Auth.user);

    const changeindex=()=>
    {
        setindex(((index+1)%greets.length));
    }

    useEffect(() => {
        if(user){
            history.push('/home');
        }
        return () => {
           
        }
    }, [])
    
    useEffect(() => {
       
        const crousel=setTimeout(changeindex,3000);
        return () => {
            clearTimeout(crousel);
        }
    }, [index])


    const responseGoogle = async(response) => {
        if(response && response.accessToken){
            
            localStorage.setItem('user',JSON.stringify(response.profileObj));
            
            dispatch(setUser(response.profileObj));
            
            const data={
                    
                    name:response.profileObj.name,
                    email:response.profileObj.email,
                    guid:response.profileObj.googleId,
                    profilepic:response.profileObj.imageUrl,


            }

            const res=await login(data);

            if(res.status){
                getUserPlayList(data);
                history.push('/home');
            }
            
        }
        console.log(response);
      }

    return (
        <>
        
        <Wrapper>
            
           <Text color="white" family="Poppins" size="1.0em" padding="30px 0 0 0">Create Account</Text><br/>
           
           <ImageWrapper padding="20px 0 30px 0px">
              <Image src={artists[index]}/>
           </ImageWrapper>
           
           <Text color="white" family="Poppins" size="1.2em" bold="600">{greets[index].greet}</Text>
           <Text color="gray" family="Poppins" size="1.0em" padding="0 20px 50px 20px">{greets[index].msg}</Text>

          

            <GoogleLogin
                
                clientId={clientId}
                buttonText="Login With Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            
            />

            <br/>
            <Text color="white" style={{textDecoration:'underline'}}family="Poppins" size="1.2em" bold="600" onClick={()=>{history.push('/home')}}>Skip</Text>

           {
           /* <GoogleLogout
           text="Logout"
           clientId={clientId}
           onLogoutSuccess={responseGoogle}
           
           /> */
           
           }
          
        </Wrapper>
        </>
    )
}

export default Welcome

