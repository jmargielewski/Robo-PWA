import React from 'react';
import Card from './Card';
import { IRobot } from '../containers/App';

const CardList = ({ robots }: {robots: Array<IRobot>}): JSX.Element => {
  return (
    <div>
      {robots.map((robot: IRobot, i: number) => {
          return (
            <Card
              key={i}
              id={robot.id}
              name={robot.name}
              email={robot.email}
            />
          );
        })}
    </div>
  );
}

export default CardList;
