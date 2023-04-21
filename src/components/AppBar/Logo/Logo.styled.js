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
`;

export const LogoContainer = styled.div`
  @media (min-width: 1440px) {
    margin-right: 187px;
  }
`;
// export const Text = styled.span`
//   @media (min-width: 1440px) {
//     margin-right: 187px;
//   }
// `;
