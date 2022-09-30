import React from "react";
import {
  Container,
  CircularProgress,
  Grid,
  Typography,
  Paper,
  Stack,
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
      <Typography
        variant="h3"
        align="center"
        className="heading"
        sx={{ color: "#F8F9FA" }}
      >
        MovieLand
      </Typography>
      <Stack sx={{ display: "flex", alignItems: "center" }}>
        <Paper
          component="form"
          sx={{
            borderRadius: 20,
            boredr: "1px solid #e3e3e3e",
            pl: 2,
            boxShadow: "none",
            width: "300px",
            margin: "15px 0",
          }}
        >
          <input
            className="search-bar"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Paper>
      </Stack>
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
          <Typography variant="h5" color="#F8F9FA">
            No Movies Found
          </Typography>
        </Container>
      )}
    </div>
  );
};

export default App;
