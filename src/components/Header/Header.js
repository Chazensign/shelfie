import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
  return ( 
    <header>
      <Link to='/' ><div className='logo'>SHELFIE</div></Link>
      <Link to='/' ><button>Dashboard</button></Link>
      <Link to='/add'><button>Add Inventory</button></Link>
      </header>
   );
}
 
export default Header;