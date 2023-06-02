import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1>Welcome To Traversy Media </h1>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>about</Link></li>
        <li><Link href='/about/team'>team</Link></li>
      </ul>
    </div>
  )
}

export default HomePage