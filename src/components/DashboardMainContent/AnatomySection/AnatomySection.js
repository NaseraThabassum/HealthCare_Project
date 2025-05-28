import React from 'react';
import { healthIndicators } from '../../../data/healthData';
import CardWrapper from '../../CardWrapper';

function AnatomySection() {
  return (
    <CardWrapper>
      <h3>Body Status</h3>
      <ul>
        {healthIndicators.map((item, i) => (
          <li key={i} style={{ color: item.color, margin: '8px 0' }}>
            {item.part}: {item.status}
          </li>
        ))}
      </ul>
    </CardWrapper>
  );
}

export default AnatomySection;
