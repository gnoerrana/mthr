import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import SearchForm from './components/SearchForm';
import ProductList from './components/ProductList';
import logo from './assets/images/mds-logo.svg';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
  } 

  componentDidMount() {
    this.performSearch();
  }
  
  performSearch = (query = '') => {
    axios.get(`https://services.mataharimall.com/products/v0.2/products/search?q=${query}&per_page=36&sort=date+DESC`)
      .then(response => {
        this.setState({
          query: query,
          products: response.data["data"]["products"],
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });    
  }
  
  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
             ? <div className="container mobile-container loader"><img className="loading" src={logo}/></div>
             : <div className="container mobile-container"><div className="result-text"><h2>"{this.state.query}"</h2></div><ProductList data={this.state.products} /></div>
          }          
        </div>
      </div>
    );
  }
}