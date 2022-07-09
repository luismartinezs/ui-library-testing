import { Button } from "react-daisyui";

const Buttons = () => {
  return (
    <div className="flex space-x-1">
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
};

export default Buttons;
