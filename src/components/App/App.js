import { User } from 'components/User/User';
import { Layout } from './App.styled';
import { AppBar } from 'components/AppBar/AppBar';
import { Customers } from 'components/Customers/Customers';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Logo } from 'components/AppBar/Logo/Logo';
import { Navigation } from 'components/AppBar/Navigation/Navigation';
import sprite from 'img/sprite.svg';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import {
  Button,
  Modal,
  HeaderModal,
  GlobalStyle,
  SectionModal,
  Wrapper,
  Text,
} from './App.styled';

export const App = () => {
  const [openMenu, setOpenMenu] = useState(false);
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
          <div>
            <AppBar />
            <div>
              <p>Hello Evano 👋🏼,</p>
              <Customers />
            </div>
          </div>
        ) : (
          <div>
            <Wrapper>
              <Text>Hello Evano 👋🏼,</Text>
              <BurgerMenu onClick={toggleOpenBurger} />
            </Wrapper>
            <Customers />
          </div>
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
