import sprite from 'img/sprite.svg';
import { SearchForm, SearchInput } from './SearchBar.styled';

export const SearchBar = ({ onChange, searchTerm }) => {
  return (
    <SearchForm>
      <svg>
        <use href={sprite + '#icon-search-1'} />
      </svg>
      <SearchInput
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={onChange}
      />
    </SearchForm>
  );
};
