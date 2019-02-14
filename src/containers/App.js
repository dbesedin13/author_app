import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as authorAction from '../actions/authors';

import App from '../components/App';







const mapStateToProps = ({authors}) => ({
    authors: authors.items,
    isReady: authors.isReady
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(authorAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
