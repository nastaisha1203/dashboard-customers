import { SearchBar } from 'components/SearchBar/SearchBar';
import { Text, Title, Wrrapper } from './Customers.styled';
import { CustomersList } from 'components/CustomersList/CustomersList';
export const Customers = () => {
  return (
    <>
      <Wrrapper>
        <div>
          <Title>All Customers</Title>
          <Text>Active Members</Text>
        </div>
        <SearchBar />
      </Wrrapper>
      <CustomersList />
    </>
  );
};
