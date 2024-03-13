import * as React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import mypic from "../asset/pin.png";
import Box from "@mui/material/Box";
import ListRegion from "@/components/ListRegion";
import logo from "../asset/pet-removebg-preview.ico";
import box from "../asset/box-removebg-preview.ico";
import renew from "../asset/renew-removebg-preview.ico";
import petColOne from "../asset/cat-715652_1920.jpg";
import petColTwo from "../asset/animal-4118585_1920.jpg";
import petColThree from "../asset/dog-84437_1280.jpg";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import petColFour from "../asset/dog-1742295_640.jpg";

import petColFive from "../asset/cat-3397685_640.jpg";
import petColSix from "../asset/cat-3266675_640.jpg";
import petColSeven from "../asset/dog-737386_640.jpg";
import petColEight from "../asset/cat-3115398_1920.jpg";
import personOne from "../asset/woman-4873600_640.jpg";
import personTwo from "../asset/blue-hair-4489652_640.jpg";
import personThree from "../asset/woman-4106985_640.jpg";

const Item = styled(Grid)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  marginTop: 100,
  marginBottom: 100,
}));
const ItemInter = styled(Grid)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  marginTop: 150,
  marginBottom: 100,
  paddingTop: 80,
  paddingBottom: 150,
}));

const ItemInteres = styled(Grid)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  marginTop: 70,
  marginBottom: 100,
  paddingTop: 0,
  paddingBottom: 400,
}));

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#635ee7",
  },
  "& .MuiRating-iconHover": {
    color: "#9490fb",
  },
});
const Home = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }} className="box-home">
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              className=""
              md={4}
              justifyContent="center"
              alignItems="center"
            >
              <Grid
                container
                spacing={1}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={2} className="" md={2}>
                  <Image
                    src={logo}
                    alt="Picture of the author"
                    className="logo-home"
                  />
                </Grid>
                <Grid item xs={10} className="" md={10}>
                  <strong className="str-text">Pets Collection</strong>
                  <br />
                  <span>Any Pets for your space</span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid
                container
                spacing={1}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={2} className="" md={2}>
                  <Image
                    src={box}
                    alt="Picture of the author"
                    className="logo-home"
                  />
                </Grid>
                <Grid item xs={10} className="" md={10}>
                  <strong className="str-text">Free Shipping</strong>
                  <br />
                  <span>Free shipping on order</span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid
                container
                spacing={1}
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={2} className="" md={2}>
                  <Image
                    src={renew}
                    alt="Picture of the author"
                    className="logo-home"
                  />
                </Grid>
                <Grid item xs={10} className="" md={10}>
                  <strong className="str-text">100% Money Back</strong>
                  <br />
                  <span>If the item didn't suit you</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }} className="my-16">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div className="collection">
                <Image
                  src={petColOne}
                  alt="Picture of the author"
                  className="collection-img"
                />
                <div className="collection-text">
                  <Container maxWidth="lg">
                    <strong className="str-text">American Shorthair</strong>
                    <br />
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem neque commodi nemo atque, quis iusto quas illo
                      placeat reprehenderit dolores similique, voluptate velit,
                      autem obcaecati. Magnam recusandae magni fugiat
                      temporibus.
                    </span>
                    <br />

                    <Button
                      variant="contained"
                      className="btn-collection"
                      elevation={0}
                    >
                      SEE COLLECTION
                    </Button>
                  </Container>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="collection">
                <Image
                  src={petColFour}
                  alt="Picture of the author"
                  className="collection-img"
                />
                <div className="collection-text">
                  <Container maxWidth="lg">
                    <strong className="str-text">Labrador</strong>
                    <br />
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem neque commodi nemo atque, quis iusto quas illo
                      placeat reprehenderit dolores similique, voluptate velit,
                      autem obcaecati. Magnam recusandae magni fugiat
                      temporibus.
                    </span>
                    <br />

                    <Button
                      variant="contained"
                      className="btn-collection"
                      elevation={0}
                    >
                      SEE COLLECTION
                    </Button>
                  </Container>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="collection">
                <Image
                  src={petColThree}
                  alt="Picture of the author"
                  className="collection-img"
                />
                <div className="collection-text">
                  <Container maxWidth="lg">
                    <strong className="str-text">British Bulldog</strong>
                    <br />
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem neque commodi nemo atque, quis iusto quas illo
                      placeat reprehenderit dolores similique, voluptate velit,
                      autem obcaecati. Magnam recusandae magni fugiat
                      temporibus.
                    </span>
                    <br />

                    <Button
                      variant="contained"
                      className="btn-collection"
                      elevation={0}
                    >
                      SEE COLLECTION
                    </Button>
                  </Container>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }} className="my-16 justify-center align-center">
          <Item>
            <strong className="str-featured">Featured Pets</strong>
            <br />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              neque commodi nemo atque, quis iusto quas illo placeat
              reprehenderit dolores similique, voluptate velit, autem obcaecati.
              Magnam recusandae magni fugiat temporibus.
            </span>
          </Item>
        </Box>
        <Box sx={{ flexGrow: 1 }} className="my-16">
          <Grid container spacing={3}>
            <Grid item xs={6} md={3} className="my-4">
              <div className="featured">
                <Image
                  src={petColOne}
                  alt="Picture of the author"
                  className="featured-img"
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
                  <IconButton aria-label="fingerprint" className="icon-btn">
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
            <Grid item xs={6} md={3} className="my-4">
              <div className="featured">
                <Image
                  src={petColTwo}
                  alt="Picture of the author"
                  className="featured-img"
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
                  <IconButton aria-label="fingerprint" className="icon-btn">
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
            <Grid item xs={6} md={3} className="my-4">
              <div className="featured">
                <Image
                  src={petColThree}
                  alt="Picture of the author"
                  className="featured-img"
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
                  <IconButton aria-label="fingerprint" className="icon-btn">
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
            <Grid item xs={6} md={3} className="my-4">
              <div className="featured">
                <Image
                  src={petColFour}
                  alt="Picture of the author"
                  className="featured-img"
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
                  <IconButton aria-label="fingerprint" className="icon-btn">
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
            <Grid item xs={6} md={3} className="my-4">
              <div className="featured">
                <Image
                  src={petColFive}
                  alt="Picture of the author"
                  className="featured-img"
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
                  <IconButton aria-label="fingerprint" className="icon-btn">
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
            <Grid item xs={6} md={3} className="my-4">
              <div className="featured">
                <Image
                  src={petColSix}
                  alt="Picture of the author"
                  className="featured-img"
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
                  <IconButton aria-label="fingerprint" className="icon-btn">
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
            <Grid item xs={6} md={3} className="my-4">
              <div className="featured">
                <Image
                  src={petColSeven}
                  alt="Picture of the author"
                  className="featured-img"
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
                  <IconButton aria-label="fingerprint" className="icon-btn">
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
            <Grid item xs={6} md={3} className="my-4">
              <div className="featured">
                <Image
                  src={petColEight}
                  alt="Picture of the author"
                  className="featured-img"
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
                  <IconButton aria-label="fingerprint" className="icon-btn">
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
        <Box sx={{ flexGrow: 1 }} className="py-16"></Box>
        <Box sx={{ flexGrow: 1 }} className="my-16">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} className="my-4">
              <Box
                sx={{ flexGrow: 1 }}
                className="my-16 justify-center align-center"
              >
                <strong className="str-featured">Testimonials</strong>
                <br />
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem neque commodi nemo atque, quis iusto quas illo placeat
                  reprehenderit dolores similique, voluptate velit, autem
                  obcaecati. Magnam recusandae magni fugiat temporibus.
                </span>
              </Box>
              <Box
                sx={{ flexGrow: 1 }}
                className=" justify-center align-center"
              >
                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12} md={6} className="my-4">
                    <Image
                      src={personOne}
                      alt="Picture of the author"
                      className="testimonials-img"
                    ></Image>
                  </Grid>
                  <Grid item xs={12} md={6} className="my-4">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem neque commodi nemo atque, quis iusto quas illo
                      placeat reprehenderit dolores similique, voluptate velit,
                      autem obcaecati. Magnam recusandae magni fugiat
                      temporibus.
                    </span>
                    <br />
                    <br />

                    <strong className="">Testimonials</strong>
                    <br />
                    <small>President</small>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} className="my-4">
              <Box
                sx={{ flexGrow: 1 }}
                className=" justify-center align-center"
              >
                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12} md={6} className="my-4">
                    <Image
                      src={personTwo}
                      alt="Picture of the author"
                      className="testimonials-img"
                    ></Image>
                  </Grid>
                  <Grid item xs={12} md={6} className="my-4">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem neque commodi nemo atque, quis iusto quas illo
                      placeat reprehenderit dolores similique, voluptate velit,
                      autem obcaecati. Magnam recusandae magni fugiat
                      temporibus.
                    </span>
                    <br />
                    <br />

                    <strong className="">Testimonials</strong>
                    <br />
                    <small>President</small>
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{ flexGrow: 1 }}
                className=" justify-center align-center"
              >
                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12} md={6} className="my-4">
                    <Image
                      src={personThree}
                      alt="Picture of the author"
                      className="testimonials-img"
                    ></Image>
                  </Grid>
                  <Grid item xs={12} md={6} className="my-4">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quidem neque commodi nemo atque, quis iusto quas illo
                      placeat reprehenderit dolores similique, voluptate velit,
                      autem obcaecati. Magnam recusandae magni fugiat
                      temporibus.
                    </span>
                    <br />
                    <br />

                    <strong className="">Testimonials</strong>
                    <br />
                    <small>President</small>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <div className="interested">
        <Container maxWidth="md">
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <ItemInter>
              <strong className="str-interested">
                Interested? Shop This Pet Collection!
              </strong>
              <br />
              <br />

              <span className="span-interested">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                neque commodi nemo atque, quis iusto quas illo placeat
                reprehenderit dolores similique, voluptate velit, autem
                obcaecati. Magnam recusandae magni fugiat temporibus.
              </span>
              <br />
              <br />
              <Button
                variant="contained"
                className="btn-collection"
                elevation={0}
              >
                go to shop
              </Button>
            </ItemInter>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <ItemInteres>
              <strong className="str-interested">
                Interested? Shop This Pet Collection!
              </strong>
              <br />
              <br />

              <span className="span-interested">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                neque commodi nemo atque, quis iusto quas illo placeat
                reprehenderit dolores similique, voluptate velit, autem
                obcaecati. Magnam recusandae magni fugiat temporibus.
              </span>
              <br />
              <br />
              <Button
                variant="contained"
                className="btn-collection"
                elevation={0}
              >
                go to shop
              </Button>
            </ItemInteres>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Home;
