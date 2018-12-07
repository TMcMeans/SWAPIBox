import React from 'react';
import './Nav.css';
// import { prependOnceListener } from 'cluster';

export const Nav = (props) => {
  // let favorite;
  // props.favoriteCards.length === 0 ? favorite = 0 : favorite = props.favoriteCards.length
  return (
    <div>
      <section className="nav">
        <button name="people" onClick={ props.fetchData}>PEOPLE</button>
        <button name="planets" onClick={props.fetchData}>PLANETS</button>
        <button name="vehicles" onClick={props.fetchData}>VEHICLES</button>
        <button>FAVORTIES: </button>
      </section>
      <section className="background-fade" />
    </div>
  );
};
