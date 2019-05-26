import React, { Component } from 'react';
import Book from '../Book/Book';


export default class BookList extends Component {
    static defaultProps = {
        books: []
    }

    
    render() {
        let list = this.props.books.map((book, index) => {
            return(
                <li key={index}>
                    <Book {...book} />
                </li>
            ) 
        })
        
        return (
            <ul>
                {list}
            </ul>   
        )
    }
}
