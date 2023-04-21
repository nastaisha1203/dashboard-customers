import sprite from 'img/sprite.svg';
import { Link, LogoContainer } from './Logo.styled';

export const Logo = ({ onClick }) => {
  return (
    <LogoContainer>
      <Link href="#!" onClick={onClick}>
        <svg>
          <use href={sprite + '#icon-setting-1'} />
        </svg>
        <span>Dashboard</span>
      </Link>
    </LogoContainer>
  );
};
