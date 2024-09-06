import React from 'react'

const Header = () => {
  return (
    <div className='header-section'>
     <div className='left'>
      <div className='title'>
        Lifestyle
        </div>
        </div>
     <div className='center'><ul>
      <li>Women</li>
      <li>Men</li>
      <li>Kids</li>
      </ul>
      </div>
      <div className='search'>
        <input type='text' placeholder='Search here...'/>
      </div>
     <div className='right'>
      <div className='signin'>
        Signin/Signup
      </div>
      <div className='cart'>
        Cart
      </div>
     </div>
    </div>
  )
}

export default Header
