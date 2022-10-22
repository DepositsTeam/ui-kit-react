import React from "react";
import "./avatar.css";
import Box from "../box";
import classNames from "../../utils/classNames";
import getInitials from "./utils/getInitials";
import PropTypes from "prop-types";
import Text from "../text";
import Icon from "../icon";
import ChevronFilledDown from "../icons/ChevronFilledDown";
import keyGen from "../../utils/keyGen";

const colorSchemes = ["cyan", "green", "orange", "red", "gray", "blue"];

const generateAvatarColorScheme = (avatar, index) => {
  return (
    avatar.colorScheme ||
    (index < colorSchemes.length
      ? colorSchemes[index]
      : colorSchemes[index % colorSchemes.length])
  );
};

const generateAvatarClassName = (avatar, index = 0) =>
  classNames(
    {
      [`background__${generateAvatarColorScheme(avatar, index)}`]:
        !avatar.imgURL,
      [`status__${avatar.status}`]: avatar.status,
    },
    "ui-avatar"
  );

const Avatar = ({
  avatar,
  subtle,
  dropdown,
  size,
  visibleAvatars,
  stacked,
  avatars,
  className,
  ...props
}) => {
  const wrapperClassName = classNames(
    {
      "ui-avatars__wrapper": true,
      subtle,
      [`size__${size}`]: true,
      padded: avatars.length & !stacked,
      stacked: avatars.length && stacked,
    },
    className
  );

  const extraAvatars =
    avatars && avatars.length ? avatars.length - visibleAvatars : 0;

  const avatarFactory = (avatar, index = 0) => (
    <>
      <div
        style={{
          ...(avatar.imgURL
            ? { backgroundImage: `url(${avatar.imgURL})` }
            : {}),
        }}
        className={generateAvatarClassName(avatar, index)}
      >
        {!avatar.imgURL && (
          <Text equalLineHeight scale={size === "small" ? "overline" : "footnote"}>
            {getInitials(avatar.name)}
          </Text>
        )}
        {avatar.status && !stacked && (
          <div className={"ui-avatar__avatar-status"} />
        )}
      </div>
      {dropdown && !stacked && (
        <Icon className={"ui-avatar__dropdown-icon"} icon={ChevronFilledDown} />
      )}
    </>
  );

  const generatedAvatars = avatars.length ? (
    avatars.slice(0, visibleAvatars).map((avatar, index) => (
      <div key={`ui-avatar__${keyGen()}`} className={"ui-avatar__wrapper"}>
        {avatarFactory(avatar, index)}
      </div>
    ))
  ) : (
    <div className={"ui-avatar__wrapper"}>{avatarFactory(avatar)}</div>
  );

  return (
    <Box is={"div"} className={wrapperClassName} {...props}>
      {generatedAvatars}
      {extraAvatars > 0 && (
        <div className={"ui-avatar__wrapper"}>
          <div className={"ui-avatar background__extra"}>
            <Text scale={size === "small" ? "overline" : "footnote"}>
              +{extraAvatars}
            </Text>
          </div>
        </div>
      )}
    </Box>
  );
};

Avatar.propTypes = {
  subtle: PropTypes.bool,
  stacked: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  avatar: PropTypes.object,
  avatars: PropTypes.array,
  dropdown: PropTypes.bool,
  visibleAvatars: PropTypes.number,
};

Avatar.defaultProps = {
  subtle: false,
  stacked: false,
  size: "large",
  avatar: {
    name: "Eric Aprioku",
  },
  dropdown: false,
  visibleAvatars: 6,
  avatars: [],
};

export default Avatar;
