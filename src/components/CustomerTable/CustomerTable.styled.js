import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 32px;
`;
export const Header = styled.thead``;

export const TableHeader = styled.th`
  color: rgba(181, 183, 192, 1);
  text-align: left;
  padding-top: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
`;

export const TableData = styled.td`
  padding: 20px 0;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
`;

export const TableRow = styled.tr`
  font-weight: 500;
`;
