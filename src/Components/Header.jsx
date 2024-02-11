import React from 'react'

function Header() {
  return (
    <div className='d-flex' style={{textAlign:'center', backgroundColor:'rgb(241, 60, 60)', color:'white',padding:'12px'}}>
        <i class="fa-solid fa-cart-shopping ms-2 me-3 fs-4 mt-1"></i>
        <h4>EMI Calculator</h4>
    </div>
  )
}

export default Header