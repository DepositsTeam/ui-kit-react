import React from "react";
import classNames from "../../utils/classNames";
import PropTypes from "prop-types";
import Text from "../text";
import Box from "../box";
import "./Pagination.scss";
import Icon from "../icon";
import ChevronArrowRight from "../icons/ChevronArrowRight";
import ChevronArrowLeft from "../icons/ChevronArrowLeft";
import { usePagination } from "../../utils/hooks/pagination.hook";

const Pagination = ({
  currentPage,
  totalPages,
  currentPageSiblings,
  onPageChange,
  className,
  smartColor,
  ...props
}) => {
  const {
    renderedPages,
    disableNext,
    disablePrev,
    initializedCurrentPage,
    updatePage,
  } = usePagination({
    totalPages,
    currentPage,
    currentPageSiblings,
    onPageChange,
  });

  const generatedPageNumberClassName = (pageNumber, index = 0) =>
    classNames(
      {
        "ui-pagination__page-number__active":
          pageNumber === initializedCurrentPage,
      },
      "ui-pagination__page-number"
    );

  const leftControlClasses = classNames(
    { disabled: disablePrev },
    "ui-pagination__control"
  );

  const rightControlClasses = classNames(
    { disabled: disableNext },
    "ui-pagination__control"
  );
  const generatedPageNumbers = renderedPages?.map((pageNumber, index) => (
    <Box
      className={generatedPageNumberClassName(pageNumber, index)}
      key={index}
      onClick={() => updatePage(pageNumber)}
    >
      <Text scale={"subhead"} fontFace={"circularSTD"}>
        {pageNumber}
      </Text>
    </Box>
  ));

  return (
    <Box
      is="div"
      {...props}
      className={classNames({
        "ui-pagination": true,
        [className]: className,
        smartColor,
      })}
      style={{
        "--smart-color": smartColor,
      }}
    >
      <Box
        className={leftControlClasses}
        onClick={() => updatePage(initializedCurrentPage - 1)}
      >
        <Icon className="ui-pagination__left-arrow" icon={ChevronArrowLeft} />
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
        className={rightControlClasses}
        onClick={() => updatePage(initializedCurrentPage + 1)}
      >
        <Text
          className="ui-pagination__text-next ui-pagination__text"
          scale={"subhead"}
          fontFace={"circularSTD"}
        >
          Next
        </Text>
        <Icon className="ui-pagination__right-arrow" icon={ChevronArrowRight} />
      </Box>
    </Box>
  );
};

export default Pagination;

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  currentPageSiblings: PropTypes.number,
  onPageChange: PropTypes.func,
  smartColor: PropTypes.string,
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPages: 30,
  currentPageSiblings: 3,
};
