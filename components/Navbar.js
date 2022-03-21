import React from 'react'

const Navbar = ({brand}) => {
  return (
      <nav className="navbar navbar-dark bg-black">
      <div className="container">
        <a href="/" className="navbar-brand text-uppercase">  
            {brand}
        </a>  
      </div>  
    </nav>    
  )
}

export default Navbar