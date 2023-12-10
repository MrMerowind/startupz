import React from 'react'
import Slide from './Slide'

export default function OurWorks() {
  return (
    <div className='contentbox'>
        <h2 className='text-center'>Our works</h2>
        <Slide color='#A9BC87' text='Tolq'
        subtext='Tolq is the translation solution built for e-commerce.'
        subtext2='It provides all pieces of the localization puzzle in one.'
        subtext3='single integrated solution.'
        imagePath='/img/slide1.png' altText='macbook' href='#' />
        
        <Slide color='#8BB5C9' text='Feedback Labs'
        subtext='Feedback Labs turns feedback into actionable insights2'
        subtext2='for your team.'
        imagePath='/img/slide2.png' altText='ipad' href='#' />
        
        <Slide color='#00A0B6' text='Codekeeper'
        subtext='Codekeeper is an all-in-one solution for software'
        subtext2='developers and publishers to provide source code escrow'
        subtext3='as part of service level and license agreements.'
        imagePath='/img/slide3.png' altText='ipad' href='#' />
        
        <Slide color='#8B60D3' text='LegalSite'
        subtext='Protected against legal risks, privacy compliant and'
        subtext2='always up-to-date with the latest regulatory'
        subtext3='developments.'
        imagePath='/img/slide4.png' altText='macbook' href='#' />
    </div>
  )
}
