import React from 'react';
import s from './Pagination.module.css'

let Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    let currentPage = props.currentPage;

    for(let i = 0; i <= pagesCount; i++){
        pages.push(i);
    }

    let firstPage = 1;
    let lastPage = pages.length - 1;

    pages = pages.filter((el) => {
        if(el === firstPage || el > currentPage - 5  && el < currentPage + 10 || el === lastPage) {
            return el
        }
        return null
    });

    return (
        <div className={s.pagination}>
            {pages.map(p => {
                return <span
                    className={props.currentPage === p && s.activePage}
                    onClick={(e) => {
                        props.onPageChanged(p)
                    }}
                >{p}</span>
            })}
        </div>
    )
};

export default Pagination;

