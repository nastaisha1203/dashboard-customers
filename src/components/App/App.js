import { User } from 'components/User/User';
import customers from '../../customers.json';
import { AppBar } from 'components/AppBar/AppBar';
import { Customers } from 'components/Customers/Customers';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Logo } from 'components/AppBar/Logo/Logo';
import { Navigation } from 'components/AppBar/Navigation/Navigation';
import sprite from 'img/sprite.svg';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import {
  Layout,
  DesktopDisplay,
  Button,
  Modal,
  HeaderModal,
  GlobalStyle,
  SectionModal,
  Wrapper,
  Text,
  CustomersSection,
  AppbarSection,
  Container,
} from './App.styled';

export const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = customers.filter(customer =>
    Object.values(customer).some(
      value =>
        value !== null &&
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  const onChange = e => setSearchTerm(e.target.value);
  const toggleOpenBurger = e => {
    setOpenMenu(!openMenu);
  };
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  return (
    <>
      <Layout>
        {isDesktop ? (
          <DesktopDisplay>
            <AppbarSection>
              <AppBar />
            </AppbarSection>
            <CustomersSection>
              <Text>Hello Evano 👋🏼,</Text>
              <Customers
                customers={filteredItems}
                onChange={onChange}
                searchTerm={searchTerm}
              />
            </CustomersSection>
          </DesktopDisplay>
        ) : (
          <Container>
            <Wrapper>
              <Text>Hello Evano 👋🏼,</Text>
              <BurgerMenu onClick={toggleOpenBurger} />
            </Wrapper>
            <Customers
              customers={filteredItems}
              onChange={onChange}
              searchTerm={searchTerm}
            />
          </Container>
        )}
      </Layout>
      <GlobalStyle isOpen={openMenu} />
      <Modal isOpen={openMenu}>
        <SectionModal>
          <HeaderModal>
            <Logo
              onClick={() => {
                setOpenMenu(false);
              }}
            />
            <Button type="button" onClick={toggleOpenBurger} aria-label="Close">
              <svg width={32} height={32}>
                <use href={sprite + '#icon-x'} />
              </svg>
            </Button>
          </HeaderModal>
          <Navigation
            onClick={() => {
              setOpenMenu(false);
            }}
          />
          <User />
        </SectionModal>
      </Modal>
    </>
  );
};
