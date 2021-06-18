import React, { useEffect, useState } from 'react';
import Wrapper from './components/wrapper'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress';
import Navigation from './components/nav/Navigation';
import Login from './components/Login/login';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './components/Register/Register';
import HomePage from './components/Homepage/Homepage';
import store from './utils/store'
const useStyle = makeStyles((theme) => ({
  spinnerDiv:{
    display: 'flex', justifyContent: 'center',
    marginTop: theme.spacing(50)
  },
  spinner:{
    width:'300px'
  }
}));
function App() {
 // const [isLoading, setIsLoading] = useState(true);

  const [loggedIn, setLoggedIn] = useState(false)
  const [backgroundImage, setBackgroundImage] = useState('white');
  /* useEffect(
    async () => {
       await fetch('http://localhost:3001/api/user',
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'GET',
          credentials: 'include',
        }).then((response)=> response.json()).then((data)=>{
          setApiContent(data);
        });
    }, []); */

  /* useEffect(() => {
    setBackgroundImage(apiContent.app_background);
    setTimeout(() => setIsLoading(false), 1000);
  }, [apiContent]) */
 
  const classes = useStyle();

  return (
    <div >
{/*       {!isLoading && (
 */}        <BrowserRouter>
        <Navigation setBackgroundImage={setBackgroundImage} loggedIn={loggedIn}
          setLoggedIn={setLoggedIn} ></Navigation>

        <Route path='/login' exact component={() => <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}  />} />
        <Route path='/register' exact component={Register} />
        <Route path='/homepage' exact component={() => <HomePage   backgroundImage={backgroundImage} setBackgroundImage={setBackgroundImage}  loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}  />} />
      </BrowserRouter>
{/*       )}
 */}      {/* {isLoading &&<div className={classes.spinnerDiv}> 
        {<CircularProgress size={100} className={classes.spinner} />}
      </div>} */}
    </div>

  )
}

export default App;














