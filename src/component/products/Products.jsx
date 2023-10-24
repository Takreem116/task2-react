import React from 'react'
import Product from '../product/Product'

function Products() {



    const products=[{id:1,titel:'takreem',desc:'my name is takreem'} ,
    {id:2,titel:'Iphone',desc:'this is Iphobe'} , 
    {id:2,titel:'Galaxy',desc:'this is galaxy'} ,
    {id:2,titel:'Sammsung',desc:'this is sammsung'}
]
  return (
    <div className='row text-center py-5'>



{products.map((product)=>{
    return <Product {...product} key={product.id}/>
})}




    </div>
  )
}

export default Products