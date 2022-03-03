// import React, { useMemo } from "react";

import { useMemo } from "react";

export const dots = "...";

const range = (start, end) => {
	let length = end - start + 1;
	return Array.from(Array(length), (_, index) => index + start);
};


export const usePagination = ({ totalPage, visiblePage, page, currentPage, siblingCount=1 }) => {
	const paginationRange = useMemo(() => {
		if (totalPage <= visiblePage) {
			return range(1, totalPage);
		}


		// Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
		const leftSiblingIndex = Math.max(page - siblingCount, 1);
		const rightSiblingIndex = Math.min(page + siblingCount, totalPage);

		//   We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
		const showLeftDots = leftSiblingIndex > 2;
		const showRightDots = rightSiblingIndex < totalPage - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPage;

		// Case 2: No left dots to show, but right dots to be shown
		if (!showLeftDots && showRightDots) {
			let leftItemCount = 3 + 2 * siblingCount;
			let leftRange = range(1, leftItemCount);

			return [...leftRange, dots, totalPage];
		}

		// Case 3: No right dots to show, but left dots to be shown
		if (showLeftDots && !showRightDots) {
			let rightItemCount = 3 + 2 * siblingCount;
			let rightRange = range(totalPage - rightItemCount + 1, totalPage);
			return [firstPageIndex, dots, ...rightRange];
		}

		// Case 4: Both left and right dots to be shown
		if (showLeftDots && showRightDots) {
			let middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, dots, ...middleRange, dots, lastPageIndex];
		}


	}, [totalPage, visiblePage, page, siblingCount]);

	return paginationRange;
};

// export default usePagination;
