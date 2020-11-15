import React, { useState, useEffect } from 'react';
import CanvasFlower from '../CanvasFlower/CanvasFlower';
import SideNav from '../SideNav/SideNav';
import Button from '@material-ui/core/Button';
import Tree from '../Tree/Tree';
import Random from '../Random/Random';



function Canvas(props) {
 const [shouldShow, setShouldShow] = useState(true);
 const [active, setActive] = useState('fibflower');
    useEffect(() => {
        window.addEventListener('resize', sizeListener);

        // returned function will be called on component unmount 
        return () => {
            window.removeEventListener('resize', sizeListener);
        }
    }, []);

const sizeListener = () => {
    setShouldShow(false);
    setTimeout(() =>  setShouldShow(true), 10);
}

const goBack = () => {
    console.log('button clicked');
}

    return(
        <>
        <SideNav setActive={setActive} />
        {shouldShow && active === 'fibflower' &&<CanvasFlower/>}
        {shouldShow && active === 'tree' &&<Tree/>}
        {shouldShow && active === 'random' && <Random />}
        </>
    );
}

export default Canvas;