import React from "react";
import "./Table.css";
// import Text from "../../text";
import Box from "../../box";
import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";
import TableContent from "./TableContent;";
import TableHeader from "./TableHeader";

const Table = ({ data, headings, columns, className, ...props }) => {

    // const cols = Object.entries(data[0]).length
    const switchClassName = classNames(
        {
            "ui-table__wrapper": true,
            // "ui-table__header": true,
            // "ui-table__content": true,

        },
        className
    );

    return (
        <Box is={"div"} className={switchClassName} {...props} >
            <TableHeader headings={headings} />
            <TableContent data={data} />
        </Box>
    );
};

export default Table;


Table.propTypes = {
    headings: PropTypes.array,
    data: PropTypes.array,
    cols: PropTypes.number

};

Table.defaultProps = {
    columns: 6

};