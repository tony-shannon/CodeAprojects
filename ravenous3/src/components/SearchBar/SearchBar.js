import React from 'react';
import './SearchBar.css';

const SortByOptions = {
  'Best_Match': 'best_match',
  'Highest_Rated': 'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
  renderSortByOptions(){
    return Object.keys(SortByOptions).map(SortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      <li key={sortByOptionValue}> {SortByOption} </li>
    }  );
  }

  render(){
    return (
    <div className="SearchBar">
        <div className="SearchBar-sort-options">
        <ul>
            {this.renderSortByOptions()}
        </ul>
        </div>
        <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
        <a>Lets Go</a>
        </div>
    </div>
    );
  }
}

export default SearchBar;
