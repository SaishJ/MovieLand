import React from "react";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";

function MovieList({ movie, index }) {
  return (
    <>
      <Grid item key={index} xs={12} sm={4} md={3}>
        <Card elevation={3} className="card">
          <CardMedia
            component="img"
            image={movie.Poster}
            className="card-image"
          />
          <CardContent>
            <h5>{movie.Title}</h5>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default MovieList;
