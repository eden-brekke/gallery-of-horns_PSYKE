import React from 'react';
import HornedBeast from './HornedBeast.js';
import Bernard from './goat-g810caf742_640.jpg';
import Murray from './reindeer-g9e7fc1db9_640.jpg';

class Main extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast
        title = "Murray The Reindeer"
        imageURL = {Murray}
        alt = "Murray"
        description = "Murray Loves to Sing his heart out"/>
        <HornedBeast
         title = "Bernard the Goat"
         imageURL = {Bernard}
         alt="Bernard"
         description = "Bernard is a model goat."/>
      </main>
    );
  }
}

export default Main;

