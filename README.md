# UI Library Testing

## Components to test

- Form (formik / react-hook-form + yum)
  - Select + options
  - Text input
  - Numeric input
  - Date input
- List of items
- Item card
- Header
  - Nav bar
  - Burger menu
- Footer
- Loading state
- Error state
- Buttons (primary, secondary, outline)
- Date selector
- Modal
- Title and paragraph
- Secondary header

## Libraries to test

- [x] DaisyUI
- [x] React Bootstrap
- [x] ChakraUI
- [x] Tailwind UI
- [x] Flowbite React
- [x] Material UI

## Further notes

- Styled components allows for very clean code. See: https://styled-components.com/docs/basics#coming-from-css
- Mantine: quick and nice styles out of the box, easy to work with

What I would like:

```js
import { Button, Box } from "my-favorite-ui-library";

const Buttons = () => {
  return (
    <Box flex justify-center items-center space-x-4 mt-4
    >
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button primary outline>
        Outline
      </Button>
    </Box>
  );
};

export default Buttons;
```