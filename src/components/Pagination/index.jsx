import React from 'react';
import './Pagination.css';

const Pagination = ({setNextPage, setPrevPage, startPagination, endPagination}) => {
    const dNonePrev = startPagination === 0 ? 'd-none' : null;
    return(
        <div className='pagination'>
            <div className={dNonePrev} onClick={setPrevPage}>&lt;</div>
            {startPagination+1} - {endPagination}
            <div onClick={setNextPage}>&gt;</div>
        </div>)
};

export default Pagination;
