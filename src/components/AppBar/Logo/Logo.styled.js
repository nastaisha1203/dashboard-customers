import styled from 'styled-components';

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  color: #000000;
  & svg {
    width: 30px;
    height: 30px;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

    @media (min-width: 1440px) {
      width: 37px;
      height: 37px;
    }
  }
  :hover,
  :focus {
    color: #5932ea;
    & svg {
      stroke: #5932ea;
    }
  }
  @media (min-width: 1440px) {
    margin-bottom: 52px;
    font-weight: 600;
    font-size: 26px;
    letter-spacing: 1%;
  }
`;

export const LogoContainer = styled.div`
  @media (min-width: 1440px) {
  }
`;
