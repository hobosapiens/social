import React, {useState} from 'react';
import s from './Pagination.module.css'
import cn from 'classnames';

let Pagination = ({currentPage, totalItemsCount, pageSize, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.pagination}>
            {portionNumber > 1 &&
            <div className={s.paginationPrev}>
                <button onClick={() => {
                    setPortionNumber(1)
                }}>1...
                </button>
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }} className={s.paginationLeftArrow}>{'<<'}</button>
            </div>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span
                        className={cn({[s.activePage]: currentPage === p}, s.pageNumber)}
                        key={p}
                        onClick={(e) => {
                            onPageChanged(p)
                        }}>
                            {p}
                        </span>
                })}
            {portionCount > portionNumber &&
            <div className={s.paginationNext}>
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }} className={s.paginationRightArrow}>{'>>'}</button>
                <button onClick={() => {
                    setPortionNumber(portionCount)
                }}>...{pages.length}</button>
            </div>

            }
        </div>
    )
};

export default Pagination;

