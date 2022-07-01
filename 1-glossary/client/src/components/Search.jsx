import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.clearSearchFilter = this.clearSearchFilter.bind(this);
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({
      entry: e.target.value
    });
  }

  handleSearchSubmit(e) {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
  }

  clearSearchFilter(e) {
    e.preventDefault();
    this.props.onSearchSubmit('');

  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSearchSubmit}>
          <input onChange = {this.handleChange} type ='text' placeholder = 'Search for a word...'/>
          <button>Search</button>
          <button onClick = {this.clearSearchFilter}>Get All</button>
        </form>
     </div>
    )
  }
}

export default Search;