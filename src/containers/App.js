import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as authorAction from '../actions/authors';
import * as filterActions from '../actions/filter';

import App from '../components/App';

import orderBy from 'lodash/orderBy';

const pagination = (authors, startPagination, endPagination) => {
    return authors.slice(startPagination, endPagination);
}
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

const searchAuthor = (authors, filterBy, searchQuery, startPagination, endPagination) => {
    return pagination(sortBy(filterAuthors(authors, searchQuery), filterBy), startPagination, endPagination);
}

const mapStateToProps = ({authors, filter}) => ({
    authors: authors.items && searchAuthor(authors.items, filter.filterBy, filter.searchQuery, authors.startPagination, authors.endPagination, authors),
    isReady: authors.isReady,
    startPagination: authors.startPagination,
    endPagination: authors.endPagination
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(authorAction, dispatch),
    ...bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
