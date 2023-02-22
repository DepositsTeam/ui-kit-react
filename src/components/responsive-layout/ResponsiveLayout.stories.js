import ResponsiveLayout from "./ResponsiveLayout";
import Row from "./Row";
import Col from "./Col";
import Box from "../box";

export default {
  title: "Layouts/Responsive Layout",
  component: ResponsiveLayout,
  argTypes: {},
};

const Template = (args) => (
  <ResponsiveLayout {...args} debugMode>
    <Row>
      <Col md={3}>Some random item</Col>
      <Col md={9}>Item begins here</Col>
    </Row>
  </ResponsiveLayout>
);

export const Default = Template.bind({});

const ColTemplate = (args) => (
  <ResponsiveLayout {...args} debugMode>
    <Row>
      <Col xs={{ span: 3, offset: 3 }}>
        <Box height="90px" background="black" width="100%" />
      </Col>
      <Col xs={6}>
        <Box height="90px" background="blue" width="100%" />
      </Col>
    </Row>
  </ResponsiveLayout>
);

export const EqualCol = ColTemplate.bind({});
