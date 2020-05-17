import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  navStyle: {
    backgroundColor: '#FFF',
    height: '80px',
  },
  logo: {
    backgroundColor: '#000',
    height: '80px',
    width: '80px',
    marginLeft: '-24px',
  },
  links: {
    textTransform: 'none',
    color: '#707070',
    width: '150px',
    fontSize: '18px'
  },
  notifyMe: {
    backgroundColor: '#5ac8fa',
    textTransform: 'none',
    color: '#fff',
    width: '156px',
    borderRadius: '23px',
    fontSize: '18px'
  }
}))

const Navbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{boxShadow: 'none'}}>
        <Toolbar className={classes.navStyle}>
          <Typography className={classes.logo}>
            A
          </Typography>
          <div style={{marginLeft: 'auto', marginRight: '140px'}}>
            <Button
              component={Link}
              to="/iphone"
              className={classes.links}
            >
              iPhone
            </Button>
            <Button
              component={Link}
              to="/macbook"
              className={classes.links}
            >
              Macbook Pro
            </Button>
            <Button
              component={Link}
              to="/watch"
              className={classes.links}
            >
              Watch
            </Button>
            <Button
              className={classes.notifyMe}
            >
              Notify me
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;
