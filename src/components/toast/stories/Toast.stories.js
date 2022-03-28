import React from "react";
import Toast, { pushToast } from "../src/Toast";
import Button from "../../button";

export default {
  title: "Toast",
  component: Toast,
};

const Template = (props) => <Toast {...props} />;

export const Default = Template.bind({});
Default.count = 1;
Default.decorators = [
  (Story) => (
    <div>
      <Story />
      <Button
        onClick={() => {
            Default.count += 1;
            pushToast({
                colorScheme: "info",
                message: "I am a tooltip no " + Default.count,
                autoclose: 3,
            })
        }
        }
      >
        Trigger toast
      </Button>
    </div>
  ),
];
