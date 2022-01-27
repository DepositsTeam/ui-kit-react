import React from "react";
import Icon from "../src/Icon";
import SearchIcon from "../../icons/Search";
import ChevronFilledDownIcon from "../../icons/ChevronFilledDown";

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
