import { Button } from "flowbite-react";

const Buttons = () => {
  return (
    <div className="flex space-x-2 mt-4">
      <Button>Primary</Button>
      <Button color="warning">Secondary</Button>
      <Button outline={true}>Outline</Button>
    </div>
  );
};

export default Buttons;
