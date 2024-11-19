import React from 'react'
import Navbar from '../Components/Navbar'
import SectionHero from '../Sections/Home/SectionHero'
import Footer from '../Components/Footer'
import SectionTentang from '../Sections/Home/SectionTentang'
import SectionLayanan from '../Sections/Home/SectionLayanan'
import SectionKeunggulan from '../Sections/Home/SectionKeunggulan'
import Navbar2 from '../Components/Navbar2'
import Footer2 from '../Components/Footer2'

export default function Home() {
  return (
    <>
        <Navbar2/>
        <SectionHero/>
        <SectionTentang/>
        <SectionLayanan/>
        <SectionKeunggulan/>
        <Footer2/>
    </>
  )
}
