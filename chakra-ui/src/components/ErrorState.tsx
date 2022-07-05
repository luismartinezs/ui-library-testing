import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const ErrorState = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>There was an error</AlertTitle>
      <AlertDescription>Try again later, we're sorry</AlertDescription>
    </Alert>
  );
};

export default ErrorState;
