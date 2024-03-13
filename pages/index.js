import Head from "next/head";
import { Inter } from "@next/font/google";
import React, { Component } from "react";
import Index from "@/components/Home";
import ListRegion from "@/components/ListRegion";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Banner from "../components/Banner";

export default function Home({ data }) {
  return (
    <div>
      <Banner />

      <Index />

      <div style={{ marginTop: "1em" }}>
        <Typography variant="h4" color="primary" gutterBottom></Typography>
        <Grid container spacing={2}>
          {/* {data.map((attraction) => (
            <Grid item xs={12} lg={3} md={3} key={attraction.flag}>
              <ListRegion attraction={attraction} />
            </Grid>
          ))} */}
        </Grid>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  // Call an external API endpoint to get data
  // const res = await fetch('https://restcountries.com/v3.1/independent?status=true&fields=flag,name,region')
  let response = await axios.get(
    "https://restcountries.com/v3.1/independent?status=true&fields=flag,name,region"
  );
  const data = await response.data;

  return {
    props: { data },
  };
}
