import React, { useEffect, useState } from 'react';
import Navigation from '../nav/Navigation';
import Wrapper from '../wrapper';


function HomePage({ apiContent, setLoggedIn, backgroundImage }) {
    
    setLoggedIn(true)

    return (
        <div style={{
            backgroundImage: backgroundImage,
            backgroundColor: backgroundImage,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <Wrapper apiContent={apiContent} />
        </div>


    )


}

export default HomePage;