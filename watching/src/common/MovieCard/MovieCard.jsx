import { Box, Chip, Stack } from '@mui/material'
import React from 'react'
import "./MovieCard.style.css";
import StarIcon from '@mui/icons-material/Star';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';


const UnderAge = () => (
    <Box component="span" 
        sx={{
            // bgcolor: "success.main", 
            border: "1px solid #fff",
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
            // bgcolor: "error.main", 
            border: "1px solid #fff",
            width:30, 
            height: 30, 
            borderRadius: "50%",
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            fontSize: "0.75rem"}}>
        18+
    </Box>
);

const MovieCard = ({ movie }) => {
    const {data:genreData} = useMovieGenreQuery();
    const showGenre = (genreIdList) => {
        if(!genreData) return [];
        const genreNameList = genreIdList.map((id) => {
            const genreObj = genreData.find((genre)=> genre.id === id);
            return genreObj.name;
        }); 

        return genreNameList;
    }
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
                        {showGenre(movie.genre_ids).map((genre) => {
                            return <Chip key={genre} 
                                        label={genre}
                                        size="small" 
                                        variant="outlined" />
                        })}
                    </Stack>
                </div>
                <div className="movie-rate-infos">
                    <Box sx={{display:"flex", alignItems:"center"}}>
                        <StarIcon fontSize="small" />
                        {movie.vote_average.toFixed(2)}
                    </Box>
                    <div>{Math.floor(movie.popularity)}</div>
                    <div>{movie.adult ? <OverAge /> : <UnderAge /> }</div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
