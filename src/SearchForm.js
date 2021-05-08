import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();
  return <form>search form</form>;
};

export default SearchForm;
