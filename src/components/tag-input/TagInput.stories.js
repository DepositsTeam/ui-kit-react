import React from "react";
import TagInput from "./TagInput";
import ThemeProvider from "../providers/ThemeProvider";
import DarkModeProvider from "../providers/DarkModeProvider";

export default {
  title: "Forms/Tag Input",
  component: TagInput,
};

const Template = (args) => (
  <ThemeProvider>
    <TagInput
      onTagAdded={(newTag, tagsArray) => {
        console.log(newTag, tagsArray);
      }}
      onTagChanged={(oldTagsArray, newTagsArray) => {
        console.log(oldTagsArray, newTagsArray);
      }}
      onTagDeleted={(deletedTag, tagsArray) => {
        console.log(deletedTag, tagsArray);
      }}
      onTextChanged={(value) => {
        console.log(value);
      }}
      {...args}
    />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <TagInput
          onTagAdded={(newTag, tagsArray) => {
            console.log(newTag, tagsArray);
          }}
          onTagChanged={(oldTagsArray, newTagsArray) => {
            console.log(oldTagsArray, newTagsArray);
          }}
          onTagDeleted={(deletedTag, tagsArray) => {
            console.log(deletedTag, tagsArray);
          }}
          onTextChanged={(value) => {
            console.log(value);
          }}
          {...args}
        />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const SizeMassive = Template.bind({});
SizeMassive.args = {
  label: "Form Label",
  size: "massive",
};

export const SizeHuge = Template.bind({});
SizeHuge.args = {
  label: "Form Label",
  size: "huge",
};

export const SizeXLarge = Template.bind({});
SizeXLarge.args = {
  label: "Form Label",
  size: "xlarge",
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  label: "Form Label",
  size: "large",
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  label: "Form Label",
  size: "medium",
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  label: "Form Label",
  size: "small",
};

export const DarkModeSizeMassive = DarkModeTemplate.bind({});
DarkModeSizeMassive.args = {
  label: "Form Label",
  size: "massive",
};

export const DarkModeSizeHuge = DarkModeTemplate.bind({});
DarkModeSizeHuge.args = {
  label: "Form Label",
  size: "huge",
};

export const DarkModeSizeXLarge = DarkModeTemplate.bind({});
DarkModeSizeXLarge.args = {
  label: "Form Label",
  size: "xlarge",
};

export const DarkModeSizeLarge = DarkModeTemplate.bind({});
DarkModeSizeLarge.args = {
  label: "Form Label",
  size: "large",
};

export const DarkModeSizeMedium = DarkModeTemplate.bind({});
DarkModeSizeMedium.args = {
  label: "Form Label",
  size: "medium",
};

export const DarkModeSizeSmall = DarkModeTemplate.bind({});
DarkModeSizeSmall.args = {
  label: "Form Label",
  size: "small",
};
