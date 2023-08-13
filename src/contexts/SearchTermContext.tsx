import React, { createContext, useContext, useState } from 'react';

interface SearchTermContextValue {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchTermContext = createContext<SearchTermContextValue | undefined>(undefined);

export const useSearchTerm = () => {
  const context = useContext(SearchTermContext);
  if (!context) {
    throw new Error('useSearchTerm must be used within a SearchTermProvider');
  }
  return context;
};

interface SearchTermProviderProps {
  children: React.ReactNode;
}

export const SearchTermProvider: React.FC<SearchTermProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchTermContext.Provider>
  );
};