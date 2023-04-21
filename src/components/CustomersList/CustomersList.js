import customers from '../../customers.json';
import { Card, CardList, Item, Status, Text } from './CustomersList.styled';

export const CustomersList = () => {
  return (
    <CardList>
      {customers.map(({ id, name, company, phone, email, country, status }) => (
        <Card key={id}>
          <ul>
            <Item>
              Customer Name: <Text>{name}</Text>
            </Item>
            <Item>
              Company: <Text>{company}</Text>
            </Item>
            <Item>
              Phone Number: <Text>{phone}</Text>
            </Item>
            <Item>
              Email: <Text>{email}</Text>
            </Item>
            <Item>
              Country: <Text>{country}</Text>
            </Item>
            <Item>
              Status: <Status isActive={status}>{status}</Status>
            </Item>
          </ul>
        </Card>
      ))}
    </CardList>
  );
};
