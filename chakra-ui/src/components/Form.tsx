import React from "react";

import {
  Input,
  FormControl,
  FormLabel,
  Button,
  Textarea,
  Select,
  Checkbox,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Radio,
  RadioGroup,
  Stack,
  Flex,
} from "@chakra-ui/react";

const Form = () => {
  return (
    <form>
      <FormControl mt="4">
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" type="text" />
      </FormControl>
      <FormControl mt="4">
        <FormLabel htmlFor="essay">Essay</FormLabel>
        <Textarea id="essay" placeholder="Here is a sample placeholder" />
      </FormControl>
      <Select placeholder="Fruit" mt="4">
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </Select>
      <FormControl mt="4">
        <FormLabel htmlFor="file">Upload file</FormLabel>
        <Input id="file" type="file" />
      </FormControl>
      <FormControl mt="4">
        <Checkbox>Is going</Checkbox>
      </FormControl>
      <FormControl mt="4">
        <FormLabel htmlFor="date">Start date</FormLabel>
        <Input
          type="date"
          id="start"
          name="trip-start"
          value="2018-07-22"
          min="2018-01-01"
          max="2018-12-31"
        />
      </FormControl>
      <FormControl mt="4">
        <FormLabel htmlFor="email">Enter your email</FormLabel>
        <Input id="email" type="email" />
      </FormControl>
      <FormControl mt="4">
        <FormLabel htmlFor="email">Number of tentacles (10-100)</FormLabel>
        <NumberInput min={10} max={100}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <RadioGroup mt="4" defaultValue="1">
        <Stack direction="row">
          <Radio value="1" colorScheme="blue">
            First
          </Radio>
          <Radio value="2" colorScheme="red">
            Second
          </Radio>
          <Radio value="3" colorScheme="green">
            Third
          </Radio>
        </Stack>
      </RadioGroup>

      <Flex justifyContent="end">
        <Button type="submit" colorScheme="primary" mt="4">
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default Form;
