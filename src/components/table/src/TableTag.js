import React from 'react'
import Box from '../../box'
import Icon from '../../icon/src/Icon'
import Close from '../../icons/Close'

const TableTag = ({ filterTag, closeTag }) => {
  return (
    <Box is='div' className='ui-table__filter-tag'>
      
      {filterTag[0]}
      <Box is='span'> {filterTag[1]} </Box>
      {filterTag[2]}

      <Box is='span' onClick={closeTag} className="close" >
        <Icon icon={Close}  />
      </Box>

    </Box>
  )
}

export default TableTag