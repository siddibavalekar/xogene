import React from 'react'
import "./Democss.css"
import Search from './Search'
import xo from './xo.png'

function Demo1() {
  return (
    <div className='main-frame'>
    <div className='navBar'>
        <img className='xogeneLogo' src={xo} alt='image not found'></img>
        <span className='page-title'>Search Drugs</span>

    </div>

<div className='main-body'>

<Search/>

</div>




    </div>
  )
}

export default Demo1