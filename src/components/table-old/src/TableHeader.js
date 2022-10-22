
import ChevronFilledDown from "../../icons/ChevronFilledDown";
import Checkbox from "../../checkbox";
import Box from '../../box'
import "./Table.scss";
import Icon from "../../icon";
import ascending from '../assets/sort-ascending.svg'
import descending from '../assets/sort-descending.svg'
import funnel from '../assets/funnel.svg'
import rightArrow from '../assets/right-arrow.svg'
import Radio from '../../radio/src/Radio';
import TextField from "../../text-field/TextField";

const TableHeader = ({ headings, sortIndex, handleSort, sortModalTrigger, filterIndex, filterModalTrigger, setFilterIndex, handleChange, applyFilter, filterCriteria, setFilterCriteria, filterLabel, checkbox }) => {
    return (
        <Box is='div' className='ui-table__header'>
            {/* display checkbox if checkbox boolean is passed as true by user */}
            {checkbox && <Checkbox className='ui-table__checkbox' />}
            {/* render headings */}
            {headings.map((item, idx) => (
                <Box key={item} is='div' className={`ui-table__header-item `} >
                    <Box is='div' className={`ui-table__header-item-inner ${sortIndex === idx && 'sorting'} `} onClick={(e) => sortModalTrigger(idx, e)}>
                        {item}
                        <span>
                            <Icon
                                className={"ui-button__dropdown-icon"}
                                icon={ChevronFilledDown}
                            />
                        </span>
                    </Box>

                    {/* Sort modal creation */}
                    {sortIndex === idx &&
                        <Box is="div" className={`ui-table__header-sort_modal`}>
                            <Box className="ui-table__header-sort_modal-item" onClick={() => handleSort(idx, 'asc')} ><img alt='ascending' src={ascending} /> Sort Ascending</Box>
                            <Box className="ui-table__header-sort_modal-item" onClick={() => handleSort(idx, 'desc')} ><img alt='descending' src={descending} /> Sort Descending</Box>
                            <Box className={`ui-table__header-sort_modal-item ${filterIndex === idx && 'filter-bg'} `} onClick={(e) => filterModalTrigger(idx, e)} >
                                <Box className={`ui-table__header-sort_modal-item filter `}><img alt='filter' src={funnel} /> Filter</Box> <img alt='right-arrow' src={rightArrow} />
                            </Box>
                        </Box>
                    }

                    {/* Filter modal creation */}
                    {filterIndex === idx &&
                        <Box is='div' className={`ui-table__header-filter_modal`}>
                            <Box is="div" className={`ui-table__header-filter_modal-actions`} >
                                <Box is="div" className="filter-cancel" onClick={(e) => setFilterIndex(() => null)}>Cancel</Box>
                                <Box is="div" className="filter-apply" onClick={() => {
                                    //  reset other states and filter 
                                    applyFilter()
                                }}>
                                    Apply Filter
                                </Box>
                            </Box>

                            {/* render all filter options */}
                            {filterLabel.map((label, ind) =>
                                <Box key={ind} is="div" className=''>

                                    <Radio label={label} name='filter-label' onClick={() => setFilterCriteria(filterLabel[ind])} />
                                    
                                    {/* show filter text field if clicked */}
                                    {filterCriteria === label && <TextField label='Value' onChange={(e) => handleChange(e)} onKeyDown={(e) => e.keyCode === 13 && applyFilter(e)} />}
                                </Box>
                            )}

                        </Box>
                    }

                </Box>
            ))}

        </Box>
    )
}

export default TableHeader