import React, { Component } from 'react';
import './App.css';
// import './assets/css/bootstrap.min.css';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import ProductList from './components/ProductList';

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
  
  performSearch = (query = 'baju') => {
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
            <h1 className="main-title">Product Search</h1>
            <SearchForm onSearch={this.performSearch} />      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
             ? <p>Loading...</p>
             : <div><h2>{this.state.query}</h2><ProductList data={this.state.products} /></div>
          }          
        </div>
      </div>
    );
  }
}