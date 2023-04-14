import { Paper, Typography,Button,Grid,CardMedia,Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled,CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {theme} from "./Themes"
import ImageEntrance from "../assets/ImageEntrance.png";






export default function Entrance(props){
  const {DarkMode} = props;

return (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Paper
      elevation={0}
      sx={{
        background: "rgba(0,0,0,0.0)",
        marginTop: 2,
        minHeight: 900,
        border: 0,
      }}
      variant="outlined"
      square
    >
      <Box>
        <Grid
          container
          spacing={2}
          sx={{ p: 5 }}
          direction="row"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4, justifyContent:"right" }}>
              <Stack spacing={2}>
                <Stack
                  Item
                  sx={{
                    borderRadius: 10,
                    backgroundColor: "#1A171B",
                    mb: 3,
                    width: 300,
                    justify: "center",
                  }}
                >
                  <Typography
                    sx={{ color: "#FB6BFF", mt: 1, mb: 1 }}
                    variant="Stacks"
                  >
                    WELCOME TO CRIPTOLUCKY
                  </Typography>
                </Stack>
              </Stack>
                <Typography
                  variant="Tittle"
                  color="#FFCD00"
                  style={{ fontWeight: "700" }}
                  
                >
                  What is better than always winning
                </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} alignItems="center">
            <CardMedia justify="center">
              <img
                src={ImageEntrance}
                alt="Logo"
                style={{ width: 700, height: 700 }}
              />
            </CardMedia>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  </ThemeProvider>
);


}
