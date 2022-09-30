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
            sx={{
              width: "100%",
              height: { md: "400px", sm: "300px", xs: "350px" },
              objectFit: "cover",
            }}
          />
          <CardContent sx={{ background: "#333", border: "none" }}>
            <h5 style={{ margin: "2px", color: "#F8F9FA" }}>
              {movie.Title.slice(0, 25)}
            </h5>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default MovieList;
