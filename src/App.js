import './App.css';
import {useEffect} from "react";
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

function App() {
  const dispatch = useDispatch();
  const { hash } = useHashing();
  const {tg, user} = useTelegram();
  useEffect(() => {
    tg.ready();
  }, [tg])

  useEffect(() => {
    const { requestData } = hash(user);
    dispatch(auth(requestData));
  }, []);

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
