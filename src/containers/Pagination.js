import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as authorAction from '../actions/authors';

import Pagination from '../components/Pagination/index';


const mapStateToProps = ({authors}) => ({
    currentPage: authors.currentPage,
    startPagination: authors.startPagination,
    endPagination: authors.endPagination
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(authorAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
