import React, { useState, useMemo } from "react";
import "./cards.css";
import Pagination from "../Pagination/Pagination";

let PageSize = 10;

export default function Cards({ prop }) {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return prop.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <div className="users-cards">
        {currentTableData.map((item) => {
          return (
            <div className="single-card" style={{ backgroundColor: "white" }}>
              <div class="container">
                <div class="row first-row">
                  <div class="col-md-1 col-sm-6">{item.id})</div>
                  <div class="col-md-2 col-sm-6">
                    {<a href="/">{item.name}</a>}
                  </div>
                  <div class="col-md-2 col-sm-6">{item.email}</div>
                  <div class="col-md-2 col-sm-6">{item.phone}</div>
                  <div class="col-md-2 col-sm-6">
                    <span style={{ color: "red" }}>{item.category}</span>
                  </div>
                  <div class="col-md-3 col-sm-6" style={{ fontSize: "13px" }}>
                    <span style={{ color: "gray" }}>
                      {item.start_date} - {item.end_date}
                    </span>{" "}
                    [<span style={{ color: "red" }}>{item.status}</span>]
                  </div>
                </div>
                <div class="row second-row">
                  <div class="col-md-9 col-sm-12">
                    <ul className="doc-list">
                      {item.documents.map((doc) => {
                        return (
                          <li>
                            <a className="doc-link" href={doc.link}>
                              {doc.name}
                            </a>
                          </li>
                        );
                      })}
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
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={prop.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
}
