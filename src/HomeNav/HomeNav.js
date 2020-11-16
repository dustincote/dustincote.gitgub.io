import React from 'react';
import { withRouter } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ContactMailIcon from '@material-ui/icons/ContactMail';


const useStyles = makeStyles({
    root: {
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


export default function HomeNav(props) {
    const classes = useStyles();

    const goToGitHub = () => {
        window.open("https://github.com/dustincote");
    };

    const goToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/dustin-t-cote/");
    };

    const goToEmail = () => {
        window.location.href = "mailto:dustincote@hotmail.com?subject=More Info Requested%20From%20Portfolio";
    }
    const size = props.size

    return (

                    <Card className={classes.root}
                        style={{
                            marginTop: size.width>900? 0:20,
                            height: size.width > 900 ? size.height : 'auto',
                            position: size.width > 900 ? 'fixed' : 'relative',
                            top: 0,
                            maxWidth: size.width > 900 ? 300 : size.width
                        }}>
                        <Grid item xs={10}>
                            <Avatar alt="Headshot" src="headshot.jpeg" className={classes.media} />
                            <CardContent>
                                <Typography variant='h3' className={classes.name}>Dustin Cote</Typography>
                                <Typography className={classes.body}>Full Stack Developer</Typography><br />
                                <Typography className={classes.body}> I will be graduating from Emerging Digital Academy
                                in the beginning of December 2020, I have a passion for technology and a desire to
                                learn new things.
                                </Typography><br />
                                <Typography className={classes.body}> Contact Me:</Typography>
                                <Typography className={classes.body}>dustincote@hotmail.com</Typography>
                                <IconButton onClick={goToLinkedIn} className={classes.body}><LinkedInIcon /></IconButton>
                                <IconButton onClick={goToGitHub} className={classes.body}><GitHubIcon /></IconButton>
                                <IconButton onClick={goToEmail} className={classes.body}><ContactMailIcon /></IconButton>

                            </CardContent>
                        </Grid>
                    </Card>
              
    );
}


