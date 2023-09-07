import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Headers = ({ title, icon }) => (
  <header className="d-flex text-white align-items p-3">
    <Link to="/">
      {icon}
    </Link>
    <nav className="d-flex justify-center">
      <h5>{title}</h5>
    </nav>
  </header>
);

Headers.propTypes = {
  title: PropTypes.string.isRequired,
};

Headers.propTypes = {
  icon: PropTypes.string,
};

Headers.defaultProps = {
  icon: '',
};

export default Headers;
