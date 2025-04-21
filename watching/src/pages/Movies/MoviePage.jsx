import React, { useEffect, useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import LoadingSpinner from '../../common/components/LoadingSpinner';
import AlertMessage from '../../common/components/AlertMessage';
import MovieCard from '../../common/MovieCard/MovieCard'
import { useSearchParams } from 'react-router-dom';
import { Grid, Pagination } from '@mui/material';

// 경로 2가지
// nav바에서 클릭해서 온 경우 => popular Movie 보여주기
// keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page 바꿔주기
// page 값이 바뀔때마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");

  useEffect(() => {
    setPage(1);
  },[keyword]);

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });

  const handlePageChange = (event, value) => {
    setPage(value);
  }
  console.log('ddd', data);
  if (isLoading) return <LoadingSpinner />
  if (isError) return <AlertMessage type="error" message={error.message} />
  return (
    <Grid sx={{ p: "20px" }} container spacing={2}>
      <Grid sx={{color:"#fff"}} size={{ md: 4, xs: 12 }}>
        필터
      </Grid>
      <Grid size={{ md: 8, xs: 12 }}>
        <Grid container spacing={2}>
          {data?.results.length > 0 ? data?.results.map((movie, index) => {
            return <Grid key={index} size={{ lg:4 ,md: 6, xs: 12 }}>
              <MovieCard movie={movie} />
            </Grid>
          }) : <AlertMessage type="warning" message={"표시할 결과가 없습니다."} /> }
        </Grid>
        <Pagination 
          boundaryCount={0}
          siblingCount={4}
          showFirstButton="true"
          showLastButton="true"
          count={data?.total_pages > 500 ? 500 : data?.total_pages} 
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          color="error"
          sx={{
            '& .MuiPaginationItem-root': {
              color: '#fff',
            },
            '& .MuiSvgIcon-root': {
              color: '#fff'
            },
            '& .Mui-selected': {
              color: "error.dark",
            },
            '& .MuiPaginationItem-outlined:hover' : {
              color: 'error.main',
              backgroundColor: "rgba(211, 47, 47, 0.12)",
            },
            my : "20px",
          }}
          />
      </Grid>

    </Grid>
  )
}

export default MoviePage
