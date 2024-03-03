import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UserAvatar = () => {
  return (
    <>
      <Avatar>
        <AvatarImage src="https://github.com/Pransh013.png" />
        <AvatarFallback></AvatarFallback>
      </Avatar>
    </>
  );
};

export default UserAvatar;
