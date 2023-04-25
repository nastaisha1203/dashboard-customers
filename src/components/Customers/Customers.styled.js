import styled from 'styled-components';

export const Section = styled.div`
  padding: 15px 10px 20px 10px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 10px 15px rgba(226, 236, 249, 0.5);
  @media screen and (min-width: 768px) {
    border-radius: 30px;
    box-shadow: 30px;
    padding: 30px 44px 40px 38px;
  }
  @media screen and (min-width: 1440px) {
    border-radius: 60px;
    box-shadow: 60px;
    height: 820px;
  }
`;
export const Wrrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 26px;
  }
`;
export const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin-bottom: 7px;
  }
`;
export const Text = styled.p`
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #16c098;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
export const Description = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -1%;
  color: rgba(181, 183, 192, 1);
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
