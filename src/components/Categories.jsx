import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ cryptos }) => (
  <section className="text-white card">
    {
      cryptos.map(({
        symbol,
        exchangeShortName,
      }) => (
        <article key={symbol}>
          <Link to={symbol}>
            <i className="fa-regular fa-circle-right cursor-pointer" />
          </Link>
          <div className="card-body d-flex">
            <aside>
              <h6>ExchangeShortName</h6>
              <p>{exchangeShortName}</p>
            </aside>
            <aside className="pl-2">
              <h3>symbol</h3>
              <p className="text-yellow">{symbol}</p>
            </aside>
          </div>
        </article>
      ))
    }
  </section>
);

Category.propTypes = {
  cryptos: PropTypes.objectOf(null),
};

Category.defaultProps = {
  cryptos: {
    name: null,
    currency: null,
    stockExchange: null,
    exchangeShortName: null,
  },
};

export default Category;
