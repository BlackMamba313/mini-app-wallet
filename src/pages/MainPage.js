import React from 'react';
import Header from "../components/Header";
import ControlButtons from "../components/ControlButtons";
import CardsSlider from "../components/CardsSlider";
import {GET_USER_BY_ID} from "../store/queries/userQueries";
import {useQuery} from "@apollo/client";
import {useTelegram} from "../hooks/useTelegram";

const MainPage = () => {
  const {user} = useTelegram();
  const userId = user.id;
  const {loading, error, data} = useQuery(GET_USER_BY_ID, {variables: {userId}});

  if (loading) return <p>LOADING...</p>;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <>
          <Header/>
          <CardsSlider data={data}/>
          <ControlButtons/>
        </>
      )}
    </>
  );
};

export default MainPage;