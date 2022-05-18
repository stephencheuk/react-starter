import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

import { BsSearch as SearchIcon } from "react-icons/bs";
import { GoDiffAdded as AddIcon } from "react-icons/go";
import { FiFilter as FilterIcon } from "react-icons/fi";

const List = () => {

  let [searchParams, setSearchParams] = useSearchParams();
  let [querystring_search, setQS_Search] = useState('');

  // window.searchParams = searchParams;
  // window.querystring_search = querystring_search;

  const onEnterPress = (e) => {
    if (e.key === 'Enter') {
      let q = {};
      //q = Object.fromEntries([...searchParams]);
      q.search = e.target.value;
      setSearchParams(q)
    }
  }

  return (
    <div className='remotecrud__list border-1 border-gray-300 flex justify-between items-center'>
      <div className="text-sm font-medium">LIST</div>
      <div className="flex">
        <FilterIcon className="h-4 w-4 m-2" />
        <SearchIcon className="h-4 w-4 m-2" />
        <input className="rounded text-sm p-1 outline-none border-0" placeholder="Type to Search" value={querystring_search} onChange={e => setQS_Search(e.target.value)} onKeyPress={e => onEnterPress} />
        <Link to={"./create"}><AddIcon className="h-4 w-4 m-2" /></Link>
      </div>
    </div>
  )
}

export default List