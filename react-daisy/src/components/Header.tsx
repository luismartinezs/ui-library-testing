import { Navbar, Dropdown, Button, Menu } from "react-daisyui";

const items = [
  {
    label: "Bikes",
  },
  {
    label: "Cars",
  },
  {
    label: "Boats",
  },
];

const Header = () => {
  return (
    <div className="pb-16 flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar>
        <Navbar.Start>
          <a className="btn btn-ghost normal-case text-xl">
            Cute Puppies Express!
          </a>
        </Navbar.Start>
        <Navbar.End className="">
          <Menu horizontal className="p-0 hidden lg:flex">
            {items.map((item) => (
              <Menu.Item>
                <a>{item.label}</a>
              </Menu.Item>
            ))}
          </Menu>
          <Dropdown>
            <Button color="ghost" tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </Button>
            <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
              {items.map((item) => (
                <Dropdown.Item>
                  <a>{item.label}</a>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.End>
      </Navbar>
    </div>
  );
};

export default Header;
