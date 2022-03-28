import React, { useState } from 'react'
import Box from '../../box'
import Button from '../../button'
import Icon from '../../icon/src/Icon'
import Close from '../../icons/Close'
import Radio from '../../radio/src/Radio'
import SelectField from '../../select-field/src/SelectField'

const TableTag = ({ filterTag, closeTag, filterLabel, nullify }) => {
  const [showModal, setShowModal] = useState(false)

  const triggerModal = () => {
    showModal && setShowModal(() => false)
    !showModal && setShowModal(() => true)
  }
  const applyFilter2 = (e) => {
    nullify()
    setShowModal(() => true)
  }
 
  return (
    <Box is='div' className='ui-table__filter-tag-container' >
      <Box is='div' className={`ui-table__filter-tag`} onClick={triggerModal} >

        {filterTag[0]}
        <Box is='span'> {filterTag[1]} </Box>
        {filterTag[2]}

        <Box is='span' onClick={closeTag} className="close" >
          <Icon icon={Close} />
        </Box>

      </Box>


      <Box is='div' className={`ui-table__filter-tag-field  ${!showModal && 'hide'} `}>
        <Box is='div' >
          <SelectField label={'Filter'} size={'small'} options={filterLabel} dropDown />
          <SelectField label={'Filter'} size={'small'} options={filterLabel} dropDown />
        </Box>
        <Box is='form' >
          <Radio label='And' />
          <Radio label='Or' />

        </Box>
        <Box is='div' className='extra-filter' >
          <SelectField label={'Filter'} size={'small'} options={filterLabel} dropDown />
          <SelectField label={'Filter'} size={'small'} options={filterLabel} dropDown />
          <Icon icon={Close} />
        </Box>
        <Box is='div' >
          <Button children='Apply Filter' colorScheme={'primary'} onClick={applyFilter2} />
          <Button onClick={() => setShowModal(() => true)}>Cancel</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default TableTag