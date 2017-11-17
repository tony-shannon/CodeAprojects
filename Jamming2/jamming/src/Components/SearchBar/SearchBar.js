import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };

    this.handleTermChange=this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter a Song, Album, or Artist" onChange={this.handleTermChange} />
        <a onClick={this.search}>Search  </a>
      </div>
    );
  }

  handleTermChange(event){
    this.setState({term: event.target.value });
  }

  search(){
    this.props.onSearch(this.state.term);
    console.log(this.state.term);
  }
}

export default SearchBar;
