import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  background: transparent;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & svg {
    width: 32px;
    height: 32px;
    stroke: #22252a;
    fill: transparent;

    @media (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }
  &:hover svg,
  &:focus svg {
    stroke: #5932ea;
  }
`;
