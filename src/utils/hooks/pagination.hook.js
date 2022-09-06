// import React, { useMemo } from "react";

import { useState, useEffect } from "react";
import rangedArray from "../rangedArray";

export const dots = "...";

export const usePagination = ({
  totalPages,
  currentPage,
  onPageChange,
  currentPageSiblings,
}) => {
  const [renderedPages, setRenderedPages] = useState([]);
  const [initializedCurrentPage, setInitializedCurrentPage] = useState(1);
  const [disablePrev, setDisablePrev] = useState(false);
  const [disableNext, setDisableNext] = useState(false);

  const updatePage = (page) => {
    if (page > totalPages || page < 1 || page === "...") {
      return;
    }
    setInitializedCurrentPage(page);
    if (onPageChange && typeof onPageChange === "function") {
      onPageChange(page);
    }
  };
  useEffect(() => {
    setInitializedCurrentPage(currentPage);
  }, []);
  useEffect(() => {
    setDisablePrev(initializedCurrentPage === 1);
    setDisableNext(initializedCurrentPage === totalPages);

    const doubleVisibleSiblings = currentPageSiblings * 2;
    let middleMin = initializedCurrentPage - currentPageSiblings;
    let middleMax = initializedCurrentPage + currentPageSiblings;

    if (totalPages <= doubleVisibleSiblings + 2) {
      setRenderedPages(rangedArray(1, totalPages));
    } else {
      if (initializedCurrentPage < doubleVisibleSiblings) {
        setRenderedPages([
          ...rangedArray(1, doubleVisibleSiblings),
          dots,
          totalPages,
        ]);
      } else {
        if (initializedCurrentPage < totalPages - doubleVisibleSiblings) {
          const rangedArrayHolder = rangedArray(middleMin, middleMax);
          const sub = rangedArrayHolder.includes(1)
            ? [...rangedArrayHolder, dots]
            : [1, dots, ...rangedArrayHolder, dots];
          setRenderedPages([...sub, totalPages]);
        } else {
          setRenderedPages([
            1,
            dots,
            ...rangedArray(totalPages - doubleVisibleSiblings, totalPages),
          ]);
        }
      }
    }
  }, [initializedCurrentPage, totalPages]);

  return {
    renderedPages,
    disableNext,
    disablePrev,
    initializedCurrentPage,
    updatePage,
  };
};
