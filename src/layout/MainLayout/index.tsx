import GridDebug from '@Components/GridDebug';
import Header from '@Layout/Header';
import type { PropsWithChildren } from 'react';
import React from 'react';

export default function MainLayout({ children }: PropsWithChildren): React.ReactElement {
  return (
    <React.Fragment>
      <Header />
      {children}
      <GridDebug />
    </React.Fragment>
  );
}
