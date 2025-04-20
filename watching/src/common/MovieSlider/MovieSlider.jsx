import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box } from '@mui/material';
import './MovieSlider.style.css';
import MovieCard from '../MovieCard/MovieCard'

const MovieSlider = ({ title, movies, responsive }) => {
    return (
        <Box container sx={{ my: "30px"}}>
            <h3>{title}</h3>
            <Box className="carousel-wrapper">
                <Carousel
                    infinite={true}
                    centerMode={true}
                    itemClass="movie-slider p-1"
                    containerClass="carousel-container"
                    responsive={responsive}
                >
                    {movies.results.map((movie, index) => {
                        return <MovieCard movie={movie} key={index} />
                    })}
                </Carousel>
            </Box>
        </Box>
    )
}

export default MovieSlider
