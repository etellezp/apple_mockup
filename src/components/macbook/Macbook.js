import React from 'react';
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import macbook from '../../assets/macbook.png'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, IconButton, TextField, Slide, Grow, Hidden } from '@material-ui/core'
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone'
import LaptopMacTwoToneIcon from '@material-ui/icons/LaptopMacTwoTone'
import WatchTwoToneIcon from '@material-ui/icons/WatchTwoTone'
import macs from '../../assets/macs.png'

const useStyles = makeStyles((theme) => ({
  gridStyle: {
    height: `calc(65vh - 80px)`,
    marginLeft: '80px',
    width: '100%',
    background: '#000',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0px'
    },
  },
  macbookInfo: {
    paddingLeft: '50px',
    paddingTop: '50px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justify: 'center',
      alignItems: 'center',
      paddingLeft: 0,
    },
  },
  title: {
    color: '#5AC8FA',
    fontSize: '28px',
    paddingBottom: '45px',
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  bigText: {
    color: '#fff',
    fontSize: '90px',
    lineHeight: 1,
    paddingBottom: '90px',
    fontWeight: '700',
    [theme.breakpoints.down('lg')]: {
      fontSize: '80px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '70px',
    },
  },
  text: {
    color: '#CCC',
    fontSize: '16px',
    display: 'inline-block',
    paddingRight: '80px',
  },
  macbookImg: {
    height: 'calc(65vh - 80px)',
    opacity: 0.5
  },
  icons: {
    paddingTop: '320px'
  },
  macsImg: {
    height: '250px',
    width: '80%',
    marginTop: '80px'
  },
  macInfo: {
    fontSize: '40px',
    fontWeight: '700',
    opacity: '0.44',
    lineHeight: 1,
  },
  buyNow: {
    color: '#5ac8fa',
    fontWeight: 'bold',
    paddingLeft: '130px',
    paddingTop: '65px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '15px',
      paddingBottom: '15px',
      paddingLeft: 0,
    },
  },
  subscribe: {
    color: '#000',
    fontSize: '36px',
    fontWeight: 600,
    paddingTop: '50px',
    paddingLeft: '80px'
  },
  hover: {
    "&:hover": {
      transform: 'scale(1.5)'
    }
  }
}))

function Macbook() {
  const classes = useStyles()
  return (
    <div style={{overflowX: 'hidden'}}>
      <Navbar />
      <Slide direction='left' in={true} mountOnEnter unmountOnExit timeout={0}>
      <Grid container className={classes.gridStyle}>
        <Grid item container direction="column" xs={12} lg={5} className={classes.macbookInfo}>
          <Slide direction='right' in={true} mountOnEnter unmountOnExit timeout={1500}>
            <Grid item>
              <Typography className={classes.title}>
                Macbook Pro
              </Typography>
            </Grid>
          </Slide>
          <Slide direction='right' in={true} mountOnEnter unmountOnExit timeout={1500}>
            <Grid item>
              <Typography className={classes.bigText}>
                More power. {<br />}
                More pro
              </Typography>
            </Grid>
          </Slide>
          <Grow in={true} timeout={3000}>
            <Grid item>
              <Typography className={classes.text}>
                <span className={classes.macInfo}>8-core</span> {<br />}
                intel processor
              </Typography>
              <Typography className={classes.text}>
                <span className={classes.macInfo}>32GB</span> {<br />}
                Memory
              </Typography>
            </Grid>
          </Grow>
        </Grid>
        <Hidden mdDown={true}>
          <Grid item container xs={6}>
              <Grid item>
                <img src={macbook} alt="macbook pro" className={classes.macbookImg} />
              </Grid>
            <Grid item className={classes.icons}>
              <IconButton
                component={Link}
                to="/iphone"
                style={{display: 'block', color: '#707070'}}
                className={classes.hover}
              >
                <PhoneIphoneTwoToneIcon />
              </IconButton>
              <IconButton
                component={Link}
                to="/macbook"
                style={{display: 'block', color: '#CCC'}}
                disabled
                className={classes.hover}
              >
                <LaptopMacTwoToneIcon />
              </IconButton>
              <IconButton
                component={Link}
                to="/watch"
                style={{display: 'block', color: '#707070'}}
                className={classes.hover}
              >
                <WatchTwoToneIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
      </Slide>
      <Slide direction='up' in={true} mountOnEnter unmountOnExit timeout={1500}>
      <Grid container justify="center">
        <Hidden lgUp={true}>
          <Grid item align="center">
            <img src={macbook} alt="macbook pro" className={classes.macbookImg} />
          </Grid>
        </Hidden>
        <Hidden mdDown={true}>
          <Grid item xs={2}>
            <Typography className={classes.buyNow}>
              Buy now >
            </Typography>
          </Grid>
        </Hidden>
        <Grid item container xs={12} lg={10}>
          <Hidden mdDown={true}>
            <Grid item xs={6} align='end'>
              <img src={macs} alt="apple computers" className={classes.macsImg} />
            </Grid>
          </Hidden>
          <Grid item xs={12} lg={6} style={{backgroundColor: '#f2f2f2', marginTop: '-50px', height: '300px', zIndex: 2}}>
            <Typography className={classes.subscribe}>
              Subscribe Now
            </Typography>
            <TextField placeholder="Enter the email address" variant="filled" size='small' style={{width: '250px', paddingTop: '50px', paddingLeft: '80px'}}/>
            <button style={{color: '#fff', background: '#000', height: '50px', width: '120px', fontWeight: 'bold', fontSize: '12px', marginTop: '50px', marginLeft: '25px'}}>Subscribe</button>
          </Grid>
        </Grid>
        <Hidden lgUp={true}>
          <Grid item container xs={12} align='center' justify='center'>
            <Typography className={classes.buyNow}>
              Buy now >
            </Typography>
          </Grid>
        </Hidden>
      </Grid>
      </Slide>
    </div>
  )
}

export default Macbook;
