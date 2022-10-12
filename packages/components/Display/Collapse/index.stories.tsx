import { useState } from 'react';
import Collapse, { Panel } from './index';

export default {
  title: 'Display/Collapse',
  component: Collapse,
  argTypes: {
    type: {
      control: 'null',
    },
  },
};

function Template(args) {
  const [index, setIndex] = useState<Array<string>>(['1']);

  return (
    <Collapse
      value={index}
      onChange={(_, nextVal) => {
        setIndex(nextVal as Array<string>);
      }}
    >
      <Panel name="1" header="Consistency">
        Consistent with real life: in line with the process and logic of real
        life, and comply with languages and habits that the users are used to;
        Consistent within interface: all elements should be consistent, such as:
        design style, icons and texts, position of elements, etc. Consistent
        with real life: in line with the process and logic of real life, and
        comply with languages and habits that the users are used to; Consistent
        within interface: all elements should be consistent, such as: design
        style, icons and texts, position of elements, etc. Consistent with real
        life: in line with the process and logic of real life, and comply with
        languages and habits that the users are used to; Consistent within
        interface: all elements should be consistent, such as: design style,
        icons and texts, position of elements, etc. Consistent with real life:
        in line with the process and logic of real life, and comply with
        languages and habits that the users are used to; Consistent within
        interface: all elements should be consistent, such as: design style,
        icons and texts, position of elements, etc. Consistent with real life:
        in line with the process and logic of real life, and comply with
        languages and habits that the users are used to; Consistent within
        interface: all elements should be consistent, such as: design style,
        icons and texts, position of elements, etc.
      </Panel>
      <Panel name="2" header="Feedback">
        Operation feedback: enable the users to clearly perceive their
        operations by style updates and interactive effects; Visual feedback:
        reflect current state by updating or rearranging elements of the page.
      </Panel>
      <Panel name="3" header="Efficiency">
        Simplify the process: keep operating process simple and intuitive;
        Definite and clear: enunciate your intentions clearly so that the users
        can quickly understand and make decisions; Easy to identify: the
        interface should be straightforward, which helps the users to identify
        and frees them from memorizing and recalling.
      </Panel>
      <Panel name="4" header="Controllability">
        Decision making: giving advices about operations is acceptable, but do
        not make decisions for the users; Controlled consequences: users should
        be granted the freedom to operate, including canceling, aborting or
        terminating current operation.
      </Panel>
    </Collapse>
  );
}

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {};
