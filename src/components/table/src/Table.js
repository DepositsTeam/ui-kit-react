import React from "react";
import "./Table.css";
// import Text from "../../text";
import Box from "../../box";
import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";
import TableContent from "./TableContent;";
import TableHeader from "./TableHeader";

const Table = ({ data, headings , columns, className, ...props }) => {

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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, dolorum eaque maxime pariatur quibusdam iure quas a facere! Ipsam explicabo perferendis sed voluptatibus accusamus aperiam, nostrum beatae eaque odit vero.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam corrupti repudiandae enim natus vero accusantium, vitae exercitationem eligendi suscipit blanditiis necessitatibus eaque nisi officia consectetur quae autem nesciunt corporis quasi.
            <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, dolorum eaque maxime pariatur quibusdam iure quas a facere! Ipsam explicabo perferendis sed voluptatibus accusamus aperiam, nostrum beatae eaque odit vero.
            <br />
            <br />
            <br />

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