import React, { useState } from "react";
import "./Table.css";
// import Text from "../../text";
import Box from "../../box";
import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";
import TableContent from "./TableContent";
import TableHeader from "./TableHeader";

const Table = ({ data, headings, columns, className, ...props }) => {

    // const cols = Object.entries(dataCopy[0]).length
    const switchClassName = classNames(
        {
            "ui-table__wrapper": true,
            // "ui-table__header": true,
            // "ui-table__content": true,

        },
        className
    );

    const [sortIndex, setSortIndex] = useState(null)
    const [filterIndex, setFilterIndex] = useState(null)
    const [filterText, setFilterText] = useState('')
    const [dataCopy, setDataCopy] = useState(data)

    // set Filter text to input value
    const handleChange = (e, ind) => setFilterText(() => e.target.value)

    // reset all states
    const nullify = () => {
        setFilterIndex(() => null);
        setSortIndex(() => null);
        setFilterText(() => '');
    }

    // trigger the sort modal
    const sortModalTrigger = (idx, e) => {
        setFilterIndex(() => null);
        setSortIndex(() => idx)
        sortIndex !== null && setSortIndex(() => null)
    }

    // trigger the filter modal
    const filterModalTrigger = (idx, e) => {
        setFilterIndex(() => idx)
        filterIndex !== null && setFilterIndex(() => null)

    }

    // get all values of the selected column of array of objects
    const getArr = (data) => Object.values(data)[sortIndex]

    // sort column ascending or descending 
    const handleSort = (idx, type) => {
        nullify()
        setDataCopy(() => [...data].sort((a, b) => {
            let x = Object.values(a)[idx]
            let y = Object.values(b)[idx]

            if (type === 'asc') {
                if (x < y) { return -1 }
                if (y < x) { return 1 }
            }
            if (type === 'desc') {
                if (x > y) { return -1 }
                if (y > x) { return 1 }
            }
            return 0;

        })
        )
    }

    // // filter function running conditionally
    // const filte = (num) => {
    //     setDataCopy(() => [...data].filter(item => {
    //         if (num === 0) return getArr(item).toLowerCase() === filterText.toLowerCase().trim();
    //         if (num === 1) return getArr(item).toLowerCase() !== filterText.toLowerCase().trim()
    //         if (num === 2) return getArr(item) === ''
    //         if (num === 3) return getArr(item) !== ''
    //         if (num === 4) return getArr(item) === filterText
    //         if (num === 5) return getArr(item) !== filterText
    //         if (num === 6) return getArr(item).toLowerCase().startsWith(filterText.toLowerCase().trim())
    //         if (num === 7) return getArr(item).toLowerCase().endsWith(filterText.toLowerCase().trim())
    //         if (num === 9) return !getArr(item).toLowerCase().includes(filterText.toLowerCase().trim())
    //         return getArr(item).toLowerCase().includes(filterText.toLowerCase().trim())
    //     }))
    // }


    // main object of filter functions
    const filter = {
        0: () => setDataCopy(() => [...data].filter(item => getArr(item).toLowerCase() === filterText.toLowerCase().trim())),
        1: () => setDataCopy(() => [...data].filter(item => getArr(item).toLowerCase() !== filterText.toLowerCase().trim())),
        2: () => setDataCopy(() => [...data].filter(item => getArr(item) === '')),
        3: () => setDataCopy(() => [...data].filter(item => getArr(item) !== '')),
        4: () => setDataCopy(() => [...data].filter(item => getArr(item) === filterText)),
        5: () => setDataCopy(() => [...data].filter(item => getArr(item) !== filterText)),
        6: () => setDataCopy(() => [...data].filter(item => getArr(item).toLowerCase().startsWith(filterText.toLowerCase().trim()))),
        7: () => setDataCopy(() => [...data].filter(item => getArr(item).toLowerCase().endsWith(filterText.toLowerCase().trim()))),
        8: () => setDataCopy(() => [...data].filter(item => getArr(item).toLowerCase().includes(filterText.toLowerCase().trim()))),
        9: () => setDataCopy(() => [...data].filter(item => !getArr(item).toLowerCase().includes(filterText.toLowerCase().trim()))),
    }

    return (
        <Box is={"div"} className={switchClassName} {...props} >
            <TableHeader headings={headings} sortIndex={sortIndex} setSortIndex={setSortIndex} sortModalTrigger={sortModalTrigger} filterModalTrigger={filterModalTrigger} handleSort={handleSort} filterIndex={filterIndex} setFilterIndex={setFilterIndex} handleChange={handleChange} filterText={filterText} filter={filter} nullify={nullify} />
            <TableContent data={dataCopy} nullify={nullify} />
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