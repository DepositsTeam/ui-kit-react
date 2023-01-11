import React, { useState } from "react";
import Toast from "./Toast";
import ToastProvider from "../providers/ToastProvider";
import { usePushToast } from "../../utils/hooks/usePushToast";
import Button from "../button";

export default {
  title: "Toast",
  component: Toast,
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
      message: `I am a tooltip no ${timesClicked}`,
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
