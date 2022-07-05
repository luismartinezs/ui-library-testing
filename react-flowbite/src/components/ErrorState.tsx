import { Alert } from "flowbite-react";

const HiInformationCircle = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ErrorState = () => {
  return (
    <div className="mt-4">
      <Alert color="failure" icon={HiInformationCircle} withBorderAccent={true}>
        <span className="inline-block ml-2">There was an error</span>
      </Alert>
    </div>
  );
};

export default ErrorState;
