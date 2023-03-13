import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Header />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="/:code"
          element={<CountryDetail />}
        />
      </Route>
    </Routes>
  );
}

export default App;
