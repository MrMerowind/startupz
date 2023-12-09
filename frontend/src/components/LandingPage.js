import React from 'react'
import Header from './Header'
import WeCreate from './WeCreate'
import WhoWeAre from './WhoWeAre'
import WeLoveSolving from './WeLoveSolving'
import CoreValues from './CoreValues'
import Info from './Info'
import WeAreHiring from './WeAreHiring'
import Contact from './Contact'
import Footer from './Footer'

export default function LandingPage() {
  return (
    <>
      <Header />
      <WeCreate />
      <WhoWeAre />
      <WeLoveSolving />
      <CoreValues />

      <Info />

      <WeAreHiring />
      <Contact />
      <Footer />
    </>
  )
}
