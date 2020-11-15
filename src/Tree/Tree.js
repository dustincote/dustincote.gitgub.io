import React, { useEffect, useRef, useState } from 'react';
import './Tree.css';


const Tree = (props) => {
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
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


        function drawTree(startx, startv, len, angle, branchWidth, color1, color2) {
            c.beginPath();
            c.save();
            c.strokeStyle = color1;
            c.fillStyle = color2;
            c.shadowBlur = 15;
            c.shadowColor = 'black';
            c.lineWidth = branchWidth;
            c.translate(startx, startv);
            c.rotate(angle * Math.PI / 180);
            c.moveTo(0, 0);
            // c.lineTo(0, -len);
            if (angle > 0) {
                c.bezierCurveTo(20, -len / 2, 20, -len / 2, 0, -len);
            } else {
                c.bezierCurveTo(20, -len / 2, -20, -len / 2, 0, -len);
            }
            c.stroke();

            if (len < 10) {
                c.beginPath();
                c.arc(0, -len, 10, 0, Math.PI / 2);
                c.fill();
                c.restore();
                return;
            }
            drawTree(0, -len, len * 0.83, angle + 9, branchWidth * 0.6);
            drawTree(0, -len, len * 0.83, angle - 9, branchWidth * 0.6);
            c.restore();


        }

        drawTree(canvas.width / 2, canvas.height - 70, 100, 0, 25, 'brown', 'green');
    });



    return (
        <>
            <canvas
                ref={ref}
                width={size.width}
                height={size.height}
            ></canvas>

        </>
    );
}

export default Tree;