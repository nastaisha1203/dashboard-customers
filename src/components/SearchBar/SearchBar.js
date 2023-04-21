import sprite from 'img/sprite.svg';
import { SearchButton, SearchForm, SearchInput } from './SearchBar.styled';

export const SearchBar = () => {
  return (
    <SearchForm>
      <SearchButton type="submit" aria-label="Search">
        <svg>
          <use href={sprite + '#icon-search-1'} />
        </svg>
      </SearchButton>
      <SearchInput type="text" placeholder="Search" />
    </SearchForm>
  );
};
