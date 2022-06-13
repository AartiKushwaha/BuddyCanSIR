import React, {useState, useLocation, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import Cards from "../Admin-cards/Cards";
import axios from "axios";
import "./pagination.css";

export default function Pagination(){
  return(
    <>
    <div class="pagination">
      <button class="pageBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="btn--icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div class="pages">
        <a class="page active">1</a>
        <a class="page">2</a>
        <a class="page ">3</a>
        <a class="page">4</a>
        <a class="page">5</a>
        <a class="page">6</a>
        <a class="page">...</a>
        <a class="page">23</a>
      </div>
      <button class="pageBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="btn--icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
    </>
  )
}


// import React, {useState, useLocation, useEffect} from 'react';
// import ReactPaginate from 'react-paginate';
// import Cards from "../Admin-cards/Cards";
// import axios from "axios";

// function Pagination(){
//   const [requests, setRequests] = useState([]);
//   const { search } = useLocation();

//   useEffect(() => {
//     const fetchRequests = async () => {
//       const res = await axios.get("/requests" + search)
//       setRequests(res.data)
//     }
//     fetchRequests()
//   }, [search])

//   const [users, setUsers]=useState(requests);
//   const [pageNumber, setPageNumber]=useState(0);

//   const usersPerPage=10;
//   const pagesVisited=pageNumber*usersPerPage;

//   const displayUsers=users.slice(pagesVisited, pagesVisited+usersPerPage)
//     return(
//       <div className='user'>
//         <Cards data={requests} />
//       </div>
//     );

//   const pageCount=Math.ceil(users.length / usersPerPage);

//   const changePage=({selected})=>{
//     setPageNumber(selected);
//   };

//   return <div className='Pagination'>
//     {displayUsers}
//     <ReactPaginate
//       previousLabel={"Previous"}
//       nextLabel={"Next"}
//       pageCount={pageCount}
//       onPageChange={changePage}
//       containerClassName={"paginationBttns"}
//       previousLinkClassName={"previousBttn"}
//       nextLinkClassName={"nextBttn"}
//       disabledClassName={"paginationDisabled"}
//       activeClassName={"paginationActive"}
//     />
//     </div>;
// }

// export default Pagination;






// import React from 'react';
// import classnames from 'classnames';
// import { usePagination, DOTS } from './usePagination';
// import './pagination.css';
// const Pagination = props => {
//   const {
//     onPageChange,
//     totalCount,
//     siblingCount = 1,
//     currentPage,
//     pageSize,
//     className
//   } = props;

//   const paginationRange = usePagination({
//     currentPage,
//     totalCount,
//     siblingCount,
//     pageSize
//   });

//   if (currentPage === 0 || currentPage < 2) {
//     return null;
//   }

//   const onNext = () => {
//     onPageChange(currentPage + 1);
//   };

//   const onPrevious = () => {
//     onPageChange(currentPage - 1);
//   };

//   let lastPage = paginationRange[paginationRange.length - 1];
//   return (
//     <ul
//       className={classnames('pagination-container', { [className]: className })}
//     >
//       <li
//         className={classnames('pagination-item', {
//           disabled: currentPage === 1
//         })}
//         onClick={onPrevious}
//       >
//         <div className="arrow left" />
//       </li>
//       {paginationRange.map(pageNumber => {
//         if (pageNumber === DOTS) {
//           return <li className="pagination-item dots">&#8230;</li>;
//         }

//         return (
//           <li
//             className={classnames('pagination-item', {
//               selected: pageNumber === currentPage
//             })}
//             onClick={() => onPageChange(pageNumber)}
//           >
//             {pageNumber}
//           </li>
//         );
//       })}
//       <li
//         className={classnames('pagination-item', {
//           disabled: currentPage === lastPage
//         })}
//         onClick={onNext}
//       >
//         <div className="arrow right" />
//       </li>
//     </ul>
//   );
// };

// export default Pagination;


