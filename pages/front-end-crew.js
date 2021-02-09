import React from 'react';
import Head from 'next/head';

import { Header } from '../src/components/header';
import { Top } from "../src/components/top";
import { Nav } from "../src/components/nav";
import { Content } from '../src/components/content/content.component';

export default function FrontEndCrew () {
  return (
    <>
      <Head>
        <title>Front-End Crew</title>

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;800&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;900&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main>
        <Top />
        <Nav />
        <Content />
      </main>
    </>
  )
};