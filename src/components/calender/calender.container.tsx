import React from 'react';

import { MiUiProvider } from '../../context';
import { CalenderComponent } from './calender.comp';

export const Calender = () => {
  return (
    <MiUiProvider>
      <CalenderComponent />
    </MiUiProvider>
  );
};
