import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Drawer, Grow } from '@material-ui/core';
import colors from '../../utils/colors'
import images from '../../utils/images'

const useStyle = makeStyles((theme) => ({
    drawer: {
        width: "400px"
    },
    menu: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-around',
    },
    box: {
        width: '45%',
        height: '90px',
        backgroundColor: 'yellow',
        borderRadius: '9px',
        marginBottom: theme.spacing(1)

    },
    optionContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: theme.spacing(2),

    }
}))

function SideMenu({ apiContent, openSideMenu, setOpenSideMenu, setNewBackgroundImage }) {
    const classes = useStyle();
    const [openOptionColor, setOpenOptionColor] = useState(false);
    const [openOptionImage, setOpenOptionImage] = useState(false);
    const [imagess, setImages] = useState([])
    useEffect(() => {
        const listOfImages = images;

        setImages(listOfImages)


    })
    /* useEffect(() => {
        const listOfImages = images;
        setImages(listOfImages);
    })
    const updateBackground = (body) => {
        const url = 'http://localhost:3001/api/update/' + apiContent._id;
        fetch(url, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(body)
        });
    }

    const onUpdateBackground = (background) => {
        console.log("onUpdateBackground:", background);
        setNewBackgroundImage(background);
         updateBackground({
            app_background: background
        }) 
    } */
    return (
        <div >
            <Drawer open={openSideMenu} anchor='right' onClose={() => setOpenSideMenu(false)} >
                <div className={classes.drawer}>
                    <div className={classes.menu}>
                        <div className={classes.box} style={{
                            backgroundImage: 'url(https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }} onClick={() => {setOpenOptionImage(true)
                                            setOpenOptionColor(false)}}>
                        </div>

                    <div className={classes.box} style={{
                        backgroundImage: 'url(https://i.pinimg.com/originals/bf/79/78/bf79786ab41b5aaa4f7d01c6ada26748.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }} onClick={() => {
                        setOpenOptionColor(true);
                        setOpenOptionImage(false);
                    }}>
                    </div>
                </div>
                <Divider />
                {openOptionImage ? (<Grow in={openOptionImage}>
                    <div className={classes.optionContainer}>
                        {images.map((image, index) => {
                            return (
                                <div key={index} className={classes.box} style={{
                                    backgroundImage: image
                                }} onClick={()=>setNewBackgroundImage(image)}>
                                </div>
                            )
                        })}

                    </div>
                </Grow>) : (
                    <Grow in={openOptionColor}>
                        <div className={classes.optionContainer}>
                            {colors.map((color, index) => {
                                return (
                                    <div key={index} className={classes.box} style={{
                                        backgroundColor: color
                                    }} onClick={()=>{
                                        setNewBackgroundImage(color);}}>
                                    </div>
                                )
                            })}

                        </div>
                    </Grow>
                )}
                </div>
            </Drawer>
        </div >
    )
    /* return (
        <div >
            <Drawer open={openSideMenu} anchor='right' onClose={() => setOpenSideMenu(false)} >
                <div className={classes.drawer}>
                    <div className={classes.menu}>
                        <div className={classes.box} style={{
                            backgroundImage: 'url(https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }} onClick={() => {
                            setOpenOptionImage(true)
                            setOpenOptionColor(false)
                        }}>
                        </div>

                        <div className={classes.box} style={{
                            backgroundImage: 'url(https://i.pinimg.com/originals/bf/79/78/bf79786ab41b5aaa4f7d01c6ada26748.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }} onClick={() => {
                            setOpenOptionColor(true);
                            setOpenOptionImage(false);
                        }}>
                        </div>
                    </div>
                    <Divider />
                    {openOptionImage ? (<Grow in={openOptionImage}>
                        <div className={classes.optionContainer}>
                            {images.map((image, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={classes.box}
                                        style={{
                                            backgroundImage: image
                                        }}
                                        onClick={() => onUpdateBackground(image)}
                                    >
                                    </div>
                                )
                            })}

                        </div>
                    </Grow>) : (
                        <Grow in={openOptionColor}>
                            <div className={classes.optionContainer}>
                                {colors.map((color, index) => {
                                    return (
                                        <div key={index} className={classes.box} style={{
                                            backgroundColor: color
                                        }} onClick={() => onUpdateBackground(color)}>
                                        </div>
                                    )
                                })}

                            </div>
                        </Grow>
                    )}
                </div>
            </Drawer>
        </div >
    ) */
}
export default SideMenu;