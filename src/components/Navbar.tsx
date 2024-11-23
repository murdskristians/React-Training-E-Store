import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Galvenā lapa</Link></li>
        <li><Link to="/catalog">Kataloga lapa</Link></li>
        <li><Link to="/category">Kategorijas lapa</Link></li>
        <li><Link to="/subcategory">Subkategorijas lapa</Link></li>
        <li><Link to="/product">Produkta lapa</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
        <li><Link to="/cart">Grozs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;