import React from 'react'

const Sec_Heading = ({title,para}) => {
  return (
    <div className='text-center'>
        <h2 className='text-4xl text-amber-900 font-semibold italic font-serif'>{title}</h2>
        <p>{para}</p>
    </div>
  )
}

export default Sec_Heading