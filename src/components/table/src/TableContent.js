import React, { useState } from 'react'
import Box from "../../box";
import "./Table.css";
import Checkbox from "../../checkbox";
import Pagination from '../../pagination/src/Pagination';


const TableContent = ({ data, itemsPerPage, pagination, nullify, checkbox }) => {
    let noOfPages = Math.ceil(data.length / itemsPerPage)
    const [start] = useState(0)

    // const onPageChange = (prev) => {
    //     setStart(start + itemsPerPage)
    // }

    const itemRendered = (value, valueIdx) => {
        const Comp = value.component
        return (
            <Box key={valueIdx} is='div' className="ui-table__content-item">
                {typeof value === 'string' && value}
                {typeof value === 'object' && Comp}
                {console.log(value.alt)}
            </Box>
        )
    }

    return (
        <Box is='div' onClick={() => nullify()} className='ui-table__content'>
            {data.map((item, itemIdx) => (
                <Box key={itemIdx} is='div' className="ui-table__content-item-container">
                    {checkbox && <Checkbox className='ui-table__checkbox' />}
                    {Object.values(item).map((value, valueIdx) => (
                         itemRendered(value, valueIdx) 
                    )
                    )}
                </Box >
            ))}

            <Box className='ui-table__pagination'>
                <Pagination totalPage={noOfPages} />
            </Box>

        </Box>
    )
}

export default TableContent;