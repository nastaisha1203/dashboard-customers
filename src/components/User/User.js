import avatarca from 'img/avatarca.jpg';
import avatarcaX2 from 'img/avatarcaX2.jpg';
import { UserBox, Name, Text } from './User.styled';

export const User = () => {
  return (
    <UserBox>
      <img
        srcSet={`${avatarca} 1x, ${avatarcaX2} 2x`}
        src={avatarca}
        alt="avatarca"
      />
      <div>
        <Name>Evano</Name>
        <Text>Project Manager</Text>
      </div>
    </UserBox>
  );
};
