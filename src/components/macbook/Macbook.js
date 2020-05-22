import React from 'react';
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import macbook from '../../assets/macbook.png'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, IconButton, TextField, Slide, Grow } from '@material-ui/core'
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone'
import LaptopMacTwoToneIcon from '@material-ui/icons/LaptopMacTwoTone'
import WatchTwoToneIcon from '@material-ui/icons/WatchTwoTone'
import macs from '../../assets/macs.png'

const useStyles = makeStyles(() => ({
  gridStyle: {
    height: `calc(65vh - 80px)`,
    marginLeft: '80px',
    width: '100%',
    background: '#000'
  },
  macbookInfo: {
    paddingLeft: '50px',
    paddingTop: '50px',
  },
  title: {
    color: '#5AC8FA',
    fontSize: '28px',
    paddingBottom: '45px',
    fontWeight: '600',
  },
  bigText: {
    color: '#fff',
    fontSize: '90px',
    lineHeight: 1,
    paddingBottom: '90px',
    fontWeight: '700',
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
    paddingTop: '65px'
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
        <Grid item container direction="column" xs={5} className={classes.macbookInfo}>
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
      </Grid>
      </Slide>
      <Slide direction='up' in={true} mountOnEnter unmountOnExit timeout={1500}>
      <Grid container>
        <Grid item xs={2}>
          <Typography className={classes.buyNow}>
            Buy now >
          </Typography>
        </Grid>
        <Grid item container xs={10}>
          <Grid item xs={6} align='end'>
            <img src={macs} alt="apple computers" className={classes.macsImg} />
          </Grid>
          <Grid item xs={6} style={{backgroundColor: '#f2f2f2', marginTop: '-50px', height: '300px', zIndex: 2}}>
            <Typography className={classes.subscribe}>
              Subscribe Now
            </Typography>
            <TextField placeholder="Enter the email address" variant="filled" size='small' style={{width: '250px', paddingTop: '50px', paddingLeft: '80px'}}/>
            <button style={{color: '#fff', background: '#000', height: '50px', width: '120px', fontWeight: 'bold', fontSize: '12px', marginTop: '50px', marginLeft: '25px'}}>Subscribe</button>
          </Grid>
        </Grid>
      </Grid>
      </Slide>
    </div>
  )
}

export default Macbook;
