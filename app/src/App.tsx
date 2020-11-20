import React, { useState, useEffect, Suspense } from 'react';
import './config/tailwind.css';
import 'react-day-picker/lib/style.css';

import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from './config/RelayEnvironment';
import Layout from './components/Layout';

function App() {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Layout />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
