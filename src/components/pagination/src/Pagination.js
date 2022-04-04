import React, { useState } from "react";
import classNames from "../../../utils/classNames";
import PropTypes from "prop-types";
import Text from "../../text";
import Box from "../../box";
import "./Pagination.css";
import Icon from "../../icon";
import ChevronArrowRight from "../../icons/ChevronArrowRight";
import ChevronArrowLeft from "../../icons/ChevronArrowLeft";
import { usePagination } from "../../../utils/hooks/pagination.hook";

const Pagination = ({
	totalPage,
	currentPage,
	visiblePage,
	className,
	siblingCount,
	onPageChange,
	...props
}) => {
	const [page, setPage] = useState(1);

	const paginationRange = usePagination({
		totalPage,
		visiblePage,
		page,
		currentPage,
		siblingCount,
	});

	const invokeFunction = (func, ...args) => {
		if (typeof func === "function") {
			return func(...args);
		}
	};


	const handleNextPage = () => {
		if (page >= totalPage) {
			return;
		} else {
			setPage((prev) => prev + 1);
    };
    setPage((prev) => {
      invokeFunction(onPageChange, prev);
      return prev;
    });
  }

	const handlePreviousPage = () => {
		if (page === 1) {
			return;
		} else {
			setPage((prev) => prev - 1);
		}
    setPage((prev) => {
      invokeFunction(onPageChange, prev);
      return prev;
    });
	};

  const handlePageChange = (pageNumber) => {
    if( pageNumber !== '...'){
      setPage(pageNumber);
      setPage((prev) => {
        invokeFunction(onPageChange, prev);
        return prev;
      });
    }
  }

	const generatedClassName = classNames(
		{
			"ui-pagination": true,
		},
		className
	);

	const generatedPageNumberClassName = (pageNumber, index = 0) =>
		classNames(
			{
				"ui-pagination__page-number__active": pageNumber === page,
			},
			"ui-pagination__page-number"
		);

	const generatedPageNumbers = paginationRange?.map((pageNumber, index) => (
		<Box
			className={generatedPageNumberClassName(pageNumber, index)}
			key={index} onClick={()=>handlePageChange(pageNumber)}
		>
			<Text scale={"subhead"} fontFace={"circularSTD"}>
				{pageNumber}
			</Text>
		</Box>
	));

	return (
		<Box is="div" {...props} className={generatedClassName}>
			<Box className={"ui-pagination__control"} onClick={handlePreviousPage}>
				<Icon
					className="ui-pagination__left-arrow"
					smartColor="currentcolor"
					icon={ChevronArrowLeft}
				/>
				<Text
					className="ui-pagination__text-previous ui-pagination__text"
					scale={"subhead"}
					fontFace={"circularSTD"}
				>
					Previous
				</Text>
			</Box>

			{generatedPageNumbers}

			<Box
				is="button"
				className={"ui-pagination__control"}
				onClick={handleNextPage}
			>
				<Text
					className="ui-pagination__text-next ui-pagination__text"
					scale={"subhead"}
					fontFace={"circularSTD"}
				>
					Next
				</Text>
				<Icon
					className="ui-pagination__right-arrow"
					smartColor="#0DB9E9"
					icon={ChevronArrowRight}
				/>
			</Box>
		</Box>
	);
};

export default Pagination;

Pagination.propTypes = {
	visiblePage: PropTypes.number,
	/** The total number of pages. */
	totalPage: PropTypes.number,
	// currentPage: PropTypes.number,
	/** Number of always visible pages before and after the current page. */
	siblingCount: PropTypes.number,
	/** Callback fired when the page is changed. */
	onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
	visiblePage: 5,
	siblingCount: 1,
};

// import React, {useState} from "react";
// import classNames from "../../../utils/classNames";
// import PropTypes from "prop-types";
// import Text from "../../text";
// import Box from "../../box";
// import "./Pagination.css";
// import Icon from "../../icon";
// import ChevronArrowRight from "../../icons/ChevronArrowRight";
// import ChevronArrowLeft from "../../icons/ChevronArrowLeft";

// const Pagination = ({ totalPage, currentPage, visiblePage, className, ...props }) => {
//   const [page, setPage] = useState(1);
//   const handleNextPage = () => {
//     if (page >= totalPage) {
//       return
//     }else{
//       setPage(prev => prev + 1)
//     }
//   }
//   const handlePreviousPage = () => {
//     if (page === 1) {
//       return
//     }else{
//       setPage(prev => prev - 1)
//     }
//   }
//   const totalPageArray = Array.from(
//     Array(totalPage),
//     (_, index) => index + 1
//   );
//   const generatedClassName = classNames(
//     {
//       "ui-pagination": true,
//     },
//     className
//   );

//   const generatedPageNumberClassName = (totalPageArray, index = 0) =>
//     classNames(
//       {
//         "ui-pagination__page-number__active": index + 1 === page,
//       },
//       "ui-pagination__page-number"
//     );

//   const generatedPageNumbers =
//     totalPageArray.length <= visiblePage ? (
//       totalPageArray.map((pageNumber, index) => (
//         <Box
//           className={generatedPageNumberClassName(totalPageArray, index)}
//           key={index}
//         >
//           <Text scale={"subhead"} fontFace={"circularSTD"}>
//             {pageNumber}
//           </Text>
//         </Box>
//       ))
//     ) : (
//       <>
//         {totalPageArray.slice(0, visiblePage).map((pageNumber, index) => (
//           <Box
//             className={generatedPageNumberClassName(totalPageArray, index)}
//             key={index}
//           >
//             <Text scale={"subhead"} fontFace={"circularSTD"}>
//               {pageNumber}
//             </Text>
//           </Box>
//         ))}
//         ...
//         <Box className="ui-pagination__page-number_last">
//           <Text scale={"subhead"} fontFace={"circularSTD"}>
//             {totalPageArray.slice(currentPage)}
//           </Text>
//         </Box>
//       </>
//     );
//   return (
//     <Box is="div" {...props} className={generatedClassName}>
//       <Box className={"ui-pagination__control"} onClick={handlePreviousPage}>
//         <Icon
//           className="ui-pagination__left-arrow"
//           smartColor="currentcolor"
//           icon={ChevronArrowLeft}
//         />
//         <Text
//           className="ui-pagination__text-previous ui-pagination__text"
//           scale={"subhead"}
//           fontFace={"circularSTD"}
//         >
//           Previous
//         </Text>
//       </Box>

//       {generatedPageNumbers}

//       <Box className={"ui-pagination__control"} onClick={handleNextPage}>
//         <Text
//           className="ui-pagination__text-next ui-pagination__text"
//           scale={"subhead"}
//           fontFace={"circularSTD"}
//         >
//           Next
//         </Text>
//         <Icon
//           className="ui-pagination__right-arrow"
//           smartColor="#0DB9E9"
//           icon={ChevronArrowRight}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Pagination;

// Pagination.propTypes = {
//   currentPage: PropTypes.number,
//   visiblePage: PropTypes.number,
//   totalPage: PropTypes.number,
// };

// Pagination.defaultProps = {
//   visiblePage: 5,
// };
