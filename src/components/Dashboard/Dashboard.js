import React, { Component } from 'react';
import Products from '../Products/Products'
import axios from 'axios'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventory: []
    }
  }
  componentDidMount() {
    axios.get("/api/inventory").then(res => {
      this.setState({ inventory: res.data })
    })
  }
  deleteProd = (id) => {
    axios.delete(`/api/inventory/${id}`)
    .then(res => {
      this.setState({ inventory: res.data });
    })
    .catch(err => console.log(err))
  }
  render() {
    console.log(this.state.inventory)
    return (
      <div>
        <Products deleteProd={this.deleteProd} inventory={this.state.inventory} />
      </div>
    )
  }
}
 
export default Dashboard;