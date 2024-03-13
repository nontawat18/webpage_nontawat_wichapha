import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

const XOGame = () => {
  const [activeSquares, setActiveSquares] = React.useState(
    Array(9).fill(false)
  );

  const handleClick = (index) => {
    handleMove(index); // Call the parent handleMove function
    // Toggle the active state of the clicked square
    const newActiveSquares = [...activeSquares];
    newActiveSquares[index] = true;
    setActiveSquares(newActiveSquares);
  };
  return (
    <div>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: { xs: "flex", md: "flex" },
          }}
          className="justify-center"
        >
          <Paper elevation={3} className="my-4 py-8 pl-8 pr-8  main-paper">
            <Grid container spacing={0}>
              <Grid item xs={4} lg={4} md={4}>
                <DemoPaper
                  square
                  elevation={0}
                //   className="sup-paper-one"
                  key={1}
                  className={`sup-paper-one ${activeSquares[1] ? "active" : ""}`}
                  onClick={() => handleClick(1)}
                >
                  1
                </DemoPaper>
              </Grid>
              <Grid item xs={4} lg={4} md={4}>
                <DemoPaper square elevation={0} className="sup-paper-two">
                  2
                </DemoPaper>
              </Grid>
              <Grid item xs={4} lg={4} md={4}>
                <DemoPaper square elevation={0} className="sup-paper-three">
                  3
                </DemoPaper>
              </Grid>
              <Grid item xs={4} lg={4} md={4}>
                <DemoPaper square elevation={0} className="sup-paper-four">
                  4
                </DemoPaper>
              </Grid>
              <Grid item xs={4} lg={4} md={4}>
                <DemoPaper square elevation={0} className="sup-paper-five">
                  5
                </DemoPaper>
              </Grid>
              <Grid item xs={4} lg={4} md={4}>
                <DemoPaper square elevation={0} className="sup-paper-six">
                  6
                </DemoPaper>
              </Grid>
              <Grid item xs={4} lg={4} md={4}>
                <DemoPaper square elevation={0} className="sup-paper-seven">
                  7
                </DemoPaper>
              </Grid>
              <Grid item xs={4} lg={4} md={4}>
                <DemoPaper square elevation={0} className="sup-paper-eight">
                  8
                </DemoPaper>
              </Grid>
              <Grid item xs={4} lg={4} md={4}>
                <DemoPaper square elevation={0} className="sup-paper-nine">
                  9
                </DemoPaper>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default XOGame;
