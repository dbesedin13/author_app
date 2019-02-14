import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as authorAction from '../actions/authors';
import * as filterActions from '../actions/filter';

import App from '../components/App';

import orderBy from 'lodash/orderBy';


const sortBy = (authors, filterBy) => {
    switch (filterBy) {
        case 'toBig':
            return orderBy(authors, 'pageviews', 'desc');
        case 'toSmall':
            return orderBy(authors, 'pageviews', 'asc');
        case 'az':
            return orderBy(authors, 'name', 'desc');
        case 'za':
            return orderBy(authors, 'name', 'asc');
        default:
            return authors;
    }
};

const filterAuthors = (authors, searchQuery) =>
    authors.filter(
        i =>
            i.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    );

const searchAuthor = (authors, filterBy, searchQuery) => {
    return sortBy(filterAuthors(authors, searchQuery), filterBy)
}


const mapStateToProps = ({authors, filter}) => ({
    authors: authors.items && searchAuthor(authors.items, filter.filterBy, filter.searchQuery),
    isReady: authors.isReady
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(authorAction, dispatch),
    ...bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
