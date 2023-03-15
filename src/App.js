import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Countries from './components/pages/Countries';
import Country from './components/pages/Country';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<Country />}
        />

        <Route
          path="/countries/:alpha3Code"
          element={<Countries />}
        />
      </Routes>
    </div>
  );
}

export default App;
