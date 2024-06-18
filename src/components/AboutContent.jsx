import Link from 'next/link'
import React from 'react'

const AboutContent = () => {
  return (
    <div className='flex space-x-6'>
      <Link href={'/about/history'}>history</Link>
      <Link href={'/about/history/vision'}>vision</Link>
      <Link href={'/about/mission'}>mission</Link>
    </div>
  )
}

export default AboutContent
