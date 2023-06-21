import Avatar from "./Avatar.jsx";
import DarkModeProvider from "../providers/DarkModeProvider.jsx";
import ThemeProvider from "../providers/ThemeProvider.jsx";

export default {
  title: "Avatar",
  component: Avatar,
  argTypes: {},
};

const Template = (args) => (
  <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>
);

const DarkModeTemplate = (args) => (
  <ThemeProvider>
    <div style={{ padding: "3em", background: "#121A26" }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>
);

export const SmartColorAvatars = Template.bind({});
SmartColorAvatars.args = {
  avatars: [
    {
      status: "green",
      name: "Charles Babbage",
      smartColor: "#3f3f3f",
    },
    {
      status: "green",
      name: "Charles Babbage",
      smartColor: "#000000",
    },
    {
      status: "green",
      name: "Charles Babbage",
      smartColor: "#6b32a8",
    },
    {
      status: "green",
      name: "Charles Babbage",
      smartColor: "#e00b64",
    },
    {
      status: "green",
      name: "Charles Babbage",
      smartColor: "#efefef",
    },
  ],
};

export const SubtleLargeAvatars = Template.bind({});
SubtleLargeAvatars.args = {
  subtle: true,
  avatars: [
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    },
  ],
};

export const SubtleDarkLargeAvatars = DarkModeTemplate.bind({});
SubtleDarkLargeAvatars.args = {
  subtle: true,
  avatars: [
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    },
  ],
};

export const SubtleMediumAvatars = Template.bind({});
SubtleMediumAvatars.args = {
  subtle: true,
  size: "medium",
  avatars: [
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    },
  ],
};

export const SubtleDarkMediumAvatars = DarkModeTemplate.bind({});
SubtleDarkMediumAvatars.args = {
  subtle: true,
  size: "medium",
  avatars: [
    {
      status: "grey",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    },
  ],
};

export const SubtleSmallAvatars = Template.bind({});
SubtleSmallAvatars.args = {
  subtle: true,
  size: "small",
  avatars: [
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    },
  ],
};

export const SubtleDarkSmallAvatars = DarkModeTemplate.bind({});
SubtleDarkSmallAvatars.args = {
  subtle: true,
  size: "small",
  avatars: [
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
    },
    {
      status: "green",
      name: "Charles Babbage",
      imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    },
  ],
};

export const SubtleCyan = Template.bind({});
SubtleCyan.args = {
  subtle: true,
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
  },
};

export const SubtleDarkCyan = DarkModeTemplate.bind({});
SubtleDarkCyan.args = {
  subtle: true,
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
  },
};

export const SubtleGreen = Template.bind({});
SubtleGreen.args = {
  subtle: true,
  avatar: {
    colorScheme: "green",
    name: "Steven Taliban",
  },
};

export const SubtleDarkGreen = DarkModeTemplate.bind({});
SubtleDarkGreen.args = {
  subtle: true,
  avatar: {
    colorScheme: "green",
    name: "Steven Taliban",
  },
};

export const SubtleOrange = Template.bind({});
SubtleOrange.args = {
  subtle: true,
  avatar: {
    colorScheme: "orange",
    name: "John Doe",
  },
};

export const SubtleDarkOrange = DarkModeTemplate.bind({});
SubtleDarkOrange.args = {
  subtle: true,
  avatar: {
    colorScheme: "orange",
    name: "John Doe",
  },
};

export const SubtleRed = Template.bind({});
SubtleRed.args = {
  subtle: true,
  avatar: {
    colorScheme: "red",
    name: "Cynthia Karen",
  },
};

export const SubtleDarkRed = DarkModeTemplate.bind({});
SubtleDarkRed.args = {
  subtle: true,
  avatar: {
    colorScheme: "red",
    name: "Cynthia Karen",
  },
};

export const SubtleGray = Template.bind({});
SubtleGray.args = {
  subtle: true,
  avatar: {
    colorScheme: "gray",
    name: "Yasmine Belle Deuce",
  },
};

export const SubtleDarkGray = DarkModeTemplate.bind({});
SubtleDarkGray.args = {
  subtle: true,
  avatar: {
    colorScheme: "gray",
    name: "Yasmine Belle Deuce",
  },
};

