import { User } from 'components/User/User';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { Section, Wrapper } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Section>
      <Wrapper>
        <Logo />
        <Navigation />
      </Wrapper>
      <User />
    </Section>
  );
};
