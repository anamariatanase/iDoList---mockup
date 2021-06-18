import { AppBar, Button, Toolbar } from '@material-ui/core';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import { Link } from 'react-router-dom';
import logo from '../../logo2.png';

const useStyle = makeStyles((theme) => ({
    AppBar: {
        background: 'white'
    },
    title: {
        flexGrow: 1,
    },
    btnBackground: {
        color: "#5d5a7a",
        marginLeft: 'auto',
        border: ' 1px solid transparent'

    },
    btnLogin: {
        color: "#5d5a7a",
        marginRight: 'auto',
    },
    btnLogout: {
        color: "#5d5a7a",
        marginLeft: 'auto',
    },
    btnRegister: {
        color: "#5d5a7a",
        marginRight: theme.spacing(1),
    },
    logo: {
        width: '120px',
        flexGrow: 0.01,
        display: 'flex'
    },
    right:{
        float:'right',
        marginLeft:'83%'
    }

}))
function TopBar({ setOpenSideMenu, name, setName, setRedirect, message, setMessage, setLoggedIn, loggedIn }) {
    const classes = useStyle();
    let menu;

    const logout = async () => {

        await fetch('http://localhost:3001/api/logout', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',

        });
    }
    if (!loggedIn) {
        menu = (
            <AppBar position="static" className={classes.AppBar} elevation={0}>
                <Toolbar>
                    <img src={logo} className={classes.logo} alt="iDoListLogo" />
                    <div className={classes.right}>
                        <Link style={{ textDecoration: 'none' }} to="/login">
                            <Button className={classes.btnLogin}>Login</Button>
                        </Link>
                        <Link  style={{ textDecoration: 'none' }}to="/register">
                            <Button className={classes.btnRegister}>Register</Button>

                        </Link>
                    </div>


                </Toolbar>
            </AppBar>
        )
    } else {
        menu = (
            <AppBar position="static" className={classes.AppBar} elevation={0}>
                <Toolbar>
                    <img src={logo} className={classes.logo} alt="iDoListLogo" />

                    <Button className={classes.btnBackground} onClick={() => setOpenSideMenu(true)}>Change Background</Button>
                    <Link  style={{ textDecoration: 'none' }}to="/login">
                        <Button className={classes.btnLogout} onClick={logout}
                        >Logout</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        )

    }
    return menu;
}

export default TopBar;