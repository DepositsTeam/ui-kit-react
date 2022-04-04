import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./modal.css";
import Icon from "../../icon";
import Close from "../../icons/Close";
import Heading from "../../heading";
import classNames from "../../../utils/classNames";
import Box from "../../box";
import { Portal } from "../../../utils/components/Portal";

const Modal = ({ greyContent, show, requestClose, modalWidth, ...props }) => {
  const generatedClassNames = classNames({
    greyContent,
    "ui-modal": true,
    "ui-modal__closerr": true,
  });
  const handleCloseClicks = (e) => {
    if (e.target.classList.contains("ui-modal__closerr")) {
      requestClose();
    }
  };

  return show ? (
    <Portal>
      <Box onClick={handleCloseClicks} className={generatedClassNames}>
        <Box className={"ui-modal__content"}>
          <div className={"ui-modal__heading"}>
            <Heading marginTop={0} marginBottom={0} is={"h5"}>
              {props.heading}
            </Heading>
            <Icon
              height={"20px"}
              width={"20px"}
              smartColor={"#8895A7"}
              icon={Close}
              className={"ui-modal__closerr"}
              onClick={handleCloseClicks}
              cursor={"pointer"}
            />
          </div>
          <div className={"ui-modal__body"}>{props.children}</div>
        </Box>
      </Box>
    </Portal>
  ) : (
    <></>
  );
};

export default Modal;

Modal.defaultProps = {};

Modal.propTypes = {
  show: PropTypes.bool,
  greyContent: PropTypes.bool,
  requestClose: PropTypes.func,
  modalWidth: PropTypes.string,
  title: PropTypes.string,
};
