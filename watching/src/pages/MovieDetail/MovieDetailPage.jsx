import React from 'react'
import { useMovieDetailQuery } from '../../hooks/useMovieDetail'
import { useParams } from 'react-router-dom';
import { Box, Button, Chip, Grid, Tab, Tabs } from '@mui/material'
import NoImage from '../../assets/no_image.png';
import LoadingSpinner from '../../common/components/LoadingSpinner';
import AlertMessage from '../../common/components/AlertMessage';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useMovieVideoQuery } from '../../hooks/useMovieVideo';
import TabContext from './components/TabContext/TabContext';

const MovieDetailPage = () => {
  const { id } = useParams();

  const {data: movie, isLoading, isError, error} = useMovieDetailQuery(id);
  
  const {
    data: videoData, 
    isLoading: isVideoLoading, 
    isError: isVideoError,
    error: videoError
  } = useMovieVideoQuery(id);

  
  // console.log('detail', movie);
  console.log('vvv', videoData);

  if(isLoading) return <LoadingSpinner />
  if(isError) return <AlertMessage type="error" message={error.message} />
  if(!movie) return <AlertMessage type="warning" message="영화 정보를 불러오지 못했습니다." /> 
  return (
    <Grid container sx={{color: "#fff"}}>
      <Grid container spacing={2}>
        <Grid size={{ md: 4, xs: 12}}>
          <div
            style={{
              position: "relative", 
              backgroundImage: 
                movie.poster_path
                ? `url('https://image.tmdb.org/t/p/original/${movie.poster_path}')`
                : `url(${NoImage})`,
              backgroundSize: "cover",
              backgroundPosition:"left 30%",
              width: "100%",
              height: "550px",
              }}
            >
            <Button
              startIcon={<PlayArrowIcon />}
              variant="contained" 
              sx={{
                position: "absolute",
                right: "10px",
                bottom: "10px",
                color:"#fff",
                backgroundColor: "blue",
                "&.Mui-disabled" : {
                  backgroundColor: "gray"
                }
              }} 
              disabled={!movie.video}
            >예고편 재생</Button>
          </div>
        </Grid>
        <Grid size={{ md: 8, xs: 12}}>
          <div>
            {movie.genres?.map((genre) => (
              <Chip key={genre.id} 
                label={genre.name}
                sx={{color: "#fff"}}
                size="large" 
                variant="outlined"
                />
          ))}
          </div>
          <div>{movie.title}</div>
          <div>
            <div>{movie.vote_average}</div>
            <div>{movie.popularity}</div>
            <div>{movie.adult}</div>
          </div>
          <div>{movie.budget.toLocaleString()}</div>
          <div>{movie.revenue.toLocaleString()}</div>
          <div>{movie.release_date}</div>
          <div>
            {movie.overview}
          </div>
        </Grid>
      </Grid>
      <TabContext id={id} />
    </Grid>
  )
}

export default MovieDetailPage
