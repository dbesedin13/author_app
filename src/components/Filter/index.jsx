import React from 'react';
import './Filter.css';

const Filter = () => (
    <div className='filter'>
        <div className='filter-container'>
            Filter by name:
            <button className='arrow_btn'>&uarr;</button>
            <button className='arrow_btn'>&darr;</button>
        </div>
        <div className='filter-container'>
            Filter by pageview:
            <button className='arrow_btn'>&uarr;</button>
            <button className='arrow_btn'>&darr;</button>
        </div>


    </div>
);

export default Filter;
