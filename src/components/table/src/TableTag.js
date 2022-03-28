import React, { useState } from 'react'
import Box from '../../box'
import Button from '../../button'
import Icon from '../../icon/src/Icon'
import Close from '../../icons/Close'
import Radio from '../../radio/src/Radio'
import SelectField from '../../select-field/src/SelectField'
import TextField from '../../text-field/src/TextField'

const TableTag = ({ filterTag, closeTag, filterLabel, nullify }) => {
  const [showModal, setShowModal] = useState(false)
  const [secondFilter, setSecondFilter] = useState(false)
  const [joinType, setJoinType] = useState(null)
  const triggerModal = () => {
    showModal && setShowModal(() => false)
    !showModal && setShowModal(() => true)
    setSecondFilter(() => false)
  }
  const applyFilter2 = (e) => {
    nullify()
    setShowModal(() => true)
  }

  const joinFilter = (e, type) => {
    type === 'and' && setJoinType(() => type)
    type === 'or' && setJoinType(() => type)
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


      {showModal &&
        <Box is='div' className={`ui-table__filter-tag-field  ${!showModal && 'hide'} `}>
          <Box is='div' >
            <SelectField label='Filter' size='small' defaultValue={filterTag[1]} options={filterLabel} dropDown />
            <TextField label='Value' size='small' />
          </Box>

          <Box is='form' onClick={() => setSecondFilter(() => true)}  >
            <Radio label='And' name='join-type' onClick={(e) => joinFilter(e, 'and')} />
            <Radio label='Or' name='join-type'  />
          </Box>

          {secondFilter &&
            < Box is='div' className='extra-filter' >
              <SelectField label={'Filter'} size={'small'} options={filterLabel} dropDown />
              <TextField label='Value' size='small' />
              <Icon className='close' icon={Close} onClick={() => setSecondFilter(() => null)} />
            </Box>
          }
          <Box is='div' >
            <Button children='Apply Filter' colorScheme={'primary'} onClick={applyFilter2} />
            <Button onClick={() => setShowModal(() => true)}>Cancel</Button>
          </Box>
        </Box>
      }

    </Box >
  )
}

export default TableTag