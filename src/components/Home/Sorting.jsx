import React from 'react';

const Sorting = ({ setSort }) => {
  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);
  };

  return (
    <div className='bg-gray-100 my-10 p-5 flex items-center justify-end'>
      <select
        className='bg-white-200 py-2 px-10'
        onChange={handleSortChange}
        defaultValue={"def"}
      >
        <option disabled  value="def">
          Seçiniz
        </option>
        <option value="asc">Artan</option>
        <option value="desc">Azalan</option>
      </select>
    </div>
  );
}

export default Sorting;
