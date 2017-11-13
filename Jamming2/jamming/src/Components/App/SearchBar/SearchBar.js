import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  render()
    {
    return
      <div className="SearchBar" onChange={this.handleTermChange}>
        <input placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div
    }

  handleTermChange(term){
    this.SearchBar.state.term = term;
  }

  search(search){
    this.props.onSearch = search;
  }
}

export default SearchBar;
