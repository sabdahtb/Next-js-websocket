import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='p-5'>
      <p className='text-2xl font-semibold'>
        <span className='text-blue-600'>Crypt</span>Next
      </p>
      <p className='text-sm'>
        Crypto Tracker with
        <Link
          target='_blank'
          href='https://nextjs.org'
          className='text-blue-300'>
          {' Next JS '}
        </Link>
        and
        <Link
          target='_blank'
          href='https://www.coinapi.io/'
          className='text-blue-300'>
          {' CoinApi.io '}
        </Link>
      </p>
    </div>
  )
}

export default Navbar
