import React from 'react'

const Footer = () => {
    let footers={
        position:"relative",
        top:"20px",
        width:"100%"
    }
  return (
    <div className='bg-dark text-light p-2' style={footers}>
      <p className='text-center'>Copyright &copy; MyTodoList.com</p>
    </div>
  )
}

export default Footer
