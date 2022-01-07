import React from "react";
import PropType from "prop-types";
import getInitials from "../../utils/avatar/getInitials";
import "./avatar.css";

const Avatar = ({ name, size, src, colorScheme, status, statusColor }) => {
	const imageUnAvailable = !src;
	const initial = getInitials(name);

    const statusSize = {
        small: 'status-small',
        medium: 'status-medium',
        large: 'status-large',
    }
	return (
		<div className={`avatar ${size} ${colorScheme}`}>
			{imageUnAvailable ? <p>{initial}</p> : <img src={src} alt="" />}
			{status && <div className={`status ${statusSize[size]} ${statusColor}`}></div>}
		</div>
	);
};

export default Avatar;

Avatar.propTypes = {
	name: PropType.string,
	size: PropType.oneOf(["small", "medium", "large"]),
	src: PropType.string,
	colorScheme: PropType.oneOf([
		"cyan-light",
		"green-light",
		"orange-light",
		"red-light",
		"gray-light",
		"blue-light",
		"cyan-bold",
		"green-bold",
		"orange-bold",
		"red-bold",
		"gray-bold",
		"blue-bold",
	]),
	status: PropType.bool,
	statusColor: PropType.oneOf(["green", "orange", "gray"]),
};

Avatar.defaultProps = {
    status: false,
    statusColor: 'green',

};
