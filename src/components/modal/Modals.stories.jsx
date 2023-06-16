import React, { useState } from "react";
import Modal from "./Modal.jsx";
import TextField from "../text-field";
import Button from "../button";
import ThemeProvider from "../providers/ThemeProvider.jsx";
import DarkModeProvider from "../providers/DarkModeProvider.jsx";

export default {
  title: "Modal",
  component: Modal,
};

const Template = ({ children, ...args }) => {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  return (
    <>
      <ThemeProvider>
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
      </ThemeProvider>
    </>
  );
};

const DarkModeTemplate = ({ children, ...args }) => {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  return (
    <>
      <ThemeProvider>
        <div style={{ padding: "3em", background: "#121A26" }}>
          <DarkModeProvider darkMode={true}>
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
          </DarkModeProvider>
        </div>
      </ThemeProvider>
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

export const DarkModeDefault = DarkModeTemplate.bind({});

DarkModeDefault.args = {
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

export const DarkModeGreyBody = DarkModeTemplate.bind({});
DarkModeGreyBody.args = {
  heading: "Title",
  greyContent: true,
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
