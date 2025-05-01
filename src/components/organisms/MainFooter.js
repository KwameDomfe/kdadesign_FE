import React from 'react'

import MainFooterNav from './MainFooterNav'
import MainFooterPoweredBy from './MainFooterPoweredBy'
const MainFooter = () => {
  return (
    <article id=""
        className="bg-black-90"
        tabIndex="0" 
        title="" 
        aria-label=""
    >

        <MainFooterNav />
        <MainFooterPoweredBy />
    </article>
  )
}

export default MainFooter
