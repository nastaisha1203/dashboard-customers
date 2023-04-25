import {
  Table,
  Header,
  TableHeader,
  TableData,
  TableRow,
} from './CustomerTable.styled';
import { Status } from 'components/CustomersList/CustomersList.styled';

export const CustomerTable = ({ customers }) => {
  return (
    <Table>
      <Header>
        <tr>
          <TableHeader>Customer Name</TableHeader>
          <TableHeader>Company</TableHeader>
          <TableHeader>Phone Number</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Country</TableHeader>
          <TableHeader>Status</TableHeader>
        </tr>
      </Header>

      <tbody>
        {customers.map(
          ({ id, name, company, phone, email, country, status }) => (
            <TableRow key={id}>
              <TableData>{name}</TableData>
              <TableData>{company}</TableData>
              <TableData>{phone}</TableData>
              <TableData>{email}</TableData>
              <TableData>{country}</TableData>
              <TableData>
                <Status isActive={status}>{status}</Status>
              </TableData>
            </TableRow>
          )
        )}
      </tbody>
    </Table>
  );
};
