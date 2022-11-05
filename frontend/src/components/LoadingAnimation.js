import React from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'

function LoadingAnimation() {
  return (
    <Grid   direction='column'
            container
            alignItems='center'>
            
            <Grid   item>
                <CircularProgress color='primary' />
            </Grid>
    </Grid>
  )
}

export default LoadingAnimation;
