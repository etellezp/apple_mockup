import React, { useState } from 'react';
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, IconButton, Slide, Grow } from '@material-ui/core'
import blackWatch from '../../assets/blackWatch.png'
import whiteWatch from '../../assets/whiteWatch.png'
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone'
import LaptopMacTwoToneIcon from '@material-ui/icons/LaptopMacTwoTone'
import WatchTwoToneIcon from '@material-ui/icons/WatchTwoTone'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(() => ({
  gridStyle: {
    height: `calc(75vh - 80px)`,
    marginLeft: '80px',
    width: '100%',
  },
  watchInfo: {
    background: 'linear-gradient(90deg, #F2F2F2 0%, #FFFFFF 100%)',
    paddingLeft: '50px',
    paddingTop: '50px',
  },
  title: {
    color: '#FF2D55',
    fontSize: '28px',
    paddingBottom: '25px',
    fontWeight: '600',
  },
  bigText: {
    color: '#000',
    fontSize: '90px',
    lineHeight: 1,
    paddingBottom: '150px',
    fontWeight: '700',
  },
  text: {
    color: '#999',
    fontSize: '20px'
  },
  watchImg: {
    height: '450px',
    paddingTop: '80px'
  },
  icons: {
    paddingTop: '250px',
    paddingLeft: '200px'
  },
  price: {
    paddingLeft: '50px',
    paddingTop: '50px',
    fontSize: '35px',
    color: '#CCC',
    lineHeight: 0.8,
    fontWeight: '600'
  },
  buttons: {
    paddingTop: '50px',
    paddingLeft: '175px'
  },
  button: {
    color: '#707070',
  }
}))

function Watch() {
  const classes = useStyles()
  const [watch, setWatch] = useState("black")

  const handleChange = (event) => {
    setWatch(event.target.value)
  }

  return (
    <div style={{overflowX: 'hidden'}}>
      <Navbar />
        <Grid container className={classes.gridStyle}>
        <Slide direction='right' in={true} timeout={1000} mountOnEnter unmountOnExit>
          <Grid item container direction="column" xs={6} className={classes.watchInfo}>
            <Grid item>
              <Typography className={classes.title}>
                Apple Watch
              </Typography>
            </Grid>

            <Grid item>
              <Typography className={classes.bigText}>
                Change starts {<br />}
                within.
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.text}>
                Apple Watch Series 4. Fundamentally redesigned and {<br />}
                re-engineered to help you be even more active, {<br />}
                healthy, and connected.
              </Typography>
            </Grid>
          </Grid>
          </Slide>
          <Grid item container xs={6}>
            <Grow in={true} timeout={1800}>
              <Grid item>
                {watch === "black" ?
                  <img src={blackWatch} alt="apple watch" className={classes.watchImg} />
                  :
                  <img src={whiteWatch} alt="apple watch" className={classes.watchImg} />
                }
              </Grid>
            </Grow>
            <Grid item className={classes.icons}>
              <IconButton
                component={Link}
                to="/iphone"
                style={{display: 'block', color: '#CCC'}}
              >
                <PhoneIphoneTwoToneIcon />
              </IconButton>
              <IconButton
                component={Link}
                to="/macbook"
                style={{display: 'block', color: '#CCC'}}
              >
                <LaptopMacTwoToneIcon />
              </IconButton>
              <IconButton
                component={Link}
                to="/watch"
                style={{display: 'block', color: '#707070'}}
                disabled
              >
                <WatchTwoToneIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      <Slide direction='up' in={true} timeout={1500} mountOnEnter unmountOnExit>
        <Grid container style={{marginLeft: '80px'}}>
          <Grid item xs={6}>
            <Typography className={classes.price}>
              From $699 {<br />}
              <span style={{color: '#FF2D55', fontSize: '15px'}}>Buy now <span style={{fontSize: '10px'}}>></span></span>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <FormControl className={classes.buttons}>
              <RadioGroup row aria-label="position" name="position" defaultValue="black">
                <FormControlLabel
                  value="white"
                  control={<Radio color='primary'/>}
                  label="white"
                  labelPlacement="bottom"
                  onChange={handleChange}
                  className={classes.button}
                />
                <FormControlLabel
                  value="black"
                  control={<Radio color='primary'/>}
                  label="black"
                  labelPlacement="bottom"
                  onChange={handleChange}
                  className={classes.button}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Slide>
    </div>
  )
}

export default Watch;
