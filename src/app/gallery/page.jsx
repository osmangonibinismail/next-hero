import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen px-12 py-24'>
      <h6 className='text-3xl mb-12'>Gallery Page</h6>
      <div>
        {
            [706, 707, 708, 709, 710]?.map((img) => (
                <Image key={img} src={`/images/${img}.jpg`} alt="" height="1080" width="1920"/>
            ))
        }
      </div>
      {/* <Image src="/images/706.jpg" alt="" height="1080" width="1920"/> */}
    </div>
  )
}

export default page
