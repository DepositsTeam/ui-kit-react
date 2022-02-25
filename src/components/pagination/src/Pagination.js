import React from 'react'
import classNames from "../../../utils/classNames";
import PropTypes from "prop-types";
import Text from "../../text";
import Box from "../../box";
import './Pagination.css'
import Icon from "../../icon";
import ChevronArrowLeft from '../../icons/ChevronArrowLeft';
import ChevronArrowRight from '../../icons/ChevronArrowRight';


const Pagination = ({...props}) => {
    const generatedClassName = classNames({
        "ui-pagination": true,
    })
  return (
    <Box is='div' {...props} className={generatedClassName}>
        <Icon className='ui-pagination__left-arrow'  smartColor='currentcolor' icon={ChevronArrowLeft}/>
        <Text className="ui-pagination__text"
							scale={"subhead"}
							fontFace={"circularSTD"}></Text>
        <Icon className='ui-pagination__Right-arrow'  smartColor='currentcolor' icon={ChevronArrowRight}/>
    </Box>
  )
}

export default Pagination;



