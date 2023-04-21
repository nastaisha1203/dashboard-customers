import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  max-width: 216px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 15px;
  background-color: #f9fbff;
  /* overflow: hidden; */
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  width: 18px;
  height: 18px;
  background-color: transparent;
  & svg {
    width: 15px;
    height: 15px;
  }
  /* transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1); */
  /* outline: none; */
  /* &:hover {
    opacity: 1;
  } */
`;
export const SearchInput = styled.input`
  font: inherit;
  background-color: #f9fbff;
  padding: 3px;
  font-size: 15px;
  border: none;
  outline: none;
  border-radius: 10px;
  /* &::placeholder {
    font: inherit;
    font-size: 10px;
  } */
`;
