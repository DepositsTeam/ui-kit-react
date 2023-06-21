import React, { useState } from "react";
import ToastProvider from "../providers/ToastProvider.jsx";
import { usePushToast } from "../../utils/hooks/usePushToast";
import Button from "../button";

export default {
  title: "Toast",
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
};

const Template = (props) => {
  const { pushToast } = usePushToast();
  const [timesClicked, setTimesClicked] = useState(0);
  const buttonClicked = () => {
    setTimesClicked(timesClicked + 1);
    pushToast({
      colorScheme: "info",
      description: "I am some random text",
      autoclose: 190,
    });
  };

  return (
    <Button size={"huge"} onClick={buttonClicked}>
      Push Toast
    </Button>
  );
};

export const Default = Template.bind({});
