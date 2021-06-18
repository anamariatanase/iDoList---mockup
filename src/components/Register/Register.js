import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Redirect } from 'react-router';
const useStyle = makeStyles((theme) => ({
    register: {
        display: 'flex',
        alignItems: "center",
        paddingTop: "40px",
        paddingBottom: "40px"
    }
    , formRegister: {
        width: '100%',
        maxWidth: '330px',
        padding: '15px',
        margin: 'auto',
    },

}));
function Register() {
    const classes = useStyle();
/*     const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(''); */
    const [redirect, setRedirect] = useState(false);
    const submit = async (e) => {
        /* e.preventDefault()
        await fetch('http://localhost:3001/api/register', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName,
                lastName,
                username,
                password,
                email

            })
        })
        setRedirect(true) */

    }
    if (redirect) {
        return <Redirect to="/login" />

    }
    return (
        <div className={classes.register}>
            <main className={classes.formRegister}>
                <form onSubmit={submit}>
                    <h1 style={{color:'#5d5a7a', textAlign:'center'}}className="h3 mb-3 fw-normal">Register to create a new account</h1>
                    <input type="text" className="form-control" id="floatingFirstName" placeholder="First Name" required style={{
                        marginBottom: '3px',
                        borderBottomRightRadius: '0',
                        borderBottomLeftRadius: '0',
                    }} /* onChange={e => setFirstName(e.target.value)}  *//>
                    <input type="text" className="form-control" id="floatingLastName" placeholder="Last Name" required style={{
                        marginBottom: '3px',
                        borderBottomRightRadius: '0',
                        borderBottomLeftRadius: '0',
                    }} /* onChange={e => setLastName(e.target.value)}  *//>

                    <input type="text" className="form-control" id="floatingUsername" placeholder="Username" required style={{
                        marginBottom: '3px',
                        borderBottomRightRadius: '0',
                        borderBottomLeftRadius: '0',
                    }} /* onChange={e => setUsername(e.target.value)} */ />
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required style={{
                        marginBottom: '3px',
                        borderBottomRightRadius: '0',
                        borderBottomLeftRadius: '0',
                    }} /* onChange={e => setPassword(e.target.value)}  *//>
                    <input type="email" className="form-control" id="floatingEmail" placeholder="Email" required style={{
                        marginBottom: '3px',
                        borderBottomRightRadius: '0',
                        borderBottomLeftRadius: '0',
                    }} /* onChange={e => setEmail(e.target.value)} */ />
                    <button style={{backgroundColor:'#5d5a7a',color:'#fff'}}className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                </form>
            </main>
        </div>
    )
}

export default Register;