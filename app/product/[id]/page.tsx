import prisma from '@/app/lib/db';
import { Carousel, CarouselContent } from '@/components/ui/carousel'
import React from 'react'

async function getProduct() {
  const data = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      price: true,
      currency: true,
      smallDescription: true,
      description: true,
      images: true,
      category: true,
    },
    take: 4,
  });

  return data;
}

function ProductIdPage() {
  return (
    <section className='max-w-7xl mx-auto px-4 lg:px-8 lg:gid lg:grid-row-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16'>
      <Carousel className='lg:row-end-1 lg:col-span-4'>
        <CarouselContent>

        </CarouselContent>
      </Carousel>
    </section>
  )
}

export default ProductIdPage
