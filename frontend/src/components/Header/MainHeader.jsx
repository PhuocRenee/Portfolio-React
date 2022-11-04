import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./MainHeader.css";

export default function MainHeader() {
  return (
    <section id="Home">
      <Box sx={{ p: "8%" }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "MoskBold",
            letterSpacing: ".3rem",
            color: "inherit",
            fontSize: "10rem",
            textDecoration: "none",
          }}
        >
          This page was made with
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <div className="fromLeft">
            <img
              src="/images/React_logo.gif"
              style={{
                height: "20vmin",
                marginTop: "-15vmin",
              }}
              alt="React logo"
            />
          </div>
        </Box>
      </Box>
    </section>
  );
}
