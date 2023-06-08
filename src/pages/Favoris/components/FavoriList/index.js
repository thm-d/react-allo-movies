import React from 'react';
import { FavoriElement } from "./FavoriElement";
import style from "./index.module.scss"


export const FavoriList = (props) => {
  const { favoris, removeFavori } = props;


  return (
    <div className={ `w-100 d-flex flex-row flex-wrap justify-content-center ${style.container}` }>
      {favoris.map((m, i) => (
        <FavoriElement key={Math.random()}
                       movie={m}
                       isFavori={favoris.map(f => f.title).includes(m.title)}
                       removeFavori={removeFavori}
        />))}
    </div>
  );
};