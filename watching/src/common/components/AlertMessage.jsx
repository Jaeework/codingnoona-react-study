import { Alert, Box } from '@mui/material'
import React from 'react'

const AlertMessage = ({error}) => {
  return (
    <Box container sx={{ height: "56vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Alert severity="error">{error.message}</Alert>
    </Box>
  )
}

export default AlertMessage
