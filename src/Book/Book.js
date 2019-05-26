import React, { Component } from 'react';

export default class Book extends Component {
    static defaultProps = {
        title: 'title',
        subtitle: '',
        authors: '',
        listprice: 1,
        imgurl: 'http.whatever'
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.imgurl} alt={this.props.title}/>
                <p>{this.props.subtitle}</p>
                {this.props.authors}
                {this.props.listprice && <p>Price: {this.props.listprice }</p>}
                <hr/>
            </div>   
        )
    }
}
