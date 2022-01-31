import React from "react";
import Icon from "../src/Icon";
import SearchIcon from "../../icons/Search";
import ChevronFilledDownIcon from "../../icons/ChevronFilledDown";
import InfoIcon from "../../icons/Info";
import WarningIcon from "../../icons/Warning";
import ErrorIcon from "../../icons/Error";
import CheckIcon from "../../icons/Check";
import CloseIcon from "../../icons/Close";

export default {
  title: "Icons",
  component: Icon,
  argTypes: {
    fill: {
      control: "color",
    },
    smartColor: {
      control: "color",
    },
    stroke: {
      control: "color",
    },
  },
};

const Template = ({ children, ...args }) => <Icon {...args} />;

export const Search = Template.bind({});
Search.args = {
  icon: SearchIcon,
};

export const ChevronFilledDown = Template.bind({});
ChevronFilledDown.args = {
  icon: ChevronFilledDownIcon,
};

export const Info = Template.bind({});
Info.args = {
  icon: InfoIcon,
};

export const Warning = Template.bind({});
Warning.args = {
  icon: WarningIcon,
};

export const Error = Template.bind({});
Error.args = {
  icon: ErrorIcon,
};

export const Check = Template.bind({});
Check.args = {
  icon: CheckIcon,
};

export const Close = Template.bind({});
Close.args = {
  icon: CloseIcon,
};
