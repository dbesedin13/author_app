import React, {Component} from 'react';

import './SearchInput.css'

class SearchInput extends Component {
    state = {
        search: ''
    }
    chgInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <input
                type="text"
                name='search'
                value={this.state.search}
                onChange={this.chgInput}
                className='search-input'
                placeholder='Поиск автора по имени'
            />
        );
    }
}

export default SearchInput;