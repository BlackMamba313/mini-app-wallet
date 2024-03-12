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
import {auth, setActiveWallet} from "./store/auth";
import useHashing from "./hooks/useHashing";
import {walletsData} from "./store/auth/selectors";
import ProfilePage from "./pages/ProfilePage";
import ReferralPage from "./pages/ReferralPage";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wallets  = useSelector(walletsData);
  const { hash } = useHashing();
  const { userTG } = useTelegram();
  // console.log('>>>>>>>>>>>>>>>>>' ,tg)
  useEffect(() => {
    wallets &&
    dispatch(setActiveWallet(wallets[0]))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, wallets, navigate]);

  useEffect(() => {
    if (userTG) {
      const { requestData } = hash(userTG);
      dispatch(auth(requestData));} else {
      const userMock = {
        allows_write_to_pm: 1,
        first_name: "Alex",
        id: 1062564563123,
        is_premium: 1,
        language_code: "en",
        username: "AleksKonstant"
      }
      const { requestData } = hash(userMock);
      dispatch(auth(requestData));
      console.log('user is not')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Route path={'profile'} element={<ProfilePage />}/>
        <Route path={'referral'} element={<ReferralPage />}/>
      </Routes>
    </div>
  );
}

export default App;
