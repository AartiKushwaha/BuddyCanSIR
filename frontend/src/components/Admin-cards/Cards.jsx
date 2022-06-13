import React from "react";
import "./cards.css";
import Pagination from "../Pagination/Pagination";
import Card from "./Card";

let PageSize = 3;

export default function Cards({ data }) {

  // const [currentPage, setCurrentPage] = useState(1);

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return data.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);
  // console.log(currentTableData);

  return (
    <>
      <div className="users-cards">
        {data.map((item) => {
          return (
            <Card item={item} s={item.status} u={item._id}/>
          );
        })}
        <Pagination />
      </div>
    </>
  );
}
