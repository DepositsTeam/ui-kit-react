import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Modal.scss";
import Icon from "../icon";
import Close from "../icons/Close";
import Heading from "../heading";
import classNames from "../../utils/classNames";
import Box from "../box";
import { Portal } from "../../utils/components/Portal";

const Modal = ({
  show,
  greyContent,
  roundedBorders,
  minModalWidth,
  greyHeader,
  overlayBg,
  alignment,
  onCloseModal,
  modalWidth,
  title,
  maxModalWidth,
  heading,
  contentClass,
  bodyClass,
  ...props
}) => {
  const generatedClassNames = classNames({
    greyContent,
    roundedBorders,
    greyHeader,
    overlayBg,
    [`modal__${alignment}`]: alignment,
    "ui-modal": true,
    "ui-modal__closerr": true,
  });
  const handleCloseClicks = (e) => {
    if (e.target.classList.contains("ui-modal__closerr")) {
      onCloseModal();
    }
  };

  return show ? (
    <Portal>
      <Box
        onClick={handleCloseClicks}
        className={generatedClassNames}
        style={{
          "--overlay-bg": overlayBg,
        }}
      >
        <Box
          className={classNames({
            "ui-modal__content": true,
            "--modal-width": modalWidth,
            "--min-modal-width": minModalWidth,
            "--max-modal-width": maxModalWidth,
          })}
        >
          <Box className={"ui-modal__heading"}>
            {typeof heading === "string" ? (
              <Heading marginTop={0} marginBottom={0} is={"h5"}>
                {heading}
              </Heading>
            ) : (
              heading
            )}
            <Icon
              height={"20px"}
              width={"20px"}
              smartColor={"#8895A7"}
              icon={Close}
              className={"ui-modal__closerr"}
              onClick={handleCloseClicks}
              cursor={"pointer"}
            />
          </Box>
          <Box
            className={classNames({
              "ui-modal__body": true,
              [bodyClass]: bodyClass,
            })}
          >
            {props.children}
          </Box>
        </Box>
      </Box>
    </Portal>
  ) : (
    <></>
  );
};

export default Modal;

Modal.defaultProps = {
  alignment: "top",
};

Modal.propTypes = {
  show: PropTypes.bool,
  greyContent: PropTypes.bool,
  roundedBorders: PropTypes.bool,
  minModalWidth: PropTypes.string,
  maxModalWidth: PropTypes.string,
  greyHeader: PropTypes.bool,
  overlayBg: PropTypes.string,
  alignment: PropTypes.oneOf(["top", "bottom", "center"]),
  onCloseModal: PropTypes.func,
  modalWidth: PropTypes.string,
  title: PropTypes.string,
  contentClass: PropTypes.string,
  heading: PropTypes.string,
  bodyClass: PropTypes.string,
};
