import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes, useNavigate} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import BuyPage from "./pages/BuyPage";
import ReceivePage from "./pages/ReceivePage";
import SellPage from "./pages/SellPage";
import SendPage from "./pages/SendPage";
import CreatePage from "./pages/CreatePage";
import HistoryPage from "./pages/HistoryPage";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./store/auth";
import useHashing from "./hooks/useHashing";
import {GetCrypto, getCurrencyRate, GetFiat, setActiveWallet} from "./store/currency";
import {userFiat} from "./store/currency/selectors";
import {walletsData} from "./store/auth/selectors";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wallets  = useSelector(walletsData);
  const { hash } = useHashing();
  const {tg, user} = useTelegram();
  const fiat = useSelector(userFiat);
  useEffect(() => {
    tg.ready();
  }, [tg])

  useEffect(() => {
      const { requestData } = hash();
    console.log('requestData', requestData)
      dispatch(GetFiat(requestData));
      dispatch(GetCrypto(requestData));
  }, [dispatch, hash, fiat]);

  useEffect(() => {
    const iso = {iso: fiat}
    const { requestData } = hash(iso);
    dispatch(getCurrencyRate(requestData));
  }, [dispatch, hash, fiat]);

  useEffect(() => {
    if (user) {
      const { requestData } = hash(user);
      dispatch(auth(requestData));}
  }, [dispatch, hash, user]);

  // useEffect(() => {
  //   wallets &&
  //   dispatch(setActiveWallet(wallets[0]))
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />}/>
        <Route path={'buy'} element={<BuyPage />}/>
        <Route path={'receive'} element={<ReceivePage />}/>
        <Route path={'sell'} element={<SellPage />}/>
        <Route path={'send'} element={<SendPage />}/>
        <Route path={'create'} element={<CreatePage />}/>
        <Route path={'history'} element={<HistoryPage />}/>
      </Routes>
    </div>
  );
}

export default App;
