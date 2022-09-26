import { useState, Key } from 'react';
import Card from './Card';

type PaginationProps = {
  data: any,
  dataLimit: number,
}

const Pagination = ({ data, dataLimit }: PaginationProps) => {
  const [pages] = useState(Math.round(data.length / dataLimit) + 1);
  const pageLimit = Math.round(data.length / dataLimit);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const gotToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event: any) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill(null).map((_, idx) => start + idx + 1);
  };

  return (
    <>
      <div className="grid-container">
        {getPaginatedData().map((d: any, index: Key | null | undefined) => (
            <Card key={index} data={d} />
        ))}
      </div>
      <div className="pagination">
        <button 
          onClick={gotToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled": ""}`}
        >
          prev
        </button>
        {getPaginationGroup().map((item, index) => 
          <button
            key={index}
            onClick={changePage}
            className={`pagination-item ${currentPage === item ? "active" : null}`}
          >
            <span>{item}</span>
          </button>
        )}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled": ""}`}
        >
          next
        </button>
      </div>

    </>
  )
}
export default Pagination;