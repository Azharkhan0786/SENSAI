import React from 'react'

function Authlayout({children}) {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      {children}
    </div>
  )
}

export default Authlayout;