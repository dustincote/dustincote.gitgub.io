import React, { useState, useEffect} from 'react';
import './Portfolio.css';
import { withRouter } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import PortfolioPiece from '../PortfoilioPiece/PortfolioPiece';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HomeNav from '../HomeNav/HomeNav';


const useStyles = makeStyles({
    root: {
        minHeight: window.innerHeight,
        backgroundColor: 'rgba(0,0,0,.5)'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    name: {
        color: 'white',
        textShadow: "1.5px 3.5px black"
    },
    body:{
        
        color:'white',
        textShadow: "1.5px 1.5px black",
    },
    media:{
        marginTop: 40,
        height: 200,
        width: 200,
    },
});


export default  function Portfolio(props) {
    const classes = useStyles();
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    useEffect(() => {
        window.addEventListener('resize', sizeOfWindow);

        // returned function will be called on component unmount 
        return () => {
            window.removeEventListener('resize', sizeOfWindow)
        }
    }, []);

    // useEffect(()=> {window.location.reload()},[]);
    const projects = [
        {
            name:'Herdsman',
            image: "herdsman.png",
            description: 'Herdsman, A herd management system for ranchers',
            url: "https://herdsman.herokuapp.com/#/home",
            github: "https://github.com/dustincote/eda-solo-project"
        },

        {
            name: 'Html5 Canvas Fun',
            image: "canvasfun.png",
            description: 'Just some fun with Canvas',
            url: "/canvas",
            github: "none"
        },
        {
            name: 'Image Gallery',
            image: "imagegallery.png",
            description: 'First ever react App',
            url: "/https://ancient-spire-49988.herokuapp.com/",
            github: "https://github.com/dustincote/image-gallery"
        },
        {
            name: 'ToDo app',
            image: "todoapp.png",
            description: 'Simple Jquery ToDo App',
            url: "https://intense-savannah-07225.herokuapp.com/",
            github: "https://github.com/dustincote?tab=repositories"
        },

    ]
    const sizeOfWindow = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
        // console.log(`Width: ${window.innerWidth} Height: ${window.innerHeight}`);
    }



    return(

        <div>
            <Grid direction={size.width > 900 ? 'row': 'column'} container wrap='nowrap' justify='flex-start' alignItems='center' >
                <Grid item xs={10} sm={10} md={4} lg={3} align='center'>
                    <HomeNav size={size}/>  
                </Grid>
                <Grid container justify='center' alignItems='center'>
                    {projects.map(project =>  <Grid key={project.name} item xs={12} md={12} lg={6} align='center' >
                       <Grid item xs={10} md={8}>
                            <PortfolioPiece
                            key={project.name}
                            image={project.image}
                            projectDescription={project.description}
                            projectName={project.name}
                            url={project.url}
                            github={project.github}
                             />
                        </Grid>
                    </Grid>)}
                </Grid>
            </Grid>
        </div>
    );
}


