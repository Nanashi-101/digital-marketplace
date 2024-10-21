import React from 'react'

function CustomProducts({params}: {params: {category: string}}) {
  return (
    <div>
      <h1>Hello from {params.category}</h1>
    </div>
  )
}

export default CustomProducts
