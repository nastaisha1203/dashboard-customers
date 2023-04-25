import styled from 'styled-components';

export const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;

  @media (min-width: 768px) {
    gap: 30px;
  }
  @media (min-width: 1440px) {
    gap: 17px;
  }
`;

export const Link = styled.li`
  width: 250px;
  padding: 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: #9197b3;
  border-radius: 8px;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: transparent;

    :hover,
    :focus {
      stroke: #fff;
    }
    @media (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }

  :hover,
  :focus {
    background-color: #5932ea;
    color: #fff;
  }

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1440px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
