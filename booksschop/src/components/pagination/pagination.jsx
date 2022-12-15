import React from 'react';
import "./pagination.css";
import _ from "lodash"
import { useSelector, useDispatch } from 'react-redux'
import { changeCurrentPage } from '../../store/reducer';

const Pagination = () => {

    const cardList = useSelector((state) => state.books);
    const currentPage = useSelector((state) => state.currentPage);
    const pageSize = useSelector((state) => state.pageSize);
    const dispatch = useDispatch();

    const pageCount = Math.ceil(cardList.length / pageSize);
    if (pageCount <=1) return null;
    const pages = _.range(1, pageCount + 1);

    const onPrevious = () => {
    if(currentPage!==1)
        dispatch(changeCurrentPage(currentPage-1))
    }

    const onNext = () => {
        if(currentPage!==pageCount)
            dispatch(changeCurrentPage(currentPage+1))
    }
    
    return ( 
<nav>
  <ul className="pagination">
                <li className="page-item">
                    <button className={"link-button" + (currentPage === 1 ? " noactive" : "")} href="#"
                    onClick={onPrevious}>Previous</button></li>

                {pages.map((page) => <li className={"page-item" + (page===currentPage? " active" : "") }
                    key={page}
                >
                    <button className="link-button"
                    key={page} onClick={() => dispatch(changeCurrentPage(page))}>{page}</button></li>   
                )}

                <li className="page-item"><button className={"link-button" + (currentPage===pageCount? " noactive" : "")}
                    onClick={onNext}>Next</button></li>
  </ul>
</nav>

     );
}
 
export default Pagination;