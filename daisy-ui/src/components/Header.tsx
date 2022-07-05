const Header = () => {
  const navigation = (
    <ul className="menu bg-base-100 text-black lg:text-white lg:bg-transparent menu-vertical lg:menu-horizontal p-0 absolute right-0 lg:relative shadow lg:shadow-none">
      <li>
        <a href="#" className="link link-hover">
          Bikes
        </a>
      </li>
      <li>
        <a href="#" className="link link-hover">
          Cars
        </a>
      </li>
      <li>
        <a href="#" className="link link-hover">
          Boats
        </a>
      </li>
    </ul>
  );

  return (
    <header>
      <nav className="navbar bg-primary text-primary-content">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl" href="/">
            Cute Puppies Express!
          </a>
        </div>
        {/* mobile menu */}
        <div className="flex-none lg:hidden">
          <ul className="menu menu-horizontal p-0 relative">
            <li tabIndex={0}>
              <button className="btn btn-square btn-ghost">
                <span className="sr-only">Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
              {navigation}
            </li>
          </ul>
        </div>
        {/* desktop menu */}
        <div className="flex-none hidden lg:flex">{navigation}</div>
      </nav>
    </header>
  );
};

export default Header;
