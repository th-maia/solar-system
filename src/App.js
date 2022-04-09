import React from 'react';
import Header from './components/Header';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <SolarSystem />
        <PlanetCard />
      </section>
    );
  }
}

export default App;
