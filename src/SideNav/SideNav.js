import React, { useState, useEffect } from 'react';
import '../Home/Portfolio.css';
import { withRouter } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import { CardActions } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        // minHeight: window.innerHeight,
        backgroundColor: 'rgba(0,0,0,.5)',
        
    },
    goback:{
        color:'black',
        width: 80
    },
    name: {
        color: 'white',
        textShadow: "1.5px 3.5px black"
    },
    body: {

        color: 'white',
        textShadow: "1.5px 1.5px black",
    },
    media: {
        marginTop: 40,
        height: 200,
        width: 200,
    },
});


function SideNav(props) {
    const classes = useStyles();
    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    useEffect(() => {
        window.addEventListener('resize', sizeOfWindow);

        // returned function will be called on component unmount 
        return () => {
            window.removeEventListener('resize', sizeOfWindow)
        }
    }, []);


    const sizeOfWindow = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    const goBack = () => {
        props.history.push('/');
    }

    return (

        <div>
            <Grid container wrap='nowrap' justify='flex-start' alignItems='center' >
                <Grid item xs={8} sm={5} md={4} lg={2} align='center'>

                    <Card className={classes.root} style={{ height: size.width>900?size.height:'auto'}}>
                        <Grid item xs={10}>
                            <Avatar alt="Headshot" src="headshot.jpg" className={classes.media} />
                            <CardContent>
                                <Typography variant='h3' className={classes.name}>Dustin Cote</Typography>
                                <Typography className={classes.body}>Full Stack Developer</Typography>
                                <Typography className={classes.body}>DustinCote@hotmail.com</Typography><br/>
                                <Typography className={classes.body}>The tree will take a while to render</Typography><br/>

                                
                            </CardContent>
                                <Button className={classes.goback} onClick={() => props.setActive('fibflower')} variant='contained' > Spiral</Button><br /><br />
                                <Button className={classes.goback} onClick={() => props.setActive('tree')} variant='contained' > Tree</Button><br /><br />
                                <Button className={classes.goback} onClick={() => props.setActive('random')} variant='contained' > Random</Button><br /><br />
                                <Button className={classes.goback} onClick={goBack} variant='contained' ><ArrowBackIcon/> Back</Button>
                            
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default withRouter(SideNav)