import avatarca from 'img/avatarca.jpg';
import { UserBox, Name, Text } from './User.styled';

export const User = () => {
  return (
    <UserBox>
      <img src={avatarca} alt="avatarca" />
      <div>
        <Name>Evano</Name>
        <Text>Project Manager</Text>
      </div>
    </UserBox>
  );
};
