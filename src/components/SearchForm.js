import React, { Component } from 'react';
// import logoSearch from '../assets/images/search.svg';

export default class SearchForm extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               ref={(input) => this.query = input}
               placeholder="Search..." />
               <button className="search-btn"><img src="https://cdnjs.cloudflare.com/ajax/libs/topcoat-icons/0.1.0/svg/search.svg"/></button>
      </form>      
    );
  }
}