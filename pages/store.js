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
import petColOne from "../asset/cat-715652_1920.jpg";
import petColTwo from "../asset/animal-4118585_1920.jpg";
import petColThree from "../asset/dog-84437_1280.jpg";
import petColFour from "../asset/dog-1742295_640.jpg";
import petColFive from "../asset/cat-3397685_640.jpg";
import petColSix from "../asset/cat-3266675_640.jpg";
import petColSeven from "../asset/dog-737386_640.jpg";
import petColEight from "../asset/cat-3115398_1920.jpg";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Rating from "@mui/material/Rating";
import Pagination from "@mui/material/Pagination";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#635ee7",
  },
  "& .MuiRating-iconHover": {
    color: "#9490fb",
  },
});

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

  const Item = styled(Grid)(({ theme }) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    marginTop: 100,
    marginBottom: 100,
  }));

  return (
    <div className="justify-center">
      <Topbar />
      <Container maxWidth="lg" className="">
        <Box sx={{ flexGrow: 1 }} className="my-16">
          <Grid container spacing={3}>
            <Grid item xs={6} md={4} className="my-4">
              <div className="featured">
                <Image
                  src={petColFour}
                  alt="Picture of the author"
                  className="featured-img-store"
                ></Image>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-mobile"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-store"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <div className="">
                  <small>Cat</small>
                  <br />
                  <strong className="str-text">American Shorthair</strong>
                  <br />
                  <StyledRating
                    name="simple-controlled"
                    value={4}
                    className="rating"
                  />
                  <br />

                  <strong>$34.00</strong>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={4} className="my-4">
              <div className="featured">
                <Image
                  src={petColOne}
                  alt="Picture of the author"
                  className="featured-img-store"
                ></Image>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-mobile"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-store"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <div className="">
                  <small>Cat</small>
                  <br />
                  <strong className="str-text">American Shorthair</strong>
                  <br />
                  <StyledRating
                    name="simple-controlled"
                    value={4}
                    className="rating"
                  />
                  <br />

                  <strong>$34.00</strong>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={4} className="my-4">
              <div className="featured">
                <Image
                  src={petColTwo}
                  alt="Picture of the author"
                  className="featured-img-store"
                ></Image>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-mobile"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-store"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <div className="">
                  <small>Cat</small>
                  <br />
                  <strong className="str-text">American Shorthair</strong>
                  <br />
                  <StyledRating
                    name="simple-controlled"
                    value={4}
                    className="rating"
                  />
                  <br />

                  <strong>$34.00</strong>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={4} className="my-4">
              <div className="featured">
                <Image
                  src={petColThree}
                  alt="Picture of the author"
                  className="featured-img-store"
                ></Image>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-mobile"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-store"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <div className="">
                  <small>Cat</small>
                  <br />
                  <strong className="str-text">American Shorthair</strong>
                  <br />
                  <StyledRating
                    name="simple-controlled"
                    value={4}
                    className="rating"
                  />
                  <br />

                  <strong>$34.00</strong>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={4} className="my-4">
              <div className="featured">
                <Image
                  src={petColFour}
                  alt="Picture of the author"
                  className="featured-img-store"
                ></Image>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-mobile"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-store"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <div className="">
                  <small>Cat</small>
                  <br />
                  <strong className="str-text">American Shorthair</strong>
                  <br />
                  <StyledRating
                    name="simple-controlled"
                    value={4}
                    className="rating"
                  />
                  <br />

                  <strong>$34.00</strong>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={4} className="my-4">
              <div className="featured">
                <Image
                  src={petColFive}
                  alt="Picture of the author"
                  className="featured-img-store"
                ></Image>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-mobile"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-store"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <div className="">
                  <small>Cat</small>
                  <br />
                  <strong className="str-text">American Shorthair</strong>
                  <br />
                  <StyledRating
                    name="simple-controlled"
                    value={4}
                    className="rating"
                  />
                  <br />

                  <strong>$34.00</strong>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={4} className="my-4">
              <div className="featured">
                <Image
                  src={petColSix}
                  alt="Picture of the author"
                  className="featured-img-store"
                ></Image>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-mobile"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-store"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <div className="">
                  <small>Cat</small>
                  <br />
                  <strong className="str-text">American Shorthair</strong>
                  <br />
                  <StyledRating
                    name="simple-controlled"
                    value={4}
                    className="rating"
                  />
                  <br />

                  <strong>$34.00</strong>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={4} className="my-4">
              <div className="featured">
                <Image
                  src={petColSeven}
                  alt="Picture of the author"
                  className="featured-img-store"
                ></Image>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-mobile"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-store"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <div className="">
                  <small>Cat</small>
                  <br />
                  <strong className="str-text">American Shorthair</strong>
                  <br />
                  <StyledRating
                    name="simple-controlled"
                    value={4}
                    className="rating"
                  />
                  <br />

                  <strong>$34.00</strong>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} md={4} className="my-4">
              <div className="featured">
                <Image
                  src={petColEight}
                  alt="Picture of the author"
                  className="featured-img-store"
                ></Image>
                <Box
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-mobile"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <IconButton
                    aria-label="fingerprint"
                    className="icon-btn-store"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Box>
                <div className="">
                  <small>Cat</small>
                  <br />
                  <strong className="str-text">American Shorthair</strong>
                  <br />
                  <StyledRating
                    name="simple-controlled"
                    value={4}
                    className="rating"
                  />
                  <br />

                  <strong>$34.00</strong>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }} className=" justify-center align-center">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4} className="my-4"></Grid>
            <Grid item xs={12} md={4} className="my-4"></Grid>

            <Grid item xs={12} md={4} className="my-4">
            <Pagination count={10} className="pagination" />

            </Grid>

          </Grid>

        </Box>
      </Container>
      <div className="my-8 our-store">
        <Container maxWidth="lg" className="">
          <Box
            sx={{ flexGrow: 1 }}
            className="my-16 justify-center align-center"
          >
            <strong className="str-featured">Pets Relate</strong>
            <br />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              neque commodi nemo atque, quis iusto quas illo placeat
              reprehenderit dolores similique, voluptate velit, autem obcaecati.
              Magnam recusandae magni fugiat temporibus.
            </span>
          </Box>
          <Box sx={{ flexGrow: 1 }} className="my-16">
            <Grid container spacing={3}>
              <Grid item xs={6} md={4} className="my-4">
                <div className="featured">
                  <Image
                    src={petColOne}
                    alt="Picture of the author"
                    className="featured-img-store"
                  ></Image>
                  <Box
                    sx={{
                      display: { xs: "flex", md: "none" },
                    }}
                  >
                    <IconButton
                      aria-label="fingerprint"
                      className="icon-btn-mobile"
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    <IconButton
                      aria-label="fingerprint"
                      className="icon-btn-store"
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </Box>
                  <div className="">
                    <small>Cat</small>
                    <br />
                    <strong className="str-text">American Shorthair</strong>
                    <br />
                    <StyledRating
                      name="simple-controlled"
                      value={4}
                      className="rating"
                    />
                    <br />

                    <strong>$34.00</strong>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} md={4} className="my-4">
                <div className="featured">
                  <Image
                    src={petColTwo}
                    alt="Picture of the author"
                    className="featured-img-store"
                  ></Image>
                  <Box
                    sx={{
                      display: { xs: "flex", md: "none" },
                    }}
                  >
                    <IconButton
                      aria-label="fingerprint"
                      className="icon-btn-mobile"
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    <IconButton
                      aria-label="fingerprint"
                      className="icon-btn-store"
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </Box>
                  <div className="">
                    <small>Cat</small>
                    <br />
                    <strong className="str-text">American Shorthair</strong>
                    <br />
                    <StyledRating
                      name="simple-controlled"
                      value={4}
                      className="rating"
                    />
                    <br />

                    <strong>$34.00</strong>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} md={4} className="my-4">
                <div className="featured">
                  <Image
                    src={petColThree}
                    alt="Picture of the author"
                    className="featured-img-store"
                  ></Image>
                  <Box
                    sx={{
                      display: { xs: "flex", md: "none" },
                    }}
                  >
                    <IconButton
                      aria-label="fingerprint"
                      className="icon-btn-mobile"
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    <IconButton
                      aria-label="fingerprint"
                      className="icon-btn-store"
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </Box>
                  <div className="">
                    <small>Cat</small>
                    <br />
                    <strong className="str-text">American Shorthair</strong>
                    <br />
                    <StyledRating
                      name="simple-controlled"
                      value={4}
                      className="rating"
                    />
                    <br />

                    <strong>$34.00</strong>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} md={4} className="my-4">
                <div className="featured">
                  <Image
                    src={petColFour}
                    alt="Picture of the author"
                    className="featured-img-store"
                  ></Image>
                  <Box
                    sx={{
                      display: { xs: "flex", md: "none" },
                    }}
                  >
                    <IconButton
                      aria-label="fingerprint"
                      className="icon-btn-mobile"
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    <IconButton
                      aria-label="fingerprint"
                      className="icon-btn-store"
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </Box>
                  <div className="">
                    <small>Cat</small>
                    <br />
                    <strong className="str-text">American Shorthair</strong>
                    <br />
                    <StyledRating
                      name="simple-controlled"
                      value={4}
                      className="rating"
                    />
                    <br />

                    <strong>$34.00</strong>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} md={4} className="my-4">
                <div className="featured">
                  <Image
                    src={petColFive}
                    alt="Picture of the author"
                    className="featured-img-store"
                  ></Image>
                  <Box
                    sx={{
                      display: { xs: "flex", md: "none" },
                    }}
                  >
                    <IconButton
                      aria-label="fingerprint"
                      className="icon-btn-mobile"
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    <IconButton
                      aria-label="fingerprint"
                      className="icon-btn-store"
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </Box>
                  <div className="">
                    <small>Cat</small>
                    <br />
                    <strong className="str-text">American Shorthair</strong>
                    <br />
                    <StyledRating
                      name="simple-controlled"
                      value={4}
                      className="rating"
                    />
                    <br />

                    <strong>$34.00</strong>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6} md={4} className="my-4">
                <div className="featured">
                  <Image
                    src={petColSix}
                    alt="Picture of the author"
                    className="featured-img-store"
                  ></Image>
                  <Box
                    sx={{
                      display: { xs: "flex", md: "none" },
                    }}
                  >
                    <IconButton
                      aria-label="fingerprint"
                      className="icon-btn-mobile"
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    <IconButton
                      aria-label="fingerprint"
                      className="icon-btn-store"
                    >
                      <ShoppingCartIcon />
                    </IconButton>
                  </Box>
                  <div className="">
                    <small>Cat</small>
                    <br />
                    <strong className="str-text">American Shorthair</strong>
                    <br />
                    <StyledRating
                      name="simple-controlled"
                      value={4}
                      className="rating"
                    />
                    <br />

                    <strong>$34.00</strong>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default Home;
