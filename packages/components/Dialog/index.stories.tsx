import { useState } from 'react';
import Dialog from './index';
import Button from '../Button';
export default {
  title: 'feedback/Dialog',
  component: Dialog,
  argTypes: {
    type: {
      control: 'null',
    },
  },
};

function Template(args) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Button
        type="text"
        onClick={() => {
          setOpen((v) => !v);
        }}
      >
        Open Dialog
      </Button>
      <Dialog
        open={open}
        title="Tips"
        onClose={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        onConfirm={() => {
          setOpen(false);
        }}
      >
        this is a message.
      </Dialog>
    </div>
  );
}

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {};
