import sprite from 'img/sprite.svg';
import { Link, Nav, Item } from './Navigation.styled';

const navItems = [
  { text: 'Dashboard', icon: '#icon-key-square', arrow: '' },
  { text: 'Product', icon: '#icon-d-square-1', arrow: '#icon-chevron-right-2' },
  {
    text: 'Customers',
    icon: '#icon-user-square-1',
    arrow: '#icon-chevron-right-2',
  },
  {
    text: 'Income',
    icon: '#icon-wallet-money-2',
    arrow: '#icon-chevron-right-2',
  },
  {
    text: 'Promote',
    icon: '#icon-discount-shape-1',
    arrow: '#icon-chevron-right-2',
  },
  {
    text: 'Help',
    icon: '#icon-message-question-1',
    arrow: '#icon-chevron-right-2',
  },
];

export const Navigation = ({ onClick }) => {
  return (
    <Nav>
      {navItems.map(({ text, icon, arrow }) => (
        <Link key={text} onClick={onClick}>
          <Item>
            <svg>
              <use href={sprite + icon} />
            </svg>
            <span>{text}</span>
          </Item>
          <svg>
            <use href={sprite + arrow} />
          </svg>
        </Link>
      ))}
    </Nav>
  );
};
