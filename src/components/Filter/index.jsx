import React from 'react';
import './Filter.css';

const Filter = ({setFilter}) => (
    <div className='filter'>
        <div className='filter-container'>
            Фильтр по имени:
            <button onClick={e => setFilter(e.target.name)} className='arrow_btn' name='az'>&uarr;</button>
            <button onClick={e => setFilter(e.target.name)} className='arrow_btn' name='za'>&darr;</button>
        </div>
        <div className='filter-container'>
            Фильтр по просмотрам:
            <button onClick={e => setFilter(e.target.name)} className='arrow_btn' name='toBig'>&uarr;</button>
            <button onClick={e => setFilter(e.target.name)} className='arrow_btn' name='toSmall'>&darr;</button>
        </div>


    </div>
);

export default Filter;
