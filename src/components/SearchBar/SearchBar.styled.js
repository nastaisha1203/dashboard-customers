import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: 8px;
  padding-left: 8px;
  align-items: center;
  min-width: 216px;
  height: 38px;
  border-radius: 10px;
  margin-top: 15px;
  background-color: #f9fbff;
  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
  & svg {
    width: 15px;
    height: 15px;
    @media screen and (min-width: 1440px) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const SearchInput = styled.input`
  font: inherit;
  background-color: #f9fbff;
  padding: 3px;
  font-size: 15px;
  border: none;
  outline: none;
  border-radius: 10px;
  &::placeholder {
    color: rgba(181, 183, 192, 1);
  }
`;
