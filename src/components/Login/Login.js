import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle} from '@fortawesome/free-brands-svg-icons'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app();
 }
const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    const handleGoogleSignIn = ()=> {
        var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            const {displayName, email} = user;
            const signedInUser = {name:displayName , email};
            setLoggedInUser(signedInUser);
            history.replace(from);
            console.log('signedIn user is', loggedInUser);
        }).catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }


    // Handle SignIn with email and password
    const [newUser,setNewUser] = useState(false);
    const [user,setUser]= useState({
        isSignedIn:false,
        userName:'',
        email:'',
        password:'',
        photo:''
      })

       //Handle blur
       const handleBlur=(event)=>{
        let isFormValid=true;
        if (event.target.name ==='email') {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          isFormValid =  re.test(String(event.target.value).toLowerCase());
        }
        if (event.target.name === 'password') {
          const isPasswordValid = event.target.value.length >6;
          const passHasNumber = /\d{1}/.test(event.target.value);
          isFormValid = isPasswordValid && passHasNumber;
        }
        if(isFormValid) {
          const newUserInfo = {...user, [event.target.name] : event.target.value};
          setUser(newUserInfo);
          console.log(newUserInfo);
        }
      }


      //Handle submit
      const handleSubmit = (e)=>{
        e.preventDefault(); 
        console.log(user.email, user.password, user.userName);
        // for a new user
        if(newUser && user.email && user.password){
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
              var User = userCredential.user;
              console.log(User);
              updateUserName(user.userName);
              setLoggedInUser(user);
              history.replace(from);
              console.log(loggedInUser);
              const newUserInfo = {...User , error :'' , success : true};
              setUser(newUserInfo);
              console.log(user);
              console.log(user.userName);
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode , errorMessage);
              const newUserInfo = {...user, error: errorMessage , success: false};
              setUser(newUserInfo);
            });
          console.log("Form submitted");
        }
        // for a old user
        if(!newUser && user.email && user.password){
          console.log(user.userName);
          firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
              console.log(userCredential);
              const oldUser = userCredential.user;
              console.log(oldUser);
              setLoggedInUser(oldUser);
              history.replace(from);
              console.log(loggedInUser);
              const newUserInfo = {...oldUser, error:'', success:true}
              setUser(newUserInfo);
              
              console.log(user);
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              const newUserInfo = {...user, error:errorMessage, success:false}
              setUser(newUserInfo);
              console.log(user);
            });
        }
      }

    //   User Name update
      const updateUserName = userName =>{
        var user = firebase.auth().currentUser;
          user.updateProfile({
            displayName: userName,
          }).then(function() {
            console.log("User successfully updated");
          }).catch(function(error) {
            console.log(error);
          });
      }
      


      const handleRegistrationPageView =()=>{
          document.getElementById("registrationPage").style.display='block';
          document.getElementById("loginPage").style.display='none';
      }
      const handleLoginPageView =()=>{
        document.getElementById("loginPage").style.display='block';
        document.getElementById("registrationPage").style.display='none';
    }

    return (
        <div className="container">
      
            <div className="loginPage" id="loginPage">
                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                <input type="email" onBlur={handleBlur} name="email" id="" placeholder="Email" required/>
                <br/>
                <input type="password" onBlur={handleBlur} name="password" id="" placeholder="Password" required/>          
                <button className="loginBtn btn btn-warning"><input type="submit" value="Login"/></button>
                </form>
                <p>Don't have an account? <a onClick={handleRegistrationPageView} ><span onClick={()=>{setNewUser(!newUser)}} >Create an account</span></a></p>

                <h3 style={{color:'red'}}>{user.error}</h3>
                {
                    user.success && <h3 style={{color:'green'}}>User Logged in successfully</h3>
                }

             </div>

            
            <div className="registration" id="registrationPage">
                <h2>Create an account</h2>
                <form action="" onSubmit={handleSubmit}>
                <input type="text" name="userName" onBlur={handleBlur} placeholder="Name" />
                <input type="email" onBlur={handleBlur} name="email" id="" placeholder="Email" required/>
                <br/>
                <input type="password" onBlur={handleBlur} name="password" id="" placeholder="Password" required/>
                <input type="password"  name="confirmPassword" id="" placeholder="Confirm Password" required/>          
                <button className="loginBtn btn btn-warning"><input type="submit" value="Create an account"/></button>
                </form>
                <p>Already have an account? <a onClick={handleLoginPageView}><span onClick={()=>{setNewUser(newUser)}}>Login</span></a></p>
                
                <h3 style={{color:'red'}}>{user.error}</h3>
                {
                    user.success && <h3 style={{color:'green'}}>User Created successfully</h3>
                }
            </div>
            
            
            
            <p className="line"><span>Or</span></p>
            <button onClick={handleGoogleSignIn} className="btn btn-primary googleBtn"><FontAwesomeIcon className="icon" icon={faGoogle} />  Continue with Google</button>
            <br/>
        </div>
    );
};

export default Login;