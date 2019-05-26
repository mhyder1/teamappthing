import React, { Component } from 'react';


export default class SearchForm extends Component {
  state = {
    searchTerm: '',
    bookType: '',
    printType: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  render() {
      let searchTerms = {
          searchTerm: this.state.searchTerm,
          bookType: this.state.bookType,
          printType: this.state.printType
      }
    return(
        <div className="searchBooks">
            <form className="searchBooksForm" 
            onSubmit={this.props.handleSubmit(searchTerms)}>
                <label htmlFor="search">Search: </label>
                <input
                    value={this.state.searchTerm} onChange={this.handleChange}
                    type="text"
                    name="searchTerm"
                    id="search"
                    placeholder="peter rabbit"  // put value and onClick or whatever here
                    >
                </input >
                <button type="submit">Search</button>

                <label htmlFor="printType">Print Type:</label>
                <select
                    value={this.state.printType} 
                    onChange={this.handleChange}
                    id="printType"
                    name="printType">
                <option value="">All</option>
                <option value="books">Books</option>
                <option value="magazines">Magazines</option>
                </select>
                
                <label htmlFor="filter">Book Type:</label>
                <select
                    value={this.state.bookType} 
                    onChange={this.handleChange}
                    id="filter"
                    name="bookType">
                <option value="">No Filter</option>
                <option value="partial">partial</option>
                <option value="full">full</option>
                <option value="free-ebooks">free-ebooks</option>
                <option value="paid-ebooks">paid-ebooks</option>
                <option value="ebooks">ebooks</option>
                </select>
            </form>
        </div>
    )
  }
}
