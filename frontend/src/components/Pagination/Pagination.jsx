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