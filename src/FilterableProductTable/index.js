import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  static defaultProps = {
    products: [
      { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
      { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
      { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
      { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
      { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
      { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
    ],
  }

  state = {
    filterText: '',
    inStockOnly: false
  }

  handleChecked = (event) => {
    this.setState({
      inStockOnly: event.target.checked
    });
  }
  handleSearch = (event) => {
    this.setState({
      filterText: event.target.value
    });
  }
  render() {
    let filterText = this.state.filterText;
    const inStockOnly = this.state.inStockOnly;
    const products = this.props.products.reduce((res, cur, index) => {
      if (filterText === '') {
        if (inStockOnly) {
          if (cur.stocked) {
            res.push(cur)
          }
        } else {
          res.push(cur)
        }
      } else {
        if (cur.name.includes(filterText)) {
          if (inStockOnly) {
            if (cur.stocked) {
              res.push(cur)
            }
          } else {
            res.push(cur)
          }
        }
      }
      return res
    }, [])
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onChecked={this.handleChecked}
          onSearch={this.handleSearch}
        />
        <ProductTable
          products={products}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
