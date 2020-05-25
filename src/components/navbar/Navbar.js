import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, Button, Hidden, Menu, MenuItem } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import MenuIcon from '@material-ui/icons/Menu'
import auth from '../../components/auth/Auth'

const useStyles = makeStyles((theme) => ({
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
  },
}))

const Navbar = (props) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{boxShadow: 'none'}}>
        <Toolbar className={classes.navStyle}>
          <Typography className={classes.logo}>
            <Link to='/apple'>
              <img className={classes.appleLogo} src="https://www.transparentpng.com/thumb/apple-logo/UyOL60-apple-logo-wonderful-picture-images.png" alt="Apple Logo" />
            </Link>
          </Typography>
          <Hidden smDown={true}>
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
          </Hidden>
          <Hidden mdUp={true}>
            <div style={{marginLeft: 'auto'}}>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  component={Link}
                  to="/iphone"
                >
                  iPhone
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/macbook"
                >
                  Macbook Pro
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/watch"
                >
                  Watch
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/watch"
                >
                  Notify Me
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/login"
                  onClick={() => {
                    auth.signout()
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;
