import Link from "../Link/Link";

const Navbar = () => {
  const routes = [
    { path: '/', id: 1, name: 'Home' },
    { path: '/about', id: 2, name: 'About' },
    { path: '/services', id: 3, name: 'Services' },
    { path: '/contact', id: 4, name: 'Contact' },
    { path: '*', id: 5, name: 'Not Found' },
  ];

  return (
    <nav>
      <ul className="md:flex">
      {
        routes.map(route => <Link key={route.id} route={route} ></Link>)
      }
      </ul>
    </nav>
  );
};

export default Navbar;
