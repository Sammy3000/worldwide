import React from 'react';
import Search from '../input/Search';
import Country from '../components/Country';
const Home = () => {
  return (
    <section>
      <div>
        <Search />
      </div>
      <Country />
    </section>
  );
};

export default Home;
