import React from 'react';
import { FavoriElement } from "./FavoriElement";


export const FavoriList = (props) => {
  const { favoris, removeFavori } = props;


  return (
    <div className="w-75 d-flex flex-row flex-wrap justify-content-center m-5">
      {favoris.map((m, i) => (
        <FavoriElement key={crypto.randomUUID()}
                       movie={m}
                       isFavori={favoris.map(f => f.title).includes(m.title)}
                       removeFavori={removeFavori}
        />))}
    </div>
  );
};