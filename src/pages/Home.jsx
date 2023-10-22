import React from 'react';
import { useState } from 'react';
import SliderCopm from '../components/Home/SliderCopm'
import Sorting from '../components/Home/Sorting';
import Category from '../components/Home/Category';
import Products from '../components/Home/Products';

export default function Home({ search }) {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      {search ? (
        <Products sort={sort} category={category} />
      ) : (
        <>
          <SliderCopm />
          <Sorting setSort={setSort} />
          <div className='flex'>
            <Category setCategory={setCategory} />
            <Products sort={sort} category={category} />
          </div>
        </>
      )}
    </div>
  );
}
