import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header";
import {Route, Routes} from 'react-router-dom'
import MainPage from "./pages/MainPage";

function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<MainPage />}/>
      </Routes>
    </div>
  );
}

export default App;
