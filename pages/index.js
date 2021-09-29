import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";

import Container from "../components/Container";
import Section from "../components/Section";
import SingleColumn from "../components/SingleColumn";
import Header from "../components/Header";
import Footer from "../components/Footer";

import TwoUp from "../components/TwoUp";
import {
  getPostBySlug,
} from "../lib/lib";
import { contact, eventKeys } from "../lib/constants";
import { useLocalStorage } from "../lib/hooks";


export default function Home() {
  
  return (
    <Container>
      <Head>
        <title>operators.urbit.org</title>
      </Head>
      <SingleColumn>
        <Header />
        {
          // Hero Statement
        }
        <Section>
          <div className="w-100 p-20 bg-wall-100 rounded-xl port-hero-image-height flex items-center">
            <div>
              <h1>Guides for Urbit Operators </h1>
              <h1>and Community Leaders</h1>
            </div>
          </div>
        </Section>

      </SingleColumn>

      <Footer />
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: { },
  };
}
