import React from "react";
import './index.scss';
import Cards from "../cards/index";

class Carousel extends React.Component {
    constructor(props) {
      super(props);
      this.left = 0;
    }

 getEachProducts(){
      let products = [];
       products = this.props.products.map((item, index) => {
           return  <Cards key={index} product = {item}/>;
           
       });
       return products;
  }

  leftArrow =()=>{
    if(this.left < 0)
     this.left = this.left + 250;
     this.productList.style.left = `${this.left}px`;
  }

  rightArrow =()=>{
    if(this.left > -1500 )
    this.left = this.left - 250;
    this.productList.style.left = `${this.left}px`;
  }
 
    render() {
      const arr = this.getEachProducts();
      return (
        <>
        <div className="leftArrow" onClick = {this.leftArrow} >
          &#10094;</div>
        <div className="carouselcontainer">
          
        <div className="Carousel" ref={(ref) => {this.productList=ref;}}>
          {arr}
        </div>
      
        </div>
        <div className="rightArrow" onClick={this.rightArrow}>&#10095;</div>
        </>
      );
    }
  }
  export default Carousel;