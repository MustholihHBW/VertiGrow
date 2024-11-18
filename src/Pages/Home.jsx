import React from 'react'
import Navbar from '../Components/Navbar'
import SectionHero from '../Sections/Home/SectionHero'
import Footer from '../Components/Footer'
import SectionTentang from '../Sections/Home/SectionTentang'
import SectionLayanan from '../Sections/Home/SectionLayanan'
import SectionKeunggulan from '../Sections/Home/SectionKeunggulan'

export default function Home() {
  return (
    <>
        <Navbar/>
        <SectionHero/>
        <SectionTentang/>
        <SectionLayanan/>
        <SectionKeunggulan/>
        <Footer/>
    </>
  )
}
