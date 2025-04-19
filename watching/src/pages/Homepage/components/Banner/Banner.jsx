import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import "./Banner.style.css";
import { Alert, Box, CircularProgress, Typography } from '@mui/material';

const Banner = () => {

    const { data, isLoading, isError, error } =usePopularMoviesQuery();
    console.log('ddd', data);
    if(isLoading) {
        return (
            <Box container sx={{ height: "56vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <CircularProgress sx={{color: "#fff"}} />
            </Box>
        )
    }
    if(isError) {
        return (
            <Box container sx={{ height: "56vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Alert severity="error">{error.message}</Alert>
            </Box>
        )
    }
    return (
    <div style={{
        backgroundImage: "url("+ `https://image.tmdb.org/t/p/original/${data?.results[0].poster_path}` +")",
    }}
    className="banner" >
        <Box sx={{ color: "#f5f5f5" }} className="banner-text-area">
            <Typography variant="h2">{data?.results[0].title}</Typography>
            <Typography variant="body2">{data?.results[0].overview}</Typography>
        </Box>
    </div>
  )
}

export default Banner
