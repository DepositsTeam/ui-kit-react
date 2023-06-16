import React, { useState } from "react";
import Tab from "./Tab.jsx";
import ThemeProvider from "../providers/ThemeProvider.jsx";
import DarkModeProvider from "../providers/DarkModeProvider.jsx";
import Box from "../box";
import Card from "../card";
import Text from "../text";

export default {
  title: "Tabs",
  component: Tab,
};

const Template = (args) => (
  <ThemeProvider>
    <Tab {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <Tab {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      text: "Test link",
      href: "#",
    },
    {
      text: "Test link",
      href: "#",
    },
    {
      text: "Test link",
      href: "#",
    },
    {
      text: "Test link",
      href: "#",
    },
    {
      text: "Test link",
      href: "#",
    },
  ],
};

export const DarkModeDefault = DarkModeTemplate.bind({});
DarkModeDefault.args = {
  tabs: [
    {
      text: "Test link",
      href: "#",
    },
    {
      text: "Test link",
      href: "#",
    },
    {
      text: "Test link",
      href: "#",
    },
    {
      text: "Test link",
      href: "#",
    },
    {
      text: "Test link",
      href: "#",
    },
  ],
};

const TemplateWithContent = (args) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabs = [
    {
      text: "Tab 1",
      href: "#",
    },
    {
      text: "Tab 2",
      href: "#",
    },
    {
      text: "Tab 3",
      href: "#",
    },
    {
      text: "Tab 4",
      href: "#",
    },
    {
      text: "Tab 5 (Disabled)",
      href: "#",
      disabled: true,
    },
  ];
  return (
    <ThemeProvider>
      <Box>
        <Tab
          {...args}
          onTabChange={(index) => setActiveTabIndex(index)}
          tabs={tabs}
        />
        {activeTabIndex === 0 && (
          <Card>
            <Text>First set of content</Text>
          </Card>
        )}
        {activeTabIndex === 1 && (
          <Card>
            <Text>Second set of content</Text>
          </Card>
        )}
        {activeTabIndex === 2 && (
          <Card>
            <Text>Third set of content</Text>
          </Card>
        )}
        {activeTabIndex === 3 && (
          <Card>
            <Text>Fourth set of content</Text>
          </Card>
        )}
        <Text>Active Tab Index: {activeTabIndex}</Text>
      </Box>
    </ThemeProvider>
  );
};

export const SampleWithContent = TemplateWithContent.bind({});

export const DarkModeSampleWithContent = TemplateWithContent.bind({});
DarkModeSampleWithContent.decorators = [
  (Story) => (
    <ThemeProvider>
      <div style={{ padding: "3em", background: "#121A26" }}>
        <DarkModeProvider darkMode={true}>
          <Story />
        </DarkModeProvider>
      </div>
    </ThemeProvider>
  ),
];
