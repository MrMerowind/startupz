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
import OurWorks from './OurWorks'

export default function LandingPage() {
  return (
    <>
      <nav><Header /></nav>
      <section className='shadowWrapper'><WeCreate /></section>
      <section className='shadowWrapper shadowWrapperColor'><WhoWeAre /></section>
      <section className='shadowWrapper'><WeLoveSolving /></section>
      <section className='shadowWrapper shadowWrapperColor'><CoreValues /></section>
      <section className='shadowWrapper'><OurWorks /></section>
      <section className='shadowWrapper'><Info /></section>
      <section className='shadowWrapper shadowWrapperColor'><WeAreHiring /></section>
      <section><Contact /></section>
      <footer><Footer /></footer>
    </>
  )
}
