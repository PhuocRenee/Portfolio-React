import {
  Container,
  Typography,
  Grid,
  Card,
  styled,
  Paper,
  CardMedia,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Picture = styled(Card)(({ theme }) => ({
  height: 200,
  border: "2px",
  borderRadius: 15,
  backgroundColor: theme.palette.third.light,
  padding: 7,
}));
const Bio = styled(Paper)(({ theme }) => ({
  height: 130,
  border: "2px",
  borderRadius: 15,
  backgroundColor: theme.palette.third.main,
  padding: 7,
}));

export default function About() {
  return (
    // <section id="About" style={{ height: "50vh" }}>
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "second.main",
        paddingBottom: 16,
        padding: 10,
        // paddingRight: 16,
        // marginTop: 16,
        marginLeft: "auto",
        marginRight: "auto",
        // maxWidth: 500,
        // height: 100,
      }}
    >
      <Typography
        variant="h6"
        color="second"
        component="h2"
        backgroundColor="second.dark"
        textAlign="center"
        paddingBottom={6}
      >
        ABOUT US
      </Typography>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-evenly"
        // rowSpacing={2}
        // columnSpacing={2}
        // columns={16}
        // // sx={gridStyles}
      >
        <Grid item xs={3} padding={2}>
          <Picture>
            <CardMedia
              component="img"
              height="140"
              image="/images/yoshi.jpeg"
              alt="yoshi"
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
              YOSHI
            </Typography>
          </Picture>
        </Grid>
        <Grid item xs={7} padding={2}>
          <Bio>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            nostrum quibusdam consequatur eaque reprehenderit ratione non id
            officia, consequuntur natus magni expedita error exercitationem
            dolores sapiente suscipit, laborum aperiam. Fugiat, quas
            necessitatibus et nihil beatae, debitis eos quod tempore laudantium
            quasi expedita labore nemo aut, quae repellat commodi neque at?
          </Bio>
        </Grid>
        <Grid item xs={7} padding={2}>
          <Bio>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            inventore eveniet laudantium illum eius natus sint eaque, ducimus
            rerum laboriosam perferendis vitae veritatis neque distinctio
            ratione iure eligendi odio. Nemo consequatur qui consectetur cum
            molestias sequi? Molestias, ea quaerat? Ut fugiat sapiente excepturi
            similique unde perferendis, repellendus quibusdam impedit error.
          </Bio>
        </Grid>
        <Grid item xs={3} padding={2}>
          <Picture>
            <CardMedia
              component="img"
              height="140"
              image="/images/luigi.png"
              alt="luigi"
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
              LUIGI
            </Typography>
          </Picture>
        </Grid>
      </Grid>
    </Box>
    // </section>
  );
}
