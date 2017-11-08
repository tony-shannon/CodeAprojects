import React from 'react';
import './SearchBar.css';

handleTermChange()=this; // from step 14
handleLocationChange()=this; // from step 14

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

getSortByClass(sortByOption){
  if (this.state[sortBy] === sortByOption) {
    return 'active';
  }
  else {
    return '';
  }
};

.handleSortByChange(sortByOption){
  .setState(state= sortBy); // this needs work and is from step 7 in Ravenous III
};

handleTermChange(event) {
  setState({
    term: event.target.value
  })
};
handleLocationChange(event) {
  setState({
    location: event.target.value
  })
};

handleSearch(event) {
  this.props.searchYelp(state.term, state.location, state.sortBy);
  event.preventDefault();
};

handleSearch=this.handleSearch();

class SearchBar extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     term: '',
     location: '',
     sortBy: 'best_match'
   };
 }

  renderSortByOptions(){
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li className=getSortByClass(sortByOptionValue) onClick=handleSortByChange.bind(this, sortByOptionValue) key={sortByOptionValue}> {sortByOption} </li>
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
        <input onChange=handleTermChange(event),handleLocationChange(event)  placeholder="Search Businesses" />
        <input onChange=handleTermChange(event),handleLocationChange(event) placeholder="Where?" />
        </div>
        <div onClick=this.handleSearch className="SearchBar-submit">
        <a>Lets Go</a>
        </div>
    </div>
    );
  }
}

export default SearchBar;
