import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import {Route, Routes} from 'react-router-dom'
import MainPage from "./pages/MainPage";
import BuyPage from "./pages/BuyPage";
import ReceivePage from "./pages/ReceivePage";
import SellPage from "./pages/SellPage";
import SendPage from "./pages/SendPage";
import CreatePage from "./pages/CreatePage";
import HistoryPage from "./pages/HistoryPage";
import {useDispatch} from "react-redux";
import {auth} from "./store/auth";
import useHashing from "./hooks/useHashing";
import {GetCrypto, getCurrencyRate, GetFiat} from "./store/currency";

function App() {
  const dispatch = useDispatch();
  const { hash } = useHashing();
  const {tg, user} = useTelegram();
  useEffect(() => {
    tg.ready();
  }, [tg])
// eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
      const { requestData } = hash();
      dispatch(GetFiat(requestData));
      dispatch(GetCrypto(requestData));
      dispatch(getCurrencyRate(requestData));
  }, [dispatch, hash]);

  useEffect(() => {
    if (user) {
      const { requestData } = hash(user);
      dispatch(auth(requestData));
      dispatch(GetFiat());
      dispatch(GetCrypto());
      dispatch(getCurrencyRate());
    }
  }, [dispatch, hash, user]);

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
