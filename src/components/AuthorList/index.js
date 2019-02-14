import React, {Component} from 'react';
import './AuthorList.css';


class AuthorList extends Component {
    render() {
        const {name, count_pub, pageviews} = this.props;
        const {count, classColor, grayBckg} = this.props.settings;
        const firstLetter = name[0];
        return (
            <div className={grayBckg + ' author-list'}>
                <span className='count'>{count+1}</span>
                <div className={classColor + ' logo-name'}>
                    {firstLetter}
                </div>
                <div className='full-name'>
                    {name} <br />
                    <span className='count_pub'>{count_pub} публ.</span>
                </div>
                <div className='medal' />
                <div className='pageviews'>
                    {pageviews}
                </div>
            </div>
        );
    }
}

export default AuthorList;