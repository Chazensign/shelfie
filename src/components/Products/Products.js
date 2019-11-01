import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Products.css'

class Products extends Component {

  
  render(props) { 
    return ( 
      <div>
        {this.props.inventory.map(prod => 
          <div key={prod.id} className='prod-contain'>
            <img src={prod.img} alt='the product'/>
            <div>
              <h2>{prod.name}</h2>
              <h4>$ {prod.price}</h4>
              <div className='prod-buttons'>
                <button onClick={() => this.props.deleteProd(prod.id)} >Delete</button>
                <Link to={`/add/${prod.id}`}><button>Edit</button></Link>
              </div>
            </div>
          </div>
          )}
      </div>
     );
  }
}
 
export default Products;