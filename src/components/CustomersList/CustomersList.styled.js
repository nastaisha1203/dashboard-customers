import styled from 'styled-components';

export const CardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 25px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
export const Card = styled.li`
  width: 300px;
  padding: 8px 14px;
  border-bottom: 2px solid #eeeeee;
  /* @media screen and (min-width: 768px) {
  } */
`;
export const Item = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #b5b7c0;
  /* @media screen and (min-width: 768px) {
    
  } */
`;
export const Text = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  margin-left: 5px;
  color: #292d32;
  /* @media screen and (min-width: 768px) {
    font-size: 14px;
  } */
`;
export const Status = styled.span`
  width: 80px;
  height: 29px;
  padding: 2px 6px;
  background-color: ${p =>
    p.isActive === 'Active'
      ? 'rgba(22, 192, 152, 0.38)'
      : 'rgba(255, 197, 197, 1)'};
  border: 1px solid
    ${p =>
      p.isActive === 'Active' ? 'rgba(0, 176, 135, 1)' : 'rgba(223, 4, 4, 1)'};
  border-radius: 4px;
  color: ${p =>
    p.isActive === 'Active' ? 'rgba(0, 135, 103, 1)' : 'rgba(223, 4, 4, 1)'};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  margin-left: 120px;

  /* @media screen and (min-width: 768px) {
    font-size: 14px;
  } */
`;
