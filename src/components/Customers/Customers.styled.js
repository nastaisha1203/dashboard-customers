import styled from 'styled-components';

export const Wrrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
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
