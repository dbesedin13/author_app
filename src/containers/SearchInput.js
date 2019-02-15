import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as filterAction from '../actions/filter';

import Search from '../components/SearchInput/index';


const mapStateToProps = ({filter}) => ({
    filterBy: filter.filterBy
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