export const SubtleBlue = Template.bind({});
SubtleBlue.args = {
  subtle: true,
  avatar: {
    colorScheme: "blue",
    name: "Steven Taliban",
  },
};

export const SubtleDarkBlue = DarkModeTemplate.bind({});
SubtleDarkBlue.args = {
  subtle: true,
  avatar: {
    colorScheme: "blue",
    name: "Steven Taliban",
  },
};

export const Cyan = Template.bind({});
Cyan.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
  },
};
Cyan.storyName = "Solid Cyan";

export const DarkCyan = DarkModeTemplate.bind({});
DarkCyan.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
  },
};
DarkCyan.storyName = "Solid Cyan Dark";

export const Green = Template.bind({});
Green.args = {
  avatar: {
    colorScheme: "green",
    name: "Steven Taliban",
  },
};
Green.storyName = "Solid Green";

export const DarkGreen = DarkModeTemplate.bind({});
DarkGreen.args = {
  avatar: {
    colorScheme: "green",
    name: "Steven Taliban",
  },
};
DarkGreen.storyName = "Solid Green Dark";

export const Orange = Template.bind({});
Orange.args = {
  avatar: {
    colorScheme: "orange",
    name: "John Doe",
  },
};
Orange.storyName = "Solid Orange";

export const DarkOrange = DarkModeTemplate.bind({});
DarkOrange.args = {
  avatar: {
    colorScheme: "orange",
    name: "John Doe",
  },
};
DarkOrange.storyName = "Solid Orange Dark";

export const Red = Template.bind({});
Red.args = {
  avatar: {
    colorScheme: "orange",
    name: "Cynthia Karen",
  },
};
Red.storyName = "Solid Red";

export const DarkRed = DarkModeTemplate.bind({});
DarkRed.args = {
  avatar: {
    colorScheme: "orange",
    name: "Cynthia Karen",
  },
};
DarkRed.storyName = "Solid Red Dark";

export const Gray = Template.bind({});
Gray.args = {
  avatar: {
    colorScheme: "gray",
    name: "Yasmine Belle Deuce",
  },
};
Gray.storyName = "Solid Gray";

export const DarkGray = DarkModeTemplate.bind({});
DarkGray.args = {
  avatar: {
    colorScheme: "gray",
    name: "Yasmine Belle Deuce",
  },
};
DarkGray.storyName = "Solid Gray Dark";

export const Blue = Template.bind({});
Blue.args = {
  avatar: {
    colorScheme: "blue",
    name: "Steven Taliban",
  },
};
Blue.storyName = "Solid Blue";

export const DarkBlue = DarkModeTemplate.bind({});
DarkBlue.args = {
  avatar: {
    colorScheme: "blue",
    name: "Steven Taliban",
  },
};
DarkBlue.storyName = "Solid Blue Dark";

export const CyanStatusGreen = Template.bind({});
CyanStatusGreen.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "green",
  },
};

export const DarkCyanStatusGreen = DarkModeTemplate.bind({});
DarkCyanStatusGreen.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "green",
  },
};

export const CyanStatusOrange = Template.bind({});
CyanStatusOrange.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "orange",
  },
};

export const DarkCyanStatusOrange = DarkModeTemplate.bind({});
DarkCyanStatusOrange.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "orange",
  },
};

export const CyanStatusGray = Template.bind({});
CyanStatusGray.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "gray",
  },
};

export const DarkCyanStatusGray = DarkModeTemplate.bind({});
DarkCyanStatusGray.args = {
  avatar: {
    colorScheme: "cyan",
    name: "Charles Ukpe",
    status: "gray",
  },
};

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  avatar: {
    imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
  },
};

export const DarkImageAvatar = DarkModeTemplate.bind({});
DarkImageAvatar.args = {
  avatar: {
    imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
  },
};

export const ImageAvatarStatus = Template.bind({});
ImageAvatarStatus.args = {
  avatar: {
    imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    status: "green",
  },
};

export const DarkImageAvatarStatus = DarkModeTemplate.bind({});
DarkImageAvatarStatus.args = {
  avatar: {
    imgURL: "https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",
    status: "green",
  },
};
