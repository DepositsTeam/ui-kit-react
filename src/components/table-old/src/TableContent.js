import React, { useEffect, useState } from 'react'
import Box from "../../box";
import "./Table.scss";
import Checkbox from "../../checkbox";
import Pagination from '../../pagination/Pagination';


const TableContent = ({ data, itemsPerPage, siblingCount, nullify, checkbox }) => {
    const noOfPages = Math.ceil(data.length / itemsPerPage)

    const [newData, setNewData] = useState(data.slice(0, itemsPerPage))

    // Once data changes (or items per page) from filter or sort fxn , change the total data to the new data and display the first page of the new data
    useEffect(() => {
        setNewData(data.slice(0, itemsPerPage))
    }, [data, itemsPerPage])
    
    // Once page change is triggered, decide the section of the array to display
    const onPageChange = (page) => {
        let start = ((page - 1) * (itemsPerPage))
        setNewData(data.slice(start, start + itemsPerPage))

    }

    return (
        <Box is='div' onClick={() => nullify()} className='ui-table__content'>
            {/* iterating through the array of objects */}
            {newData.map((item, itemIdx) => (
                <Box key={itemIdx} is='div' className="ui-table__content-item-container">
                    {checkbox && <Checkbox className='ui-table__checkbox' />}
                    {/* iterating through the object values to render, if not a component, a string */}
                    {Object.values(item).map((value, valueIdx) =>
                        <Box key={valueIdx} is='div' className="ui-table__content-item">
                            {value.component || value}
                        </Box>
                    )}
                </Box >
            ))}

            <Box className='ui-table__pagination'>
                <Pagination totalPages={noOfPages} currentPageSiblings={siblingCount} onPageChange={onPageChange} />
            </Box>

        </Box>
    )
}

export default TableContent;