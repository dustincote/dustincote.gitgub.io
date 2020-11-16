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
import swal from 'sweetalert';

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
    nav:{
        margin: 15,
        color:'black',
        width: 80,
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

    const changeDrawing = (event) => {
      let name=event.currentTarget.name
        // console.log('event.target.name:', event.target.name,'event.currentTarget.name',event.currentTarget.name);
        if (event.currentTarget.name === 'tree') {
            swal({
                title: "Longer Render Time",
                text: "Just wanted to let you know that the tree takes a little while to render, it is not broken.",
                timer: 2000,
                buttons:false}).then(()=> {
                    props.setActive(name);
                })
        } else {props.setActive(event.currentTarget.name);}
    }

    return (

        <div>
            {size.width>900? <Grid container wrap='nowrap' justify='flex-start' alignItems='center' >
                <Grid item xs={8} sm={5} md={4} lg={2} align='center'>

                    <Card className={classes.root} style={{ height: size.width>900?size.height:'auto'}}>
                        <Grid item xs={10}>
                            <Avatar alt="Headshot" src="headshot.jpeg" className={classes.media} />
                            <CardContent>
                                <Typography variant='h3' className={classes.name}>Dustin Cote</Typography>
                                <Typography className={classes.body}>Full Stack Developer</Typography>
                                <Typography className={classes.body}>DustinCote@hotmail.com</Typography><br/>

                                
                            </CardContent>
                                <Button className={classes.goback} name='fibflower' onClick={changeDrawing} variant='contained' > Spiral</Button><br /><br />
                                <Button className={classes.goback} name='tree' onClick={changeDrawing} variant='contained' > Tree</Button><br /><br />
                                <Button className={classes.goback} name='random' onClick={changeDrawing} variant='contained' > Random</Button><br /><br />
                                <Button className={classes.goback} onClick={goBack} variant='contained' ><ArrowBackIcon/> Back</Button>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>: 
            <div className='canvas-buttons'>
            <Button className={classes.nav} name='fibflower' onClick={changeDrawing} variant='contained' > Spiral</Button>
                                <Button className={classes.nav} name='tree' onClick={changeDrawing} variant='contained' > Tree</Button>
                                <Button className={classes.nav} name='random' onClick={changeDrawing} variant='contained' > Random</Button>
                                <Button className={classes.nav} onClick={goBack} variant='contained' ><ArrowBackIcon/> Back</Button>
                                </div>
            }
        </div>
    );
}

export default withRouter(SideNav)