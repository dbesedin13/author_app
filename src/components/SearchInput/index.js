import React, {Component} from 'react';

import './SearchInput.css'

class SearchInput extends Component {
    render() {
        const {searchQuery, setSearchQuery} = this.props;
        return (
            <input
                type="text"
                name='search'
                value={searchQuery}
                className='search-input'
                placeholder='Поиск автора по имени'
                onChange={e => setSearchQuery(e.target.value)}
            />
        );
    }
}

export default SearchInput;