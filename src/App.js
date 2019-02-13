import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import {setAuthors} from './actions/authors';

import './App.css';

class App extends Component {
    render() {
        const {authors, isReady} = this.props;
        return (
            <div className='container'>
                <ol>
                    {
                        !isReady
                            ? 'Loading...'
                            : authors.map((author, i) => (
                                <li key={i}>Name is: {author.name}</li>
                            ))}
                </ol>
            </div>
        );
    };

    componentWillMount() {
        const {setAuthors} = this.props;
        axios.get('/data.json').then(({data}) => {
            setAuthors(data);
        })

    };
};


const mapStateToProps = ({authors}) => ({
    authors: authors.items,
    isReady: authors.isReady
});

const mapDispatchToProps = dispatch => ({
    setAuthors: authors => dispatch(setAuthors(authors))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
