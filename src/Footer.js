import React from 'react'

const Footer = ({length}) => {
  return (
    <div className='footer '>
      <p>{length} list {length === 1 ? "item" : "items"}</p>
    </div>
  )
}

export default Footer;