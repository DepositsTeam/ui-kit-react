import React from "react";
import classNames from "../../../utils/classNames";
import PropTypes from "prop-types";
import Text from "../../text";
import Box from "../../box";
import "./Pagination.css";
import Icon from "../../icon";
import ArrowRight from "../../icons/ArrowRight";
import ArrowLeft from "../../icons/ArrowLeft";

const Pagination = ({ numberOfPage, maxPageNumber, className, ...props }) => {
  const numberOfPageArray = Array.from(
    Array(numberOfPage),
    (_, index) => index + 1
  );
  const generatedClassName = classNames(
    {
      "ui-pagination": true,
    },
    className
  );

  const generatedPageNumberClassName = (numberOfPageArray, index = 0) =>
    classNames(
      {
        "ui-pagination__page-number__active": numberOfPageArray[index] === 1,
      },
      "ui-pagination__page-number"
    );

  const generatedPageNumbers =
    numberOfPageArray.length <= maxPageNumber ? (
      numberOfPageArray.map((pageNumber, index) => (
        <Box
          className={generatedPageNumberClassName(numberOfPageArray, index)}
          key={index}
        >
          <Text scale={"subhead"} fontFace={"circularSTD"}>
            {pageNumber}
          </Text>
        </Box>
      ))
    ) : (
      <>
        {numberOfPageArray.slice(0, maxPageNumber).map((pageNumber, index) => (
          <Box
            className={generatedPageNumberClassName(numberOfPageArray, index)}
            key={index}
          >
            <Text scale={"subhead"} fontFace={"circularSTD"}>
              {pageNumber}
            </Text>
          </Box>
        ))}
        ...
        <Box className="ui-pagination__page-number_last">
          <Text scale={"subhead"} fontFace={"circularSTD"}>
            {numberOfPageArray.slice(-1)}
          </Text>
        </Box>
      </>
    );
  return (
    <Box is="div" {...props} className={generatedClassName}>
      <Box className={"ui-pagination__control"}>
        <Icon
          className="ui-pagination__left-arrow"
          smartColor="currentcolor"
          icon={ArrowLeft}
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

      <Box className={"ui-pagination__control"}>
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
          icon={ArrowRight}
        />
      </Box>
    </Box>
  );
};

export default Pagination;

Pagination.propTypes = {
  /** Maximum number of pages */
  maxPageNumber: PropTypes.number,
  /** Number of pages */
  numberOfPage: PropTypes.number,
};

Pagination.defaultProps = {
  maxPageNumber: 5,
};
