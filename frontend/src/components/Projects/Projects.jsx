import {
  Container,
  Typography,
  Grid,
  Card,
  styled,
  CardMedia,
  Box,
  Divider,
} from "@mui/material";
import React from "react";

const Project = styled(Card)(({ theme }) => ({
  height: 200,
  border: "2px",
  borderRadius: 15,
  backgroundColor: theme.palette.third.main,
  padding: 7,
}));

export default function Projects() {
  return (
    <section id="Projects" style={{ height: "50vh" }}>
      <Box>
        <Typography
          variant="h6"
          color="second"
          component="h2"
          backgroundColor="second"
          textAlign="center"
          paddingBottom={6}
        >
          VIEW THE OTHER VERSIONS OF THIS PAGE
        </Typography>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Grid item xs={3}>
            <Project>
              <CardMedia
                component="img"
                height="140"
                image="/images/vue.png"
                alt="vue"
              ></CardMedia>
              <Divider
                variant="middle"
                sx={{ paddingTop: 2, borderBottomWidth: 3 }}
              />
              <Typography
                variant="body2"
                color="second"
                component="h2"
                sx={{ display: "flex", justifyContent: "center", padding: 1 }}
              >
                VUE
              </Typography>
            </Project>
          </Grid>
          <Grid item xs={3}>
            <Project>
              <CardMedia
                component="img"
                height="140"
                image="/images/angular.svg"
                alt="angular"
              ></CardMedia>
              <Divider
                variant="middle"
                sx={{ paddingTop: 2, borderBottomWidth: 3 }}
              />
              <Typography
                variant="body2"
                color="second"
                component="h2"
                sx={{ display: "flex", justifyContent: "center", padding: 1 }}
              >
                ANGULAR
              </Typography>
            </Project>
          </Grid>
          <Grid item xs={3}>
            <Project>
              <CardMedia
                component="img"
                height="140"
                image="/images/Nextjs.svg"
                alt="nextjs"
              ></CardMedia>
              <Divider
                variant="middle"
                sx={{ paddingTop: 2, borderBottomWidth: 3 }}
              />
              <Typography
                variant="body2"
                color="second"
                component="h2"
                sx={{ display: "flex", justifyContent: "center", padding: 1 }}
              >
                NEXTJS
              </Typography>
            </Project>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}
