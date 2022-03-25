import React, { useState } from "react";
import Modal from "../src/Modal";
import TextField from "../../text-field";
import Button from "../../button";

export default {
  title: "Modal",
  component: Modal,
};

const Template = ({ children, ...args }) => {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  return (
    <>
      <Modal show={show} requestClose={closeModal} {...args}>
        {children}
      </Modal>
      <Button
        onClick={() => {
          setShow(true);
        }}
      >
        Toggle Modal
      </Button>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  heading: "Title",
  children: (
    <>
      <TextField width={"900px"} label={"Form label"} />
      <TextField label={"Form label"} />
      <TextField label={"Form label"} />
      <Button
        responsive
        size={"huge"}
        marginTop={"2rem"}
        colorScheme={"primary"}
      >
        Primary Button
      </Button>
    </>
  ),
};

export const GreyBody = Template.bind({});

GreyBody.args = {
  heading: "Title",
  greyContent: true,
  show: false,
  children: (
    <>
      <TextField label={"Form label"} />
      <TextField label={"Form label"} />
      <TextField label={"Form label"} />
      <Button
        marginTop={"2rem"}
        responsive
        size={"huge"}
        colorScheme={"primary"}
      >
        Primary Button
      </Button>
    </>
  ),
};

Default.decorators = [
  (Story, args) => (
    <div>
      <Story />
    </div>
  ),
];
