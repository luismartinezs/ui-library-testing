/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-neutral-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Cute Puppies Express!</span>
              <h1>Cute Puppies Express!</h1>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a
              href="#"
              className="text-base font-medium text-neutral-500 hover:text-neutral-900"
            >
              Bikes
            </a>
            <a
              href="#"
              className="text-base font-medium text-neutral-500 hover:text-neutral-900"
            >
              Cars
            </a>
            <a
              href="#"
              className="text-base font-medium text-neutral-500 hover:text-neutral-900"
            >
              Boats
            </a>
          </Popover.Group>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-neutral-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <h1>Cute Puppies Express!</h1>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-neutral-50"
                  >
                    <span className="ml-3 text-base font-medium text-neutral-900">
                      Bikes
                    </span>
                  </a>
                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-neutral-50"
                  >
                    <span className="ml-3 text-base font-medium text-neutral-900">
                      Cars
                    </span>
                  </a>
                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-neutral-50"
                  >
                    <span className="ml-3 text-base font-medium text-neutral-900">
                      Boats
                    </span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
