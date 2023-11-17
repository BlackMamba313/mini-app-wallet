import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header";
import {Route, Routes} from 'react-router-dom'
import MainPage from "./pages/MainPage";

function App() {
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg])

  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />}/>
      </Routes>
    </div>
  );
}

export default App;
