import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoDetails } from '../redux/balance/detailSlice';
import Headers from './Header';

const DetailPage = () => {
  const dispatch = useDispatch();

  const {
    cryptoDetail, showLoad, showError,
  } = useSelector((state) => state.cryptoDetail);

  useEffect(() => {
    dispatch(fetchCryptoDetails());
  }, [dispatch]);

  return (
    <section className="bg-blue">
      <Headers title="Single Cryptocurrency" icon={<i className="cursor-pointer fa-solid fa-chevron-left" />} />
      <span className={showLoad ? 'bg-load' : ''}>{showLoad ? 'Loading...' : ''}</span>
      <span>{showError}</span>
      {
        cryptoDetail.map(({
          symbol, price, name, exchange, changesPercentage, dayLow, dayHigh, yearHigh, yearLow,
        }) => (
          <article key={symbol} className="text-white">
            <section className="bg-drop-blue d-flex justify-between">
              <aside>Name</aside>
              <aside className="text-yellow"><h1>{name}</h1></aside>
            </section>
            <section className="bg-drop-blue d-flex justify-between">
              <aside>Symbol</aside>
              <aside className="text-yellow"><h1>{symbol}</h1></aside>
            </section>
            <section className="bg-drop-blue d-flex justify-between">
              <aside>Price</aside>
              <aside className="text-yellow"><h1 className="text-yellow">{price}</h1></aside>
            </section>
            <section className="bg-drop-blue d-flex justify-between">
              <aside>Exchange</aside>
              <aside className="text-yellow"><h1 className="text-yellow">{exchange}</h1></aside>
            </section>
            <section className="bg-drop-blue d-flex justify-between">
              <aside>Changes Percentage</aside>
              <aside className="text-yellow"><h1 className="text-yellow">{changesPercentage}</h1></aside>
            </section>
            <section className="bg-drop-blue d-flex justify-between">
              <aside>DayLow</aside>
              <aside className="text-yellow"><h1 className="text-yellow">{dayLow}</h1></aside>
            </section>
            <section className="bg-drop-blue d-flex justify-between">
              <aside>DayHigh</aside>
              <aside className="text-yellow"><h1 className="text-yellow">{dayHigh}</h1></aside>
            </section>
            <section className="bg-drop-blue d-flex justify-between">
              <aside>YearHigh</aside>
              <aside className="text-yellow"><h1 className="text-yellow">{yearHigh}</h1></aside>
            </section>
            <section className="bg-drop-blue d-flex justify-between">
              <aside>YearLow</aside>
              <aside className="text-yellow"><h1 className="text-yellow">{yearLow}</h1></aside>
            </section>
          </article>
        ))
      }
    </section>
  );
};

export default DetailPage;
