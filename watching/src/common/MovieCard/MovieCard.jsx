import { Box, Chip, Stack } from '@mui/material'
import React from 'react'
import "./MovieCard.style.css";

const UnderAge = () => (
    <Box component="span" 
        sx={{
            bgcolor: "success.main", 
            width:30, 
            height: 30, 
            borderRadius: "50%",
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            fontSize: "0.75rem"}}>
        ALL
    </Box>
);
const OverAge = () => (
    <Box component="span" 
        sx={{
            bgcolor: "error.main", 
            width:30, 
            height: 30, 
            borderRadius: "50%",
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            fontSize: "0.75rem"}}>
        18
    </Box>
);

const MovieCard = ({ movie }) => {
    return (
        <div
            style={{ 
                backgroundImage: "url(" + `https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}` + ")" }}
            className="movie-card">
            <div className="overlay">
                <div>
                    <h2 className="movie-title">{movie.title}</h2>
                    <Stack 
                        direction="row"
                        useFlexGap
                        sx={{flexWrap: "wrap"}}
                        spacing={1}>
                        {movie.genre_ids.map((id) => {
                            return <Chip key={id} 
                                        label={id}
                                        size="small" 
                                        variant="outlined" />
                        })}
                    </Stack>
                </div>
                <div className="movie-rate-infos">
                    <div>{movie.vote_average.toFixed(2)}</div>
                    <div>{Math.floor(movie.popularity)}</div>
                    <div>{movie.adult ? <OverAge /> : <UnderAge /> }</div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
