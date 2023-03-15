import Head from 'next/head'
import { Inter } from '@next/font/google'
import React, { Component } from 'react'
import Index from '@/components/Home'

export default function Home() {
  
  return (
    
    <div>
      <Head>
        <title>Company</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Index />



    </div>
  )
}