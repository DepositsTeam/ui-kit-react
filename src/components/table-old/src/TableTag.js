import React, { useState } from 'react'
import Box from '../../box'
import Button from '../../button'
import Icon from '../../icon/Icon'
import Close from '../../icons/Close'
import Radio from '../../radio/Radio'
import SelectField from '../../select-field/SelectField'
import TextField from '../../text-field/TextField'

const TableTag = ({ filterTag, closeTag, filterLabel, setFilterCriteria, handleChange, applyFilter, setSortIndex, filterCriteria, headings }) => {
  const [showModal, setShowModal] = useState(false)
  const [secondFilter, setSecondFilter] = useState(false)
  const [joinType, setJoinType] = useState(null)

  // trigger tabletag modal onclick of the table-old tag
  const triggerModal = () => {
    showModal && setShowModal(() => false)
    !showModal && setShowModal(() => true)
    setSecondFilter(() => false)
    setSortIndex(filterTag[0])
  }

// onclick of the apply filter button, apply the new filter set and close mpdal
  const applyFilter2 =  () => {
    !joinType && applyFilter()
    // joinType==='and' && applyFilter('second')
    setShowModal(() => false)
  }

  // *** second filter merge function making queries to have effect
  const joinFilter = (type) => {
    type === 'and' && setJoinType(() => type)
    type === 'or' && setJoinType(() => type)
    applyFilter()
  }

  return (
    <Box is='div' className='ui-table__filter-tag-container' >

      {/* Table filter tag */}
      <Box is='div' className={`ui-table__filter-tag`} onClick={triggerModal} >

        {headings[filterTag[0]]}
        <Box is='span'> {filterTag[1]} </Box>
        {filterTag[2]}

        <Box is='span' onClick={closeTag} className="close" >
          <Icon icon={Close} />
        </Box>

      </Box>


      {showModal &&
        // show table-old tag modal
        <Box is='div' className={`ui-table__filter-tag-field  ${!showModal && 'hide'} `}>
          <Box is='div' >
            <SelectField label='Filter' size='small' onChange={(e) => setFilterCriteria(() => e.target.value)} value={filterCriteria} options={filterLabel} dropDown />
            <TextField label='Value' size='small' onChange={(e) => handleChange(e)} onKeyDown={(e) => e.keyCode === 13 && applyFilter2()} />
          </Box>


          {secondFilter &&
            //  show filter join types, and and or radio options 
            <Box is='button' onClick={() => setSecondFilter(() => true)} style={{ color: 'blue', cursor: 'pointer', margin: ' 10px 0' }}>
              + Add condition
            </Box>}

          {secondFilter &&
            // show second filter form
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

          {/* show Filter submit button to apply filter */}
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