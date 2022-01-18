import React from "react";
import PropType from "prop-types";
import getInitials from "../../utils/avatar/getInitials";
import DropDownIcon from "../../assets/avatar/dropDown.png";
import "./avatar.css";

const Avatar = ({
	name,
	size,
	src,
	colorScheme,
	status,
	statusColor,
	icon,
	avatars,
	visibleAvatars,
}) => {
	const imageUnAvailable = !src;
	const initial = getInitials(name);
	const totalAvatars = avatars?.length;
	const extraAvatars = totalAvatars - visibleAvatars;

	const statusSize = {
		small: "status-small",
		medium: "status-medium",
		large: "status-large",
	};

	const stackedItemSize = {
		small: "stacked-item-small",
		medium: "stacked-item-medium",
		large: "stacked-item-large",
	}

	const stackedAvatarItem = (avatars, size) => (
		<div style={styles.stackedContainer}>
			<div className="stacked-avatar-item">
				{avatars?.slice(0, visibleAvatars)?.map((avatar, index) => (
					<div key={index} className={`stacked-avatar-item-image ${stackedItemSize[size]} ${avatar.colorScheme} ${size}`}>
						{avatar.imageSrc ? (
							// eslint-disable-next-line jsx-a11y/alt-text
							<img src={avatar?.imageSrc} />
						) : (
							<p>{getInitials(avatar.name)}</p>
						)}
					</div>
				))}
			</div>
			<span className={`extras-container ${size}`}>+{extraAvatars}</span>
		</div>
	);

	return (
		<>
			{avatars ? (
					stackedAvatarItem(avatars, size)
			) : (
				<div className="container">
					<div className={`avatar ${size} ${colorScheme}`}>
						{imageUnAvailable ? <p>{initial}</p> : <img src={src} alt="" />}
						{status && (
							<div
								className={`status ${statusSize[size]} ${statusColor}`}
							></div>
						)}
					</div>
					{icon && (
						// <div className="icon-container">
						<img className="icon-container" src={DropDownIcon} alt="" />
						// </div>
					)}
				</div>
			)}
		</>
	);
};

export default Avatar;

Avatar.propTypes = {
	name: PropType.string,
	size: PropType.oneOf(["small", "medium", "large"]),
	src: PropType.string,
	avatars: PropType.array,
	visibleAvatars: PropType.number,
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
	icon: PropType.bool,
};

Avatar.defaultProps = {
	status: false,
	statusColor: "green",
	size: "small",
	icon: false,
};

const styles = {
	stackedContainer: {
		display: "flex",
		alignItems: "center",
	},
};
