import React from 'react'
import Head from 'next/head';
import Navbar from "@/components/organisms/Navbar";
import HomeSection from "@/components/organisms/Home";
import GenerateMeme from "@/components/organisms/GenerateMeme";
import ImageSlider from "@/components/organisms/ImageSlider";
import Footer from "@/components/organisms/Footer";
import MusicPlayer from "@/components/atoms/MusicPlayer";
import DexScreenerGraph from '@/components/organisms/DexScreenerGraph';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Troll GUY</title>
      </Head>
      <Navbar />
      <HomeSection />
  
      <ImageSlider />
      <GenerateMeme />
      <Footer />
      <MusicPlayer />
 
    </main>
  )
}
