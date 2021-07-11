import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.props.onSearch}
        />
        <p>
          <input
            value={this.props.inStockOnly}
            type="checkbox"
            onChange={this.props.onChecked}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
