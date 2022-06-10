import React, {useState, useMemo} from "react";
import "./cards.css";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";

let PageSize = 5;

export default function Cards({ data }) {

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  console.log(currentTableData);

  return (
    <>
      <div className="users-cards">
        {data.map((item) => {
          return (
            <div className="single-card" style={{ backgroundColor: "white" }}>
              <div class="container">
                <div class="row first-row">
                  <div class="col-md-1 col-sm-6">id)</div>
                  <div class="col-md-2 col-sm-6">
                  <Link to={`/profile/${item.uid}`}>
                    {<a href="/profile">{item.username}</a>}
                  </Link>
                  </div>
                  <div class="col-md-2 col-sm-6">email</div>
                  <div class="col-md-2 col-sm-6">phone</div>
                  <div class="col-md-2 col-sm-6">
                    <span style={{ color: "red" }}>{item.track}</span>
                  </div>
                  <div class="col-md-3 col-sm-6" style={{ fontSize: "13px" }}>
                    <span style={{ color: "gray" }}>
                      {new Date(item.createdAt).toDateString} - end_date
                    </span>{" "}
                    [<span style={{ color: "red" }}>{item.status}</span>]
                  </div>
                </div>
                <div class="row second-row">
                  <div class="col-md-9 col-sm-12">
                    <ul className="doc-list">
                    <li>
                            <a className="doc-link" href="#">
                              doc_name
                            </a>
                          </li>
                      {/* {item.documents.map((doc) => {
                        return (
                          <li>
                            <a className="doc-link" href={doc.link}>
                              {doc.name}
                            </a>
                          </li>
                        );
                      })} */}
                    </ul>
                  </div>
                  <div class="col-md-3 col-sm-12">
                    <form className="admin-form" action="">
                      <input type="radio" checked="checked" name="radio" />
                      <label>
                        Accept
                        <span class="checkmark"></span>
                      </label>
                      <input type="radio" name="radio" />
                      <label>
                        Deny
                        <span class="checkmark"></span>
                      </label>
                      <button type="submit" className="admin-form-submit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-right-circle"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        /> */}
      </div>
    </>
  );
}
