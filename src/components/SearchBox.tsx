import React from 'react';

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: ISearchBoxProps): JSX.Element => {
  return (
    <div className='pa2'>
      <label htmlFor="seach"/>
      <input
        id="search"
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
