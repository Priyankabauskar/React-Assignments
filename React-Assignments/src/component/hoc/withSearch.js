import React, {Component} from 'react';

const withSearch =( WrappedComponent, products )=> {
   class Searchplp extends Component{
    constructor(props) {
      super(props);
      this.state={
        Products : products,
        searchTerm :""
      };
  }

    handleSearch = event => {
      this.setState({ searchTerm: event.target.value });
    };

  filterProducts = () =>{
    const lowerSearch = this.state.searchTerm.toLowerCase().trim();
    const data = this.state.Products.filter(item => {
      return item.sfdcName.toLowerCase().includes(lowerSearch);
    });
    return data;
  }

    render() {
      const { searchTerm} = this.state;    
      return (
        <div>
          <div>
            <input
              onChange={(event)=>this.handleSearch(event)}
              value={searchTerm}
              type="text"
              placeholder="Search"
            />
          </div>
         <WrappedComponent products={this.filterProducts()}/>
        </div>
      );
    }
  };
   return <Searchplp />;
};
export default withSearch;