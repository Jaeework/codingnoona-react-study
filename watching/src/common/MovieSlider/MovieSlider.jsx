import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box } from '@mui/material';
import './MovieSlider.style.css';
import MovieCard from '../MovieCard/MovieCard'

const MovieSlider = ({ title, movies, responsive }) => {
    return (
        <Box container sx={{ my: "20px"}}>
            <h3 className="slider-title">{title}</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="movie-slider"
                containerClass="carousel-container"
                autoPlay={true}
                responsive={responsive}
            >
                {movies.results.map((movie, index) => {
                    return <MovieCard movie={movie} key={index} />
                })}
            </Carousel>
        </Box>
    )
}

export default MovieSlider
