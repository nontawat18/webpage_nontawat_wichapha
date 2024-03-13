import React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Roboto } from "@next/font/google";
import Box from "@mui/material/Box";
import Image from "next/image";
import logo from "../asset/pet-removebg-preview.ico";
import box from "../asset/box-removebg-preview.ico";
import renew from "../asset/renew-removebg-preview.ico";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="footer">
      <Container maxWidth="lg" className={roboto.className}>
        <div className="my-4">
          <Box sx={{ flexGrow: 1 }} className="box-home">
            <Grid
              container
              spacing={4}
              justifyContent="center"
              alignItems="top"
            >
              <Grid
                item
                xs={12}
                className=""
                md={3}
                justifyContent="center"
                alignItems="center"
              >
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid
                    item
                    xs={12}
                    className=""
                    md={12}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        display: { xs: "flex", md: "flex" },
                      }}
                      className="justify-center"
                    >
                      <Image
                        src={logo}
                        alt="Picture of the author"
                        className="logo-footer"
                      />
                    </Box>
                  </Grid>

                  {/* <Grid
                    item
                    xs={12}
                    className=""
                    md={12}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        display: { xs: "flex", md: "flex" },
                      }}
                      className="justify-center"
                    >
                      <span className="footer-text">Pets Shop</span>
                    </Box>
                  </Grid> */}
                  <Grid
                    item
                    xs={12}
                    className=""
                    md={12}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        display: { xs: "flex", md: "flex" },
                      }}
                      className="justify-center"
                    >
                      <IconButton
                        aria-label="fingerprint"
                        className="icon-footer"
                      >
                        <FacebookRoundedIcon />
                      </IconButton>
                      <IconButton
                        aria-label="fingerprint"
                        className="icon-footer"
                      >
                        <TwitterIcon />
                      </IconButton>
                      <IconButton
                        aria-label="fingerprint"
                        className="icon-footer"
                      >
                        <GitHubIcon />
                      </IconButton>
                      <IconButton
                        aria-label="fingerprint"
                        className="icon-footer"
                      >
                        <LinkedInIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={3}>
                <strong className="str-text-footer">Quick Links</strong>
                <br />
                <br />

                <span className="span-text">Quick Links</span>
                <br />
                <span className="span-text">know more About Us</span>
                <br />
                <span className="span-text">Visit Store</span>
                <br />
                <span className="span-text">Let’s Connect</span>
                <br />
              </Grid>
              <Grid item xs={12} md={3}>
                <strong className="str-text-footer">Important Links</strong>
                <br />
                <br />
                <span className="span-text">Privacy Policy</span>
                <br />
                <span className="span-text">Shipping Details</span>
                <br />
                <span className="span-text">Terms & Conditions</span>
                <br />
                <span className="span-text">Media Kit</span>
                <br />
              </Grid>
              <Grid item xs={12} md={3}>
                <strong className="str-text-footer">
                  Get In Touch With Us For The Best Quality Plants & Succulents
                </strong>
                <br />
                <br />

                <span className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  nam ab ea soluta dolor delectus blanditiis eius deserunt
                  distinctio architecto doloremque consequatur ad pariatur
                  dolorem cumque suscipit eveniet, debitis sapiente!
                </span>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
