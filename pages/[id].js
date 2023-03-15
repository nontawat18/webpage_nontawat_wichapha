import Head from 'next/head'
import { Inter } from '@next/font/google'
import React, { Component } from 'react'
import Index from '@/components/Home'
import Detail from "@/components/Detail";
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import axios from 'axios'

function AttractionPage({ data }) {
  return <>
    <Head>
    <title>Map View</title>
    </Head>
    <Container className="text-center">
      <div style={{ marginTop: '2em' }} >
        {data.map((attraction) => (

          <Detail attraction={attraction} key={attraction}/>
        ))}
      </div>
    </Container >
  </>
}

export async function getStaticPaths() {
  let response = await axios.get("https://restcountries.com/v3.1/independent?status=true&fields=flag,name,region")
  const data = await response.data

  const paths = data.map((attraction) => ({
    params: { id: String(attraction.name.common) },
  }))

  return { paths, fallback: false }
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  // Call an external API endpoint to get an attraction by id
  let response = await axios.get(`https://restcountries.com/v3.1/name/${params.id}`)
  const data = await response.data
  return {
    props: { data },
  }
}

export default AttractionPage