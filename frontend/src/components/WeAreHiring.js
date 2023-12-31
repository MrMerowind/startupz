import React from 'react'

export default function WeAreHiring() {



    const imgTranslateStyle = (height) => ({
        transform: 'translateY(-'+ (height) + 'px)',
        pointerEvents: 'none'
    });

  return (
    <div className='contentbox' id='hiring'>
            <img width='1004px' height='722px' style={imgTranslateStyle(722 / 3)} className='imageOnLeft' src='/img/flyingleft.png' alt='Person flying' />
            <img width='1062px' height='764px' style={imgTranslateStyle(764 / 3)} className='imageOnRight' src='/img/flyingright.png' alt='Person looking through a telescope' />
        <div className='text-center'>
            <h2>We are hiring!</h2>
            <h4>
                We're always looking for talented people<br />
                to join and help build our startups.<br />
                Check out our current openings
            </h4>
            <a className='button' href='#openings'>See current openings</a>
        </div>
    </div>
  )
}
