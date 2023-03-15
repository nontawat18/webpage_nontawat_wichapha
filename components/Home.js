import * as React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import mypic from "../asset/pin.png";
import Box from "@mui/material/Box";
import ListRegion from "@/components/ListRegion";

const Home = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="text-center" md={6}>
            <div style={{ padding: 25, marginTop: 70 }}>
              <h1 className="head">MAP</h1>
              <h1 className="head-color">View</h1>
              <h1>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis similique laudantium, perspiciatis doloremque nesciunt
                aliquid quia sequi quod ullam dolorum eligendi fugit repellendus
                iusto sapiente dolores. Quibusdam tempore voluptate totam!
              </h1>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src={mypic}
              alt="Picture of the author"
              width={1600}
              height={1200}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
