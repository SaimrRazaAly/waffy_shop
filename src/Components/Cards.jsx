import Image from 'next/image'
import React from 'react'

const Product_Card = ({title,price}) => {
  return (
    <div>
       <div>
      <Image/>

       </div>
       <h2>{title}</h2>
       <p>{price}</p>
    </div>
  )
}

export default Cards