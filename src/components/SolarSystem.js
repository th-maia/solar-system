import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((planet) => {
          const { name, image } = planet;
          return (
            <PlanetCard
              key={ name } // porque usar key prop e porque o lint pede- https://kentcdodds.com/blog/understanding-reacts-key-prop
              planetName={ name }
              planetImage={ image }
            />
          );
        })}
      </div>
    );
  }
}

export default SolarSystem;
