import React, {Component} from 'react'

class Product extends Component {
  render() {
    console.log("Products", this.props);
    return (
      <div>
        <p>Product COMPONENT</p>
      </div>
    )
  }
}

export default Product;