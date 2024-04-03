import React, { useState, useEffect } from 'react';

  const Search = () => {
     const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className=' flex  bg-white'>
        <img src="/Search Icon.svg" alt=".." />
      <input 
       type="text"
        placeholder="Search for camps"
        value={searchTerm}
        onChange={handleChange}
        />
      </div>
  )}
  export default Search ;