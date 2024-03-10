import React from 'react';
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";


const ProfilePage = () => {
  return (
    <>
      {/*{!loading && !error && (*/}
      <>
        <Header title='Настройки профиля'/>
        <UserProfile/>
      </>
      {/*)}*/}
    </>
  );
};

export default ProfilePage;