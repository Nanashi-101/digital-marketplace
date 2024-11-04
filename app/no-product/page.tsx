import React from 'react'
import NoProduct from '../components/noProduct'
import { Button } from '@/components/ui/button'
import { ButtonFull } from '../components/SubmitButton'
import { Label } from '@/components/ui/label';
import Link from 'next/link';

function NoProductRoute() {
  return (
    <section className="max-w-7xl mx-auto  mt-4 my-16 px-4 md:px-8">
      <h1 className=" text-2xl sm:text-2xl md:text-6xl text-center font-medium roboto w-full mt-24 mb-12 roboto-700">
        Sorry, but this product is not yet available
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-3 space-y-4 sm:space-y-0 text-muted-foreground">
        <Label>Would you like to add this product?</Label>
        <Button className="flex items-center text-lg w-[70%] sm:w-[15%] mx-auto sm:mx-0 transition-all ease-linear hover:scale-105 hover:drop-shadow-lg">
          <Link href="/sell">Add Product</Link>
        </Button>
      </div>
    </section>
  );
}

export default NoProductRoute
