import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as style from './EmployeePagination.module.css'

import arrow_left from './img/arrow_left.svg'
import arrow_right from './img/arrow_right.svg'
import {setCurrentPage} from "../../../../../store/listFilterSlice";

const PaginationButton = ({
                              children, style, onClickCallback = (e) => {
    }
                          }) => {
    const filterStore = useSelector(state => state.filter);
    const employeeStore = useSelector(state => state.employee);
    const dispatch = useDispatch();

    const onClick = (e) => {
        onClickCallback()

        if (isNaN(+children.toString())) {
            return;
        }

        dispatch(setCurrentPage(parseInt(children)))
    }

    return (<button style={style}
                    onClick={onClick}>{children}</button>)
}

const EmployeePagination = (props) => {
    const [maxPage, setMaxPage] = React.useState(4);

    const employeeStore = useSelector(state => state.employee);
    const filterStore = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const arrowClick = (e, arrowDirection) => {
        if (arrowDirection !== null) {
            switch (arrowDirection) {
                case 'left': {
                    if (filterStore.currentPage <= 1) {
                        return;
                    }
                    dispatch(setCurrentPage(filterStore.currentPage - 1))
                    return;
                }
                case 'right': {
                    if (filterStore.currentPage >= Math.ceil(employeeStore.list.length / filterStore.elementsOnPage.value) - maxPage - 1) {
                        return;
                    }
                    dispatch(setCurrentPage(filterStore.currentPage + 1))
                    return;
                }
            }
        }
    }

    return (<div className={style.pagination}>
        <PaginationButton onClickCallback={e => arrowClick(e, 'left')}>
                <span className={style.arrow}
                      style={{backgroundImage: `url(${arrow_left})`}}></span>
        </PaginationButton>

        {[...Array(Math.ceil(employeeStore.list.length / filterStore.elementsOnPage.value))].map((elem, index) => {
            const pageCount = Math.ceil(employeeStore.list.length / filterStore.elementsOnPage.value);
            const maxVisiblePage = maxPage + filterStore.currentPage - 1;
            const isDoNotShowPointers = filterStore.currentPage + maxPage + 1 > pageCount - 1;

            if (index === maxVisiblePage && !isDoNotShowPointers) {
                return <PaginationButton key={index}>...</PaginationButton>
            } else if (isDoNotShowPointers && index >= maxVisiblePage) {
                return <PaginationButton key={index}>{index + 1}</PaginationButton>
            } else if (index >= maxVisiblePage && index + 1 < pageCount || index < filterStore.currentPage - 1) {
                return null;
            }

            return <PaginationButton key={index}>{index + 1}</PaginationButton>
        })}

        <PaginationButton onClickCallback={e => arrowClick(e, 'right')}>
                <span className={style.arrow}
                      style={{backgroundImage: `url(${arrow_right})`}}></span>
        </PaginationButton>
    </div>);
}

export default EmployeePagination;