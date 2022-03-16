import { useState } from 'react'

import ChevronFilledDown from "../../icons/ChevronFilledDown";
import Checkbox from "../../checkbox";
import Box from '../../box'
import "./Table.css";
import Icon from "../../icon";
import ascending from '../assets/sort-ascending.svg'
import descending from '../assets/sort-descending.svg'
import funnel from '../assets/funnel.svg'
import rightArrow from '../assets/right-arrow.svg'

const TableHeader = ({ headings }) => {
    const [sortIndex, setSortIndex] = useState(null)
    const sortContent = (idx, e) => {
        setSortIndex(() => idx)
        sortIndex !== null && setSortIndex(() => null)
    }
    console.log(sortIndex);
    return (
        <Box is='div' className='ui-table__header'>
           
            <Checkbox className='ui-table__checkbox' />
            {headings.map((item, idx) => (
                <Box key={item} is='div' className={`ui-table__header-item `} >
                    <Box is='div' className={`ui-table__header-item-inner ${sortIndex === idx && 'sorting'} `} onClick={(e) => sortContent(idx, e)}>
                        {item}
                        <span>
                            <Icon
                                className={"ui-button__dropdown-icon"}

                                icon={ChevronFilledDown}
                            />
                        </span>
                    </Box>
                    {sortIndex === idx &&
                        <Box is="div" className={`ui-table__header-sort_modal`}>
                            <Box className="ui-table__header-sort_modal-item"><img alt='ascending' src={ ascending} /> Sort Ascending</Box>
                            <Box className="ui-table__header-sort_modal-item"><img alt='descending' src={descending} /> Sort Descending</Box>
                            <Box className="ui-table__header-sort_modal-item"><img alt='filter' src={funnel} /> Filter <img alt='right-arrow' src={rightArrow} /> </Box>
                        </Box>
                    }
                </Box>
            ))}

        </Box>
    )
}

export default TableHeader