import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCryptos, getFormValue } from '../redux/balance/balanceSlice';
import Headers from './Header';
import Category from './Categories';

const Home = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({ searchValue: '' });

  const {
    cryptos, singleCrypto, loading, error,
  } = useSelector((state) => state.cryptos);

  useEffect(() => {
    dispatch(fetchCryptos());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormValue(e.target.value);
  };

  const getValue = (e) => {
    e.preventDefault();
    if (formValue.trim() !== '' || formValue.searchValue !== '') {
      document.querySelector('.submit').reset();
      const toUpperCaseText = formValue.toUpperCase();
      dispatch(getFormValue(
        toUpperCaseText,
      ));
    }
    setFormValue({ searchValue: '' });
  };
  return (
    <section className="bg-blue">
      <Headers title="CRYPTO, FOREX & COMMODITIES" />

      <span className={loading ? 'bg-load' : ''}>{loading ? 'Loading...' : ''}</span>
      <span>{error}</span>

      <aside className="text-white ">
        <div className="bg-image" />
        <div className="bg-drop p-3">
          <aside className="pt-2">
            <h1>{singleCrypto.symbol}</h1>
            <p>Symbol</p>
          </aside>
          <aside className="pt-2">
            <h1>{singleCrypto.currency}</h1>
            <p>Currency</p>
          </aside>
          <Link to={singleCrypto.symbol}>
            <i className="fa-regular fa-circle-right cursor-pointer" />
          </Link>

        </div>
      </aside>

      <aside>
        <form onSubmit={getValue} className="submit">
          <input type="text" placeholder="e.g btcusd" name="searchValue" onChange={handleChange} />
          <button type="submit" className="cursor-pointer">Search</button>
        </form>
      </aside>

      <Category cryptos={cryptos} />
    </section>
  );
};

export default Home;
