import React from "react";
import './index.scss';


class Cards extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="Cards">
            <div className="container">
               <img src={this.props.product.compositeProducts[0].EProductMedia.smallURI} />
                <div className="description"><h4><b>{this.props.product.sfdcName}</b></h4> </div> 
                <p>{this.props.product.compositeProducts[0].priceEntry.listPrice}</p> 
                <button type="submit" className="addcart">Add To Cart </button>
            </div>
           
        </div>
      );
    }
  }
  export default Cards;