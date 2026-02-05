import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsSearchActive(query.trim().length > 0);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearchActive(false);
  };

  return (
    <SearchContext.Provider value={{
      searchQuery,
      isSearchActive,
      handleSearch,
      clearSearch
    }}>
      {children}
    </SearchContext.Provider>
  );
};