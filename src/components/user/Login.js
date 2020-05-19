import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardContent, TextField, Typography, Button } from '@material-ui/core'
import auth from '../auth/Auth'

const useStyles = makeStyles(() => ({
  gridStyle: {
    height: '100vh',
    width: '100%',
    background: 'linear-gradient(180deg, #5AC8FA 25%, #FFFFFF 70%)'
  },
  signup: {
    marginTop: '30px',
    marginBottom: '30px',
  },
  input: {
    marginTop: '30px',
    marginBottom: '10px'
  },
  button: {
    marginTop: '30px',
    marginBottom: '30px',
    width: '200px',
    height: '45px',
    fontSize: '18px',
  }
}))


function Register(props) {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault()
      auth.login()
      props.history.push('/apple')
  }

  return (
    <div style={{overflowX: 'hidden'}}>
      <Grid container className={classes.gridStyle} justify="center" alignItems="center">
        <Grid item sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h3" className={classes.signup} align="center">
                Sign-In
              </Typography>
              <form onSubmit={handleSubmit}>
                <div style={{margin: '0px 40px'}}>
                  <TextField
                    required
                    label="Email"
                    type="email"
                    placeholder="user@email.com"
                    variant="outlined"
                    fullWidth
                    className={classes.input}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <TextField
                    required
                    type="password"
                    label="Password"
                    placeholder="********"
                    variant="outlined"
                    fullWidth
                    className={classes.input}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <Grid container justify="center" alignItems="center">
                    <Button variant="contained" color="primary" className={classes.button} type="submit">
                      Sign-In
                    </Button>
                  </Grid>
                </div>
              </form>
            </CardContent>
          </Card>
          <Typography style={{marginTop: '10px'}}>
            Not registered?
          </Typography>
          <Link to="/register" style={{color: '#5AC8FA', textDecoration: 'none'}}>Sign-up</Link>
        </Grid>
      </Grid>
    </div>
  )
}

export default Register;
