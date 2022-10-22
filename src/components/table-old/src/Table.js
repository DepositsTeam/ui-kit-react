import React, { useState } from "react";
import "./Table.scss";
// import Text from "../../text";
import Box from "../../box";
import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";
import TableContent from "./TableContent";
import TableHeader from "./TableHeader";
import TableTag from "./TableTag";
// import Pagination from "../../pagination/src/Pagination";

const Table = ({ data, headings, columns, className, checkbox, pagination, itemsPerPage, siblingCount, ...props }) => {

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
    const [filterCriteria, setFilterCriteria] = useState('Is')
    const filterLabel = ['Is', 'Is not', 'Is empty', 'Is not empty', 'Is equal to', 'Is not equal to', 'Begins with', 'Ends with', 'Contains', 'Does not contain']
    const [filterTag, setFilterTag] = useState([])

    // set Filter text to input value
    const handleChange = (e) => setFilterText(() => e.target.value.trim().toLowerCase())

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
    const getArr = (data) => {
        let item = Object.values(data)[sortIndex]
        return item.alt || item
    }

    // sort column ascending or descending 
    const handleSort = (idx, type) => {
        nullify()
        setDataCopy(() => [...dataCopy].sort((a, b) => {

            let x = Object.values(a)[idx].alt || Object.values(a)[idx]
            let y = Object.values(b)[idx].alt || Object.values(b)[idx]

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



    const applyFilter = (second) => {
        // !second === 'second' &&
        filter[filterCriteria](data);
        // second === 'second' && filter[filterCriteria](dataCopy);

        if (filterText && filterText !== '' && filterText !== ' ') {
            setFilterTag(() => [sortIndex, filterCriteria, filterText])
        }
        nullify();

    }


    // main object of filter functions
    const filter = {
        [filterLabel[0]]: (dataF) => setDataCopy(() => dataF.filter(item => getArr(item).toLowerCase() === filterText.toLowerCase().trim())),
        [filterLabel[1]]: (dataF) => setDataCopy(() => dataF.filter(item => getArr(item).toLowerCase() !== filterText.toLowerCase().trim())),
        [filterLabel[2]]: (dataF) => setDataCopy(() => dataF.filter(item => getArr(item) === '')),
        [filterLabel[3]]: (dataF) => setDataCopy(() => dataF.filter(item => getArr(item) !== '')),
        [filterLabel[4]]: (dataF) => setDataCopy(() => dataF.filter(item => getArr(item) === filterText)),
        [filterLabel[5]]: (dataF) => setDataCopy(() => dataF.filter(item => getArr(item) !== filterText)),
        [filterLabel[6]]: (dataF) => setDataCopy(() => dataF.filter(item => getArr(item).toLowerCase().startsWith(filterText.toLowerCase().trim()))),
        [filterLabel[7]]: (dataF) => setDataCopy(() => dataF.filter(item => getArr(item).toLowerCase().endsWith(filterText.toLowerCase().trim()))),
        [filterLabel[8]]: (dataF) => setDataCopy(() => dataF.filter(item => getArr(item).toLowerCase().includes(filterText.toLowerCase().trim()))),
        [filterLabel[9]]: (dataF) => setDataCopy(() => dataF.filter(item => !getArr(item).toLowerCase().includes(filterText.toLowerCase().trim()))),
    }

    const closeTag = (e) => {
        e.stopPropagation()
        setFilterTag([])
        setDataCopy(() => data)
        nullify();
    }


    return (
        <Box is={"div"} >
            {filterTag.length > 0 && <TableTag filterTag={filterTag} closeTag={closeTag} nullify={nullify} filterLabel={filterLabel} handleChange={handleChange} applyFilter={applyFilter} setFilterCriteria={setFilterCriteria} setSortIndex={setSortIndex} filterCriteria={filterCriteria} headings={headings}
            />}

            <Box is={"div"} className={switchClassName} {...props} >
                <TableHeader headings={headings} sortIndex={sortIndex} sortModalTrigger={sortModalTrigger} filterModalTrigger={filterModalTrigger} filterIndex={filterIndex} setFilterIndex={setFilterIndex} handleChange={handleChange} applyFilter={applyFilter} handleSort={handleSort} filterCriteria={filterCriteria} setFilterCriteria={setFilterCriteria} filterLabel={filterLabel} checkbox={checkbox} />

                <TableContent data={dataCopy} nullify={nullify} checkbox={checkbox} itemsPerPage={itemsPerPage} siblingCount={siblingCount} />
            </Box>
        </Box>
    );
};

export default Table;


Table.propTypes = {
    headings: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    checkbox: PropTypes.bool,
    pagination: PropTypes.bool,

};

Table.defaultProps = {
    checkbox: false

};