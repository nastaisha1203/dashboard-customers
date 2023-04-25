import { SearchBar } from 'components/SearchBar/SearchBar';
import {
  Text,
  Title,
  Wrrapper,
  Section,
  Description,
} from './Customers.styled';
import { CustomersList } from 'components/CustomersList/CustomersList';
export const Customers = ({ customers, onChange, searchTerm }) => {
  return (
    <Section>
      <Wrrapper>
        <div>
          <Title>All Customers</Title>
          <Text>Active Members</Text>
        </div>
        <SearchBar onChange={onChange} searchTerm={searchTerm} />
      </Wrrapper>
      <CustomersList customers={customers} />
      <Description>Showing data 1 to 8 of 256K entries</Description>
    </Section>
  );
};
