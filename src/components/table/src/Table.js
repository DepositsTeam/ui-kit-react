import React, { useState } from "react";
import "./Table.css";
// import Text from "../../text";
import Box from "../../box";
import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";
import TableContent from "./TableContent";
import TableHeader from "./TableHeader";
import TableTag from "./TableTag";

const Table = ({ data, headings, columns, className, checkbox, ...props }) => {

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
    const [filterCriteria, setFilterCriteria] = useState('Is')
    const filterLabel = ['Is', 'Is not', 'Is empty', 'Is not empty', 'Is equal to', 'Is not equal to', 'Begins with', 'Ends with', 'Contains', 'Does not contain']
    const [filterTag, setFilterTag] = useState([])

    // set Filter text to input value
    const handleChange = (e, ind) => setFilterText(() => e.target.value.trim().toLowerCase())

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
        setDataCopy(() => [...dataCopy].sort((a, b) => {
            let x = Object.values(a)[idx]
            let y = Object.values(b)[idx]

            if (type === 'desc') {
                if (x < y) { return -1 }
                if (y < x) { return 1 }
            }
            if (type === 'asc') {
                if (x > y) { return -1 }
                if (y > x) { return 1 }
            }
            return 0;

        })
        )
    }

    // // filter function running conditionally
    // const filte = (num) => {
    //     setDataCopy(() => data.filter(item => {
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

    const applyFilter = (e) => {
        filter[filterCriteria]();
        if (filterText && filterText !== '' && filterText !== ' ') {
            setFilterTag(() => [headings[sortIndex], filterCriteria, filterText])
        }
        nullify();

    }
    // main object of filter functions
    const filter = {
        [filterLabel[0]]: () => setDataCopy(() => data.filter(item => getArr(item).toLowerCase() === filterText.toLowerCase().trim())),
        [filterLabel[1]]: () => setDataCopy(() => data.filter(item => getArr(item).toLowerCase() !== filterText.toLowerCase().trim())),
        [filterLabel[2]]: () => setDataCopy(() => data.filter(item => getArr(item) === '')),
        [filterLabel[3]]: () => setDataCopy(() => data.filter(item => getArr(item) !== '')),
        [filterLabel[4]]: () => setDataCopy(() => data.filter(item => getArr(item) === filterText)),
        [filterLabel[5]]: () => setDataCopy(() => data.filter(item => getArr(item) !== filterText)),
        [filterLabel[6]]: () => setDataCopy(() => data.filter(item => getArr(item).toLowerCase().startsWith(filterText.toLowerCase().trim()))),
        [filterLabel[7]]: () => setDataCopy(() => data.filter(item => getArr(item).toLowerCase().endsWith(filterText.toLowerCase().trim()))),
        [filterLabel[8]]: () => setDataCopy(() => data.filter(item => getArr(item).toLowerCase().includes(filterText.toLowerCase().trim()))),
        [filterLabel[9]]: () => setDataCopy(() => data.filter(item => !getArr(item).toLowerCase().includes(filterText.toLowerCase().trim()))),
    }

    const closeTag = () => {
        setFilterTag([])
        setDataCopy(() => data)
        nullify();
    }


    return (
        <Box is={"div"} >
            {filterTag.length !== 0 && <TableTag filterTag={filterTag} closeTag={closeTag} nullify={nullify} />}
            <Box is={"div"} className={switchClassName} {...props} >

                <TableHeader headings={headings} sortIndex={sortIndex} setSortIndex={setSortIndex} sortModalTrigger={sortModalTrigger} filterModalTrigger={filterModalTrigger} handleSort={handleSort} filterIndex={filterIndex} setFilterIndex={setFilterIndex} handleChange={handleChange} filterText={filterText} applyFilter={applyFilter} nullify={nullify} filterCriteria={filterCriteria} setFilterCriteria={setFilterCriteria} filterLabel={filterLabel} checkbox={checkbox} />

                <TableContent data={dataCopy} nullify={nullify} checkbox={checkbox} filterLabel={filterLabel} filterCriteria={filterCriteria} setFilterCriteria={setFilterCriteria} />
            </Box>
        </Box>
    );
};

export default Table;


Table.propTypes = {
    headings: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    cols: PropTypes.number,
    checkbox: PropTypes.bool,

};

Table.defaultProps = {
    checkbox: false

};