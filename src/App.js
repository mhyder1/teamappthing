import React, { Component } from 'react';
import './App.css';
import BookList from './BookList/BookList';
import SearchForm from './SearchForm/SearchForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksArray: [],
      url: 'https://www.googleapis.com/books/v1/volumes?q='
    };
    //this.
  }

  componentDidMount() {
    this.bookSearch('peter rabbit');
  }

  submit = search => e => {
    e.preventDefault();
    console.log('submitted...', search)
    // let url = `${this.state.url}${search.searchTerm}&filter=${search.bookType}&printType=${search.printType}`
    // // console.log(url)
    // let URL = `${this.state.url}${encodeURIComponent('peter rabbit')}`
    // console.log(URL)
    this.bookSearch()
  }

  bookSearch(searchTerm) {
    fetch(`${this.state.url}${searchTerm}`)
    .then(function(response) {
      return response.json();
    })
    .then((booksJson) => {
      console.log(booksJson)
      let arr = booksJson.items.map(item => {
        return {
          title: item.volumeInfo.title,
          subtitle: item.volumeInfo.subtitle,
          authors: item.volumeInfo.authors,
          listprice: item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : null,
          imgurl: item.volumeInfo.imageLinks.smallThumbnail,
        }
      });
      this.setState({
        booksArray: arr
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Googly Book Search</h1>
        </header>
          <SearchForm handleSubmit={this.submit}/>
          <BookList books={this.state.booksArray} />
      </div>
    );
  }
}

