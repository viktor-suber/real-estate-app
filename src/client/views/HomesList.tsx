import React, { useContext } from 'react';
import { Context } from '../state/context';

const HomesList: React.FC = () => {
  const { appData } = useContext(Context);
  const { homes } = appData || {};

  return (
    <>
      {homes.map((home: any) => {
        return (<p key={home.id}>{JSON.stringify(home)}</p>);
      })}
    </>
  );
};

export default HomesList;