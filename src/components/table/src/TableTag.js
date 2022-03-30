import React, { useState } from 'react'
import Box from '../../box'
import Button from '../../button'
import Icon from '../../icon/src/Icon'
import Close from '../../icons/Close'
import Radio from '../../radio/src/Radio'
import SelectField from '../../select-field/src/SelectField'
import TextField from '../../text-field/src/TextField'

const TableTag = ({ filterTag, closeTag, filterLabel, setFilterCriteria, handleChange, applyFilter, setSortIndex, filterCriteria, headings, dataCopy }) => {
  // const [text, setText] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [secondFilter, setSecondFilter] = useState(false)
  const [joinType, setJoinType] = useState(null)

  const triggerModal = () => {
    showModal && setShowModal(() => false)
    !showModal && setShowModal(() => true)
    setSecondFilter(() => false)
    setSortIndex(filterTag[0])
  }

  const handleSelectChange = (e) => {
    setFilterCriteria(() => e.target.value)
  }

  // const changeHandler = (e) => {
  //   handleChange(e)

  // }

  const applyFilter2 =  (e) => {

    !joinType && applyFilter()
    joinType==='and' && applyFilter('second')
    setShowModal(() => false)
  }

  const joinFilter = (type) => {
    type === 'and' && setJoinType(() => type)
    type === 'or' && setJoinType(() => type)
    applyFilter()
  }

  return (
    <Box is='div' className='ui-table__filter-tag-container' >
      <Box is='div' className={`ui-table__filter-tag`} onClick={triggerModal} >

        {headings[filterTag[0]]}
        <Box is='span'> {filterTag[1]} </Box>
        {filterTag[2]}

        <Box is='span' onClick={closeTag} className="close" >
          <Icon icon={Close} />
        </Box>

      </Box>


      {showModal &&
        <Box is='div' className={`ui-table__filter-tag-field  ${!showModal && 'hide'} `}>
          <Box is='div' >
            <SelectField label='Filter' size='small' onChange={(e) => handleSelectChange(e)} value={filterCriteria} options={filterLabel} dropDown />
            <TextField label='Value' size='small' onChange={(e) => handleChange(e)} />
          </Box>


          {secondFilter &&
            <Box is='button' onClick={() => setSecondFilter(() => true)} style={{ color: 'blue', cursor: 'pointer', margin: ' 10px 0' }}>
              + Add condition
            </Box>}

          {secondFilter &&
            <>
              <Box is='form'  >
                <Radio label='And' name='join-type' onClick={(e) => joinFilter('and')} />
                <Radio label='Or' name='join-type' onClick={(e) => joinFilter('and')} />
              </Box>
              < Box is='div' className='extra-filter' >
                <SelectField label={'Filter'} size={'small'} options={filterLabel} dropDown />
                <TextField label='Value' size='small' />
                <Icon className='close' icon={Close} onClick={() => setSecondFilter(() => null)} />
              </Box>
            </>
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