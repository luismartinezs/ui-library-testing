import React from "react";

import {
  TextInput,
  Label,
  Button,
  Checkbox,
  FileInput,
  Radio,
  Select,
  Textarea,
} from "flowbite-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-4 mt-4">
      <Label>
        Name:
        <TextInput type="text" name="name" />
      </Label>
      <Label>
        Essay:
        <Textarea />
      </Label>
      <Select aria-Label="Fruit">
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">
          Coconut
        </option>
        <option value="mango">Mango</option>
      </Select>
      <Label>
        Select file:
        <FileInput />
      </Label>
      <div className="flex items-center gap-2">
        <Checkbox id="is-going" />
        <Label htmlFor="is-going">Is going:</Label>
      </div>
      <Label>
        Start date:
        <TextInput
          type="date"
          id="start"
          name="trip-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        />
      </Label>
      <Label>
        Enter your email:
        <TextInput type="email" pattern=".+@.\.com" />
      </Label>
      <Label>
        Number of tentacles (10-100):
        <TextInput type="number" name="tentacles" min="10" max="100" />
      </Label>
      <fieldset className="flex flex-col gap-4" id="radio">
        <legend>Select a maintenance drone:</legend>

        <div className="flex items-center gap-2">
          <Radio id="huey" name="drone" value="huey" defaultChecked={true} />
          <Label htmlFor="huey">Huey</Label>
        </div>

        <div className="flex items-center gap-2">
          <Radio id="dewey" name="drone" value="dewey" />
          <Label htmlFor="dewey">Dewey</Label>
        </div>

        <div className="flex items-center gap-2">
          <Radio id="louie" name="drone" value="louie" />
          <Label htmlFor="louie">Louie</Label>
        </div>
      </fieldset>
      <Button type="submit" value="Submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
