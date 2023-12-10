import React from 'react'

export default function Slide({color, text, imagePath, altText, href, subtext, subtext2 = null, subtext3 = null, subtext4 = null, subtext5 = null}) {
  return (
    <div className='slideBlock'>
        <p className='slideMainText' style={{color: color}}>{text}</p>
        <p className='slideSubText'>
            {subtext}
            {subtext2? <br /> : null}
            {subtext2? subtext2 : null}
            {subtext3? <br /> : null}
            {subtext3? subtext3 : null}
            {subtext4? <br /> : null}
            {subtext4? subtext4 : null}
            {subtext5? <br /> : null}
            {subtext5? subtext5 : null}
        </p>
        <center><img width='583.141px' height='380.324px' src={imagePath} className='slideImage' alt={altText}/></center>
        <center><a href={href} className='buttonOutlined'>More</a></center>
    </div>
  )
}
