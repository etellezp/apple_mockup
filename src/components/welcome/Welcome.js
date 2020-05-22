import React from 'react';
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, IconButton, Slide, Zoom } from '@material-ui/core'
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone'
import LaptopMacTwoToneIcon from '@material-ui/icons/LaptopMacTwoTone'
import WatchTwoToneIcon from '@material-ui/icons/WatchTwoTone'

const useStyles = makeStyles(() => ({
  gridStyle: {
    background: 'linear-gradient(90deg, #F2F2F2 0%, #FFFFFF 100%)',
    height: `calc(100vh - 80px)`,
    marginLeft: '80px',
    width: '100%',
  },
  title: {
    fontSize: '70px',
    marginRight: '80px',
    marginBottom: '150px',
    fontWeight: '700',
    position: 'relative',
    zIndex: 1,
  },
  products: {
    color: '#5AC8FA',
    marginRight: '80px',
    marginBottom: '150px',
  },
  icons: {
    marginRight: '80px',
  },
  icon: {
    color: '#CCC',
    transform: 'scale(1.2)',
    "&:hover": {
      transform: 'scale(1.5)'
    }
  },
  appleLogo: {
    height: '300px',
    marginRight: '80px',
    marginBottom: '-180px',
  },
}))

function Welcome() {
  const classes = useStyles()

  return (
    <div style={{overflowX: 'hidden'}}>
      <Navbar />
      <Grid container direction="column" justify="center" alignItems="center" className={classes.gridStyle}>
        <Grid item align="center">
          <img className={classes.appleLogo} src="https://www.transparentpng.com/thumb/apple-logo/UyOL60-apple-logo-wonderful-picture-images.png" alt="Apple Logo" />
          <Slide direction="down" in={true} mountOnEnter unmountOnExit timeout={1000}>
            <Typography className={classes.title}>
              Welcome to Apple
            </Typography>
          </Slide>
        </Grid>
        <Grid item>
          <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={1000}>
            <Typography className={classes.products}>
              See our Products
            </Typography>
          </Slide>
        </Grid>
        <Grid item>
          <Zoom in={true} timeout={2000}>
            <div className={classes.icons}>
              <IconButton
                component={Link}
                to="/iphone"
                className={classes.icon}
              >
                <PhoneIphoneTwoToneIcon />
              </IconButton>
              <IconButton
                component={Link}
                to="/macbook"
                className={classes.icon}
              >
                <LaptopMacTwoToneIcon />
              </IconButton>
              <IconButton
                component={Link}
                to="/watch"
                className={classes.icon}
              >
                <WatchTwoToneIcon />
              </IconButton>
            </div>
          </Zoom>
        </Grid>
      </Grid>
    </div>
  )
}

export default Welcome;
