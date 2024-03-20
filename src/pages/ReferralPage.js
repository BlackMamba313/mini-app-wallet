import React from 'react';
import Header from "../components/Header";
import {useSelector} from "react-redux";
import {userData} from "../store/auth/selectors";
import KPIContract from "../components/KPIContract";
import KPIShow from "../components/KPIShow";

const ReferralPage = () => {
  const {hasContract} = useSelector(userData);
  return (
    <>
      <Header title='Партнерская программа'/>
      {hasContract ?
        <KPIShow/>:
        <KPIContract/>
        }
    </>
  );
};

export default ReferralPage;