import React from 'react'
import Header from './Header'
import WeCreate from './WeCreate'
import WhoWeAre from './WhoWeAre'
import WeLoveSolving from './WeLoveSolving'
import CoreValues from './CoreValues'
import Info from './Info'
import WeAreHiring from './WeAreHiring'

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
    </>
  )
}
