import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
 constructor(props) {
   super(props);

   this.state = {
     term: '',
     location: '',
     sortBy: 'best_match'
   };

   this.handleTermChange = this.handleTermChange.bind(this); // from step 14
   this.handleLocationChange = this.handleLocationChange.bind(this); // from step 14
   this.handleSearch= this.handleSearch.bind(this);
   this.handleSortByChange= this.handleSortByChange.bind(this);

   this.sortByOptions = {
     'Best Match': 'best_match',
     'Highest Rated': 'rating',
     'Most Reviewed': 'review_count'
   };
 }

 getSortByClass(sortByOption){
   if (this.state.sortBy === sortByOption) {
     return 'active';
   }
   return '';
 }

 handleSortByChange(sortByOption){
   this.setState({sortBy: sortByOption}); // this needs work and is from step 7 in Ravenous III
 }

 handleTermChange(event) {
   this.setState({term: event.target.value});
 }

 handleLocationChange(event) {
   this.setState({location: event.target.value});
 }

 handleSearch(event) {
   this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
   event.preventDefault();
 };



renderSortByOptions(){
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li  className={this.getSortByClass(sortByOptionValue)}
                  key={sortByOptionValue}
                  onClick={this.handleSortByChange}>
                  {sortByOption}
             </li>);
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
        <input onChange={this.handleTermChange}  placeholder="Search Businesses" />
        <input onChange={this.handleLocationChange} placeholder="Where?" />
        </div>
        <div  className="SearchBar-submit">
        <a onClick={this.handleSearch}>Lets Go</a>
        </div>
    </div>
    );
  }
}

export default SearchBar;
