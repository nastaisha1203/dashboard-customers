import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ isOpen }) => (isOpen ? 'hidden' : 'auto')};
  }
`;

export const Layout = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
  min-width: 320px;

  @media screen and (max-width: 767px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-left: 25px;
    padding-right: 25px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  background: transparent;

  & svg {
    stroke: #22252a;
    fill: transparent;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
      stroke: #5932ea;
      fill: transparent;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  box-sizing: border-box;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 28px 16px;
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  transform: ${p => (p.isOpen ? 'translateY(0)' : 'translateY(-200%)')};
  transition: transform 0.9s cubic-bezier(0, 0, 0.58, 1);
  background-color: #fff;
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SectionModal = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
  padding-bottom: 28px;
`;
export const Text = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;
