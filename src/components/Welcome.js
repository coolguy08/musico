import React,{useState,useEffect}from 'react'
import { useHistory } from 'react-router';
import {Wrapper,Text,Image, ImageWrapper, Button} from '../styles/Welcome';
import {GoogleLogin,GoogleLogout} from 'react-google-login';


const artists=[
    "http://sagracdnems03.cdnsrv.jio.com/c.saavncdn.com/artists/Arijit_Singh_500x500.jpg",
    "https://sagraecdnems03.cdnsrv.jio.com/c.saavncdn.com/artists/Jubin_Nautiyal_002_20180507091834_500x500.jpg",
    "https://sagracdnems03.cdnsrv.jio.com/c.saavncdn.com/artists/Diljit_Dosanjh_500x500.jpg"
]

const greets=[
    {
        greet:"Let's Rock",
        msg:"Create an account or log in to keep using JioSaavn!"
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

const clientId="331238037755-amsulf02n7qjo2p69j11icpcg3ahcn04.apps.googleusercontent.com";

function Welcome() {

    const [index, setindex] = useState(0)

   const history=useHistory();

    const changeindex=()=>
    {
        setindex(((index+1)%greets.length));
    }

    useEffect(() => {
        const crousel=setTimeout(changeindex,3000);
        return () => {
            clearTimeout(crousel);
        }
    }, [index])


    const responseGoogle = (response) => {
        if(response && response.accessToken){
            sessionStorage.setItem('user',JSON.stringify(response.profileObj));
            history.push('/home')
        }
        console.log(response);
      }

    return (
        <Wrapper>
            
           <Text color="white" family="Poppins" size="1.0em" padding="30px 0 0 0">Create Account</Text><br/>
           
           <ImageWrapper padding="20px 0 30px 0px">
              <Image src={artists[index]}/>
           </ImageWrapper>
           
           <Text color="white" family="Poppins" size="1.2em" bold="600">{greets[index].greet}</Text>
           <Text color="gray" family="Poppins" size="1.0em" padding="0 20px 50px 20px">{greets[index].msg}</Text>

          

<GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
   
    

  />

           {/* <GoogleLogout
           text="Logout"
           clientId={clientId}
           onLogoutSuccess={responseGoogle}
           
           /> */}
          
        </Wrapper>
    )
}

export default Welcome

