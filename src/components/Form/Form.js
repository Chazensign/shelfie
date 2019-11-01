import React, { Component } from "react"
import axios from "axios"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      name: "",
      price: null,
      img: "",
      show: true
    }
  }
  componentDidMount = () => {
    if (this.props.match.params.id) {
      console.log('hitting')
      axios.get(`/api/inventory/${this.props.match.params.id}`).then(res => {
        let {id, name, price, img} = res.data[0]
        console.log(res)
        this.setState({
          id: id,
          name: name,
          price: price,
          img: img,
          show: false
        })
      })
      .catch(err => console.log(err))
    }
  }
  clearState = () => {
    this.setState({
      id: "",
      name: "",
      price: 0,
      img: "",
      show: false
    })
  }
  handleChange = (name, value) => {
    this.setState({ [name]: value })
  }
  saveChanges = () => {
    axios
      .put(`/api/inventory/${this.state.id}`, this.state)
      .then(() => this.props.history.push("/"))
      .catch(err => console.log(err))
  }
  addProduct = () => {
    axios
    .post('/api/inventory', this.state)
    .then(() => this.props.history.push('/'))
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.props, this.state)
    let { show, name, price, img } = this.state
    return (
      <div>
        <img src={img} alt="preview of product" />
        <div>Image URL:</div>
        <input
          name="img"
          type="text"
          value={img}
          onChange={e => this.handleChange(e.target.name, e.target.value)}
        />
        <div>Product Name:</div>
        <input
          name="name"
          type="text"
          value={name}
          onChange={e => this.handleChange(e.target.name, e.target.value)}
        />
        <div>Price:</div>
        <input
          name="price"
          type="text"
          value={price}
          onChange={e => this.handleChange(e.target.name, e.target.value)}
        />
        <button onClick={this.clearState}>Cancel</button>
        <button hidden={show} onClick={this.saveChanges}>Save Changes</button>
        <button hidden={!show} onClick={this.addProduct}>Add to Inventory</button>
      </div>
    )
  }
}

export default Form
