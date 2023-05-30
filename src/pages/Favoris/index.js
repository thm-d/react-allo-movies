import React from 'react';
import { useOutletContext } from "react-router-dom";
import { FavoriList } from "./components/FavoriList";


const Favoris = () => {
  const { favoris, removeFavori } = useOutletContext();

  return (
    <FavoriList favoris={favoris}
                removeFavori={removeFavori}
    />
  );
};

export default Favoris;