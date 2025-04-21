import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import "./Banner.style.css";
import { Box, Typography } from '@mui/material';
import LoadingSpinner from '../../../../common/components/LoadingSpinner';
import AlertMessage from '../../../../common/components/AlertMessage';

const Banner = () => {

    const { data, isLoading, isError, error } =usePopularMoviesQuery();

    if(isLoading) {
        return <LoadingSpinner />
    }
    if(isError) {
        return <AlertMessage type="error" message={error.message} />
    }
    return (
    <div style={{
        backgroundImage: "url("+ `https://image.tmdb.org/t/p/original/${data?.results[0].poster_path}` +")",
    }}
    className="banner" >
        <Box sx={{ color: "#f5f5f5" }} className="banner-text-area">
            <Typography variant="h2" color="error">{data?.results[0].title}</Typography>
            <Typography variant="body2">{data?.results[0].overview}</Typography>
        </Box>
    </div>
  )
}

export default Banner
