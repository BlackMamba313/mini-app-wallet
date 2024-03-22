import React, {useEffect} from 'react';
import Header from "../components/Header";
import ControlButtons from "../components/ControlButtons";
import CardsSlider from "../components/CardsSlider";
import TransactionsList from "../components/TransactionsList";
import {GetTrans} from "../store/auth";
import {useDispatch, useSelector} from "react-redux";
import {transactionsData, userData} from "../store/auth/selectors";


const MainPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(userData);
  const transactionsFromBackend = useSelector(transactionsData);

    useEffect(() => {
      if (user) {
        dispatch(GetTrans({id:user.id}))
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
  return (
    <>
      {/*{!loading && !error && (*/}
        <>
          <Header/>
          <CardsSlider/>
          <ControlButtons/>
          {transactionsFromBackend && <TransactionsList transactions={transactionsFromBackend} />}
        </>
      {/*)}*/}
    </>
  );
};

export default MainPage;