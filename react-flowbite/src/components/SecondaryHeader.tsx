import { Navbar, Button } from "flowbite-react";

const SecondaryHeader = () => {
  return (
    <Navbar>
      <ul className="flex mt-0 flex-row space-x-8 md:font-medium justify-center w-full">
        <li>
          <a
            href="/"
            className="block text-gray-700 bg-transparent hover:text-blue-700 p-0 dark:text-white"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block text-gray-700 bg-transparent hover:text-blue-700 p-0 dark:text-white"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block text-gray-700 bg-transparent hover:text-blue-700 p-0 dark:text-white"
          >
            Services
          </a>
        </li>
      </ul>
    </Navbar>
  );
};

export default SecondaryHeader;
