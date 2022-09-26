import React from "react";
import {
  Container,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("Iron Man");

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${searchValue}&apikey=72213a33`)
      .then((res) => {
        console.log(res);
        setMovies(res.data.Search);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchValue]);

  return (
    <div>
      <Typography variant="h3" align="center" className="heading">
        MovieLand
      </Typography>
      <Container maxWidth="lg" className="search-bar" align="center">
        <TextField
          id="outline-basic"
          variant="outlined"
          className="searchbar"
          placeholder="Search Movie"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </Container>
      {movies?.length > 0 ? (
        <Container maxWidth="lg" className="card-container">
          <Grid container spacing={4}>
            {movies.map((movie, index) => (
              <MovieList movie={movie} key={index} />
            ))}
          </Grid>
        </Container>
      ) : (
        <Container maxWidth="md" align="center">
          <CircularProgress />
          <Typography variant="h5">No Movies Found</Typography>
        </Container>
      )}
    </div>
  );
};

export default App;
