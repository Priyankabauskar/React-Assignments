import React from "react";
import Cards from '../../component/cards/index';

class Plppage extends React.Component {
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
 
    render() {
      const arr = this.getEachProducts();
      return (
        <>
       
        <div className="plpcontainer">
          
        <div className="Plppage" ref={(ref) => {this.productList=ref;}}>
          {arr}
        </div>
      
        </div>
        </>
      );
    }
  }
  export default Plppage;