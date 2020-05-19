import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import auth from '../../components/auth/Auth'

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
  appleLogo: {
    height: '40px',
    marginTop: '20px',
    marginLeft: '20px',
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

const Navbar = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{boxShadow: 'none'}}>
        <Toolbar className={classes.navStyle}>
          <Typography className={classes.logo}>
            <Link to='/apple'>
              <img className={classes.appleLogo} src="https://www.transparentpng.com/thumb/apple-logo/UyOL60-apple-logo-wonderful-picture-images.png" alt="Apple Logo" />
            </Link>
          </Typography>
          <div style={{marginLeft: 'auto', marginRight: '50px'}}>
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
            <Button
              component={Link}
              to="/login"
              onClick={() => {
                auth.signout()
              }}
              className={classes.links}
            >
              <ExitToAppIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;
