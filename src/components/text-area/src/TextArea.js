import React from "react";
import Box from "../../box";
import Text from "../../text";
import PropTypes from "prop-types";
import Icon from "../../icon";
import Error from "../../icons/Error";
import classNames from "../../../utils/classNames";
import "./textarea.css";

const TextArea = ({ label, errorMessage, className, ...props }) => {
	const generateTextAreaClasses = classNames({
		"ui-text-area__textarea": true,
		"has-error": errorMessage,
	});

	const wrapperClasses = classNames(["ui-text-area__wrapper"], className);
	return (
		<Box>
			<Box is="label" className={wrapperClasses}>
				<Text scale={"subhead"} className="ui-text-area__label">
					{label}
				</Text>
			</Box>
			<Box className={generateTextAreaClasses} is="textarea" {...props}></Box>
            {
                errorMessage && (
                    <div className="ui-text-area__error">
                        <Icon icon={Error} className="ui-text-area__error-icon"/>
                        <Text
                            className="ui-text-area__error-text"
                            scale="footnote"
                            fontFace="circularSTD"
                        >
                            {errorMessage}
                        </Text>
                    </div>
                )
            }
		</Box>
	);
};

export default TextArea;

TextArea.propTypes = {
	label: PropTypes.string,
    disabled: PropTypes.bool,
};

TextArea.defaultProps = {
	label: "Form Label",
    disabled: false,
};
