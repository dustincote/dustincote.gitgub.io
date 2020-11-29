import React, { useEffect, useRef } from 'react';



const ShootingStar = (props) => {
    const ref = useRef();
useEffect( () => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particlesArray = [];
    let stop = false;
    const numberOfParticles = 15;



    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 1.5;
            this.weight = Math.random() * 6+2;
            this.directionX = -5;

        }
        update() {
            if (this.y > canvas.height/3*2 || this.weight > 8.1) {
                this.y = 0 - this.size;
                this.weight = Math.random() * 5+3;
                this.x = Math.random() * canvas.width * 1.3;
            }
            this.weight += 0.01;
            this.y += this.weight;
            this.x += this.directionX;


        }
        draw() {
            let hue = 179;
            ctx.fillStyle = `hsl(${hue}, 100%, 92%)`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }
    function init() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            let x = Math.random() * canvas.width * 1.4;
            // if(i%2===0){x = Math.random()* canvas.width * -1.2}
            const y = Math.random() * -canvas.height * .9;
            particlesArray.push(new Particle(x, y))
        }
    }

    function animate() {
        if(!stop){
        ctx.fillStyle = 'rgba(0,0,0,1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);}
    }
    init();
    animate();

    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    })
    function setStop (){
        stop = true
    }
    return setStop
},[]);




        return (
            <>
                <canvas ref={ref} width={window.innerWidth} height={window.innerHeight} />
            </>
        );
}

export default ShootingStar