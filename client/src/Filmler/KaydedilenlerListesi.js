import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function KaydedilenlerListesi(props) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map(id => (
        <Link key={id} to={`/filmler/${id}`}>
        <span key={id} className="saved-movie">{props.movies.find((item)=>item.id==id).title}</span></Link>
      ))}

      <Link to={'/'}>
      <div className="home-button">Anasayfa</div>
      </Link>
    </div>
  );
}
