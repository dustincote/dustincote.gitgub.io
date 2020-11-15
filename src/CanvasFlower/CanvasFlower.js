import React, {useEffect, useRef, useState} from 'react';
import './CanvasFlower.css';


const CanvasFlower = (props) => {
    const [done, setDone] = useState(false);
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight});
    const ref = useRef();
    useEffect(() => {
        window.addEventListener('resize', sizeOfWindow);

        // returned function will be called on component unmount 
        return () => {
            window.removeEventListener('resize', sizeOfWindow)
        }
    }, []);

    // useEffect(()=> {window.location.reload()},[]);

    const sizeOfWindow = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
        // window.location.reload();
    }

    useEffect(() => { 
        const canvas = ref.current;
        const c = canvas.getContext('2d');
        c.globalCompositeOperation = 'destination-over';


        let number = 0;
        let scale = 10;
        let hue = Math.random() * 360;

        function reset(){
            console.log('trying to reset');
            console.log(`number is:${number} scale is:${scale}`);
        c.clearRect(0, 0, canvas.width, canvas.height);
        number = 0;
        scale = 10;
        hue = Math.random() * 360;
        animate();
        }
        
        function drawFlower() {
            let angle = number * .9;
            let radius = scale * Math.sqrt(number);
            let positionX = radius * Math.sin(angle) + canvas.width / 2;
            let positionY = radius * Math.cos(angle) + canvas.height / 2;
            c.fillStyle = `hsl(${hue}, 100%, 50%)`;
            c.strokeStyle = `hsl(${hue}-1, 100%, 50%)`;
            c.lineWidth = 15;
            c.beginPath();
            c.arc(positionX, positionY, number, 0, Math.PI * 2);
            c.closePath();
            c.fill();
            c.stroke();
            hue += .05;
            number += .3;
        }

        const animate = () => {
            drawFlower();
            if (number > 250) {
               return setTimeout(() => {
                     reset();
                }, 2000);
                // return reset();
            }else {
            requestAnimationFrame(animate);}
        }
        animate();
    });



    return(
        <>
        <canvas 
        ref={ref}
        width={size.width}
        height={size.height}
        ></canvas>

        </>
    );
}

export default CanvasFlower;