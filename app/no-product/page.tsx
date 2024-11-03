import React from 'react'
import NoProduct from '../components/noProduct'

function NoProductRoute() {
  return (
    <section className='max-w-7xl mx-auto  mt-4 my-16 px-4 md:px-8'>
      <h1 className='text-6xl font-medium roboto w-full my-24'>Sorry, but this product is not yet available</h1>
      <NoProduct text="Product"/>
    </section>
  )
}

export default NoProductRoute
