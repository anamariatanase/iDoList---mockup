import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Redirect } from 'react-router';
const useStyle = makeStyles((theme) => ({
    login: {
        display: 'flex',
        alignItems: "center",
        paddingTop: "45px",
        paddingBottom: "40px"
    }
    , formSignin: {
        width: '100%',
        maxWidth: '330px',
        padding: '15px',
        margin: 'auto',
    },

}));
function Login({ setName, setLoggedIn, loggedIn }) {
    const classes = useStyle();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [redirect, setRedirect] = useState(false);
    const [message, setMessage] = useState('');
    setLoggedIn(false)
    const submit =  (e) => {
        e.preventDefault()
        setLoggedIn(true);
        setRedirect(true)
        

    }
    if (username.toLowerCase() === "admin" && password.toLowerCase() === "admin") {
        setLoggedIn(true);
        console.log(loggedIn)
        return <Redirect to="/homepage" />;
        
    }
    /*  const submit = async (e) => {
         e.preventDefault()
        const response = await fetch('http://localhost:3001/api/login', {
             method: "POST",
             headers: { 'Content-Type': 'application/json' },
             credentials:'include',
             body: JSON.stringify({
                 username,
                 password
             })
         })
         const content = await response.json();
         console.log(content.message)
         setRedirect(true);
         setMessage(content.message);
         setLoggedIn(true);
     } */
    /* if (redirect) {
        if(message==='success'){
            return <Redirect to="/" />;
        }
    } */
    return (
        <div className={classes.login}>
            <main className={classes.formSignin}>
                <form onSubmit={submit}>
                    <h1 style={{ color: '#5d5a7a' }} className="h3 mb-3 fw-normal">Login into your account</h1>

                    <input type="username" className="form-control" id="floatingInput" placeholder="Username" required style={{
                        marginBottom: '3px',
                        borderBottomRightRadius: '0',
                        borderBottomLeftRadius: '0',
                    }} onChange={e => setUsername(e.target.value)} />
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required style={{
                        marginBottom: '10px',
                        borderBottomRightRadius: '0',
                        borderBottomLeftRadius: '0',
                    }} onChange={e => setPassword(e.target.value)} />
                    <button className="w-100 btn btn-lg" style={{ backgroundColor: '#5d5a7a', color: '#fff' }} type="submit">Sign in</button>
                </form>
            </main>
        </div>
    )
}

export default Login;