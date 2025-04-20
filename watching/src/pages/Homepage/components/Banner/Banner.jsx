import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import "./Banner.style.css";
import { Box, Typography } from '@mui/material';
import LoadingSpinner from '../../../../common/components/LoadingSpinner';
import AlertMessage from '../../../../common/components/AlertMessage';

const Banner = () => {

    const { data, isLoading, isError, error } =usePopularMoviesQuery();
    console.log('ddd', data);
    if(isLoading) {
        return <LoadingSpinner />
    }
    if(isError) {
        return <AlertMessage error={error} />
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
