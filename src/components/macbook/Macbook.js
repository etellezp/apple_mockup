import React from 'react';
import Navbar from '../navbar/Navbar'
import { Grid, Typography } from '@material-ui/core'


function Macbook() {
  return (
    <>
      <Navbar />
      <Grid container justify="center" alignItems="center" style={{marginTop: '100px'}}>
        <Typography variant="h2">
          Macbook coming soon
        </Typography>
      </Grid>
    </>
  )
}

export default Macbook;
