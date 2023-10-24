import React from 'react'

function Product(props) {
  return (

<div className='col-md-6'>

<h3> {props.titel} </h3>
<p > {props.desc}</p>

</div>

  )
}

export default Product