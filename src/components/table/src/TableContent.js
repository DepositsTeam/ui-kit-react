import React from 'react'
import Box from "../../box";
import "./Table.css";
import Checkbox from "../../checkbox";


const TableContent = ({ data, nullify }) => {

    return (
        <Box is='div' onClick={()=>nullify()} className='ui-table__content'>
            {data.map((item, itemIdx) => (
                <Box key ={itemIdx} is='div' className = "ui-table__content-item-container">
                    <Checkbox className='ui-table__checkbox' />
                    {Object.values(item).map((value, valueIdx) => (
                        <Box key={valueIdx} is='div' className="ui-table__content-item">
                            {value}
                        </Box>
                    ))
                    }
                </Box >
            ))}
        </Box>
    )
}

export default TableContent;