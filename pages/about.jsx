import { useState, useEffect } from "react";
import GameBoard from "@/components/GameBoard";
import axios from "axios";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import logo from "../asset/people.gif";
import Topbar from "../components/Topbar";

import imageBot from "../asset/renew.gif";
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

function Home() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);
  const [activeSquares, setActiveSquares] = useState(Array(9).fill(false));
  const [x, setX] = useState(0);
  const [data, setData] = useState([]);
  const [dataTwo, setDataTwo] = useState([]);
  const [dataThree, setDataThree] = useState([]);

  const handleClick = (indices) => {
    const rowIndex = indices[0];
    const cellIndex = indices[1];
    console.log(indices);
    handleMove(indices); // Call the parent handleMove function
    // Toggle the active state of the clicked square
    const newActiveSquares = [...activeSquares];
    newActiveSquares[rowIndex] = true;
    setActiveSquares(newActiveSquares);
    setX(1);
    console.log(data);
  };
  useEffect(() => {
    // setX(1)
  }, []);
  const [activePlayer, setActivePlayer] = useState("X"); // Start with X as the active player

  const handleMove = async (indices) => {
    console.log(indices);
    const rowIndex = indices[0];
    const cellIndex = indices[1];

    try {
      const moveData = {
        col: cellIndex,
        row: rowIndex,
        player: activePlayer,
      };

      const response = await axios.post(
        "http://localhost:4000/jenosize/moveGame",
        moveData
      );

      if (response.status === 200) {
        setBoard(response.data.board);
        if (response.data.message === "Player X wins!") {
          setWinner("Player X wins!");
        } else if (response.data.message === "Player O wins!") {
          setWinner("Player O wins!");
        } else {
          // Toggle active player for the next move
          setActivePlayer(activePlayer === "X" ? "X" : "X");
        }
      } else {
        console.error("Failed to make the move.");
      }
    } catch (error) {
      console.error("Error making the move:", error.message);
    }
  };
  // const handleMove = async (index) => {
  //   try {
  //     const moveData = {
  //       col: index % 3,
  //       row: Math.floor(index / 3),
  //       player: "X",
  //     };

  //     const headers = {
  //       "Content-Type": "application/json",
  //       "Api-Key": "",
  //     };
  //     const response = await axios.post(
  //       "http://localhost:4000/jenosize/moveGame",
  //       moveData
  //     );

  //     if (response.status === 200) {
  //       setData((prevData) => [...prevData, response.data.board[0]]);
  //       setDataTwo((prevData) => [...prevData, response.data.board[1]]);
  //       setDataThree((prevData) => [...prevData, response.data.board[2]]);
  //       if (response.data.message == "Player X wins!") {
  //         setWinner("Player X wins!");
  //       } else if (response.data.message == "Bot wins!") {
  //         setWinner("Bot wins!");
  //       } else {
  //         setWinner(response.data.message);
  //       }
  //     } else {
  //       console.error("Failed to make the move.");
  //     }
  //   } catch (error) {
  //     console.error("Error making the move:", error.message);
  //   }
  // };

  return (
    <div className="justify-center">
      <Topbar/>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: { xs: "flex", md: "flex" },
          }}
          className="justify-center"
        >
          <Paper elevation={3} className="my-4 py-8 pl-8 pr-8  main-paper">
            {/* <div className="game-board">
              {board.map((value, index) => (
                <div
                  key={index}
                  className={`square ${value === "X" ? "x-color" : "o-color"}`}
                  onClick={() => handleClick(index)}
                >
                  {value}
                </div>
              ))}
            </div> */}
            {winner && <p>Winner: {winner}</p>}

            {board.map((value, index) => (
              // <div key={index} className="row">
              <Grid container spacing={0} key={index}>
                {Array.isArray(value) ? (
                  value.map((values, indexs) => (
                    <Grid item xs={4} lg={4} md={4} key={indexs}>
                      <DemoPaper
                        square
                        onClick={() => handleClick([index, indexs])}
                        elevation={0}
                        // className="sup-paper-one"
                        className={`sup-paper ${
                          values === "X" ? "x-color" : "o-color"
                        }`}
                      >
                        {/* <Image
                          src={imageBot}
                          alt="Picture of the author"
                          className=""
                        /> */}
                        {values === "O" ? (
                          <Image
                            src={imageBot}
                            alt="Picture of the author"
                            className=""
                          />
                        ) : (
                          <div></div>
                        )}
                         {values === "X" ? (
                          <Image
                            src={logo}
                            alt="Picture of the author"
                            className=""
                          />
                        ) : (
                          <div></div>
                        )}
                      </DemoPaper>
                      {/* {values === "X" ? (
                        <DemoPaper
                          square
                          onClick={() => handleClick(indexs)}
                          elevation={0}
                          className="sup-paper-one-x"
                        >
                          {values} 
                        </DemoPaper>
                      ) : (
                        <DemoPaper
                          square
                          onClick={() => handleClick(indexs)}
                          elevation={0}
                          className="sup-paper-one-o"
                        >
                          {values} 
                        </DemoPaper>
                      )} */}
                    </Grid>
                  ))
                ) : (
                  <Grid container spacing={0}>
                    <Grid item xs={4} lg={4} md={4}>
                      {/* <DemoPaper
                        square
                        onClick={() => handleClick(index)}
                        elevation={0}
                        className="sup-paper-one"
                      >
                        {value}
                      </DemoPaper> */}
                    </Grid>
                  </Grid>
                  // <div
                  //   className={`square ${
                  //     value === "X" ? "x-color" : "o-color"
                  //   }`}
                  //   onClick={() => handleClick(index)}
                  // >
                  //   {value} 2
                  // </div>
                )}
              </Grid>

              //</div>
            ))}

            {x === 0 ? (
              // <Paper elevation={3} className="my-4 py-8 pl-8 pr-8  main-paper">
              <Grid container spacing={0}>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([0, 0])}
                  ></DemoPaper>
                </Grid>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([0, 1])}
                  ></DemoPaper>
                </Grid>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([0, 2])}
                  ></DemoPaper>
                </Grid>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([1, 0])}
                  ></DemoPaper>
                </Grid>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([1, 1])}
                  ></DemoPaper>
                </Grid>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([1, 2])}
                  ></DemoPaper>
                </Grid>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([2, 0])}
                  ></DemoPaper>
                </Grid>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([2, 1])}
                  ></DemoPaper>
                </Grid>
                <Grid item xs={4} lg={4} md={4}>
                  <DemoPaper
                    square
                    elevation={0}
                    className="sup-paper"
                    onClick={() => handleClick([2, 2])}
                  ></DemoPaper>
                </Grid>
              </Grid>
            ) : (
              // </Paper>
              <Grid container spacing={0}>
                <Grid item xs={4} lg={4} md={4}>
                  {/* <DemoPaper
                        square
                        onClick={() => handleClick(index)}
                        elevation={0}
                        className="sup-paper-one"
                      >
                        {value}
                      </DemoPaper> */}
                </Grid>
              </Grid>
            )}
          </Paper>
        </Box>

        {/* <Box
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
                  className="sup-paper-one"
                  onClick={() => handleClick(0)}
                >
                  1
                </DemoPaper>
              </Grid>
              <Grid item xs={4} lg={4} md={4}>
                <DemoPaper
                  square
                  elevation={0}
                  className="sup-paper-two"
                  onClick={() => handleClick(1)}
                >
                  2
                </DemoPaper>
              </Grid>
              <Grid item xs={4} lg={4} md={4}>
                <DemoPaper
                  square
                  elevation={0}
                  className="sup-paper-three"
                  onClick={() => handleClick(2)}
                >
                  3
                </DemoPaper>
              </Grid>
              <Grid item xs={4} lg={4} md={4}>
                <DemoPaper
                  square
                  elevation={0}
                  className="sup-paper-four"
                  onClick={() => handleClick(3)}
                >
                  4
                </DemoPaper>
              </Grid>
              <Grid item xs={4} lg={4} md={4}>
                <DemoPaper
                  square
                  elevation={0}
                  className="sup-paper-five"
                  onClick={() => handleClick(4)}
                >
                  5
                </DemoPaper>
              </Grid>
              <Grid item xs={4} lg={4} md={4}>
                <DemoPaper
                  square
                  elevation={0}
                  className="sup-paper-six"
                  onClick={() => handleClick(5)}
                >
                  6
                </DemoPaper>
              </Grid>
              <Grid item xs={4} lg={4} md={4}>
                <DemoPaper
                  square
                  elevation={0}
                  className="sup-paper-seven"
                  onClick={() => handleClick(6)}
                >
                  7
                </DemoPaper>
              </Grid>
              <Grid item xs={4} lg={4} md={4}>
                <DemoPaper
                  square
                  elevation={0}
                  className="sup-paper-eight"
                  onClick={() => handleClick(7)}
                >
                  8
                </DemoPaper>
              </Grid>
              <Grid item xs={4} lg={4} md={4}>
                <DemoPaper
                  square
                  elevation={0}
                  className="sup-paper-nine"
                  onClick={() => handleClick(8)}
                >
                  9
                </DemoPaper>
              </Grid>
            </Grid>
          </Paper>
        </Box> */}
      </Container>
    </div>
  );
}

export default Home;
