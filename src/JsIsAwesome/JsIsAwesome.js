
import React, { useEffect, useRef } from 'react';
import './JsIsAwesome.css';



const JsIsAwesome = (props) => {
    const ref = useRef();
    useEffect(() => {
        const canvas = ref.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let particlesArray = [];
        let stop = false;
        const numberOfParticles = 2000;



        let titleElement = document.getElementById('title1');
        let titleMeasurements = titleElement.getBoundingClientRect();
        let title = {
            x: titleMeasurements.left,
            y: titleMeasurements.top,
            width: titleMeasurements.width,
            height: 20,
        }


        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 1.5;
                this.weight = Math.random() * 3;
                this.directionX = this.x < canvas.width / 2 ? -1 : -1;

            }
            update() {
                if (this.y > canvas.height) {
                    this.y = 0 - this.size;
                    this.weight = Math.random() * 3;
                    this.x = Math.random() * canvas.width * 1.3;
                }
                this.weight += 0.01;
                this.y += this.weight;
                this.x += this.directionX;

                //check for collision between each particle and title element
                if (
                    this.x < title.x + title.width &&
                    this.x + this.size > title.x &&
                    this.y < title.y + title.height &&
                    this.y + this.size > title.y
                ) {
                    this.y -= 3;
                    this.weight -= .3;

                }
            }
            draw() {
                let hue = this.x / 3;
                ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }
        function init() {
            setStop()
            particlesArray = [];
            for (let i = 0; i < numberOfParticles; i++) {
                let x = Math.random() * canvas.width * 1.4;
                // if(i%2===0){x = Math.random()* canvas.width * -1.2}
                const y = Math.random() * -canvas.height * .9;
                particlesArray.push(new Particle(x, y))
            }
        }

        function animate() {
            if(stop){
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
            particlesArray=[]
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            titleMeasurements = titleElement.getBoundingClientRect();
            title = {
                x: titleMeasurements.left,
                y: titleMeasurements.top,
                width: titleMeasurements.width,
                height: 10,
            }
            setStop()
            init();
        })
        function setStop() {
            stop = !stop
        }
        return setStop
    }, []);




    return (
        <>
            <canvas ref={ref} width={window.innerWidth} height={window.innerHeight} />
            <h1 id='title1'>Dustin Cote</h1>
        </>
    );
}

export default JsIsAwesome;