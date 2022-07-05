import { Navbar } from "flowbite-react";

const Header = () => {
  return (
    <header className="bg-blue-500">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <h1 className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Cute Puppies Express!
          </h1>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>
            Bikes
          </Navbar.Link>
          <Navbar.Link href="/">Cars</Navbar.Link>
          <Navbar.Link href="/">Boats</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
