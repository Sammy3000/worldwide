import React from 'react';
import Search from '../input/Search';
import Filter from '../input/Filter';
import Country from '../components/Country';
const Home = () => {
  return (
    <section>
      <div>
        <Search />
        <Filter />
      </div>
      <Country />
    </section>
  );
};

export default Home;
