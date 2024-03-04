import { UserAvatarProps } from "@/lib/types/main";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const UserAvatar: React.FC<UserAvatarProps> = ({ initials }) => {
  return (
    <>
      <Avatar className="">
        <AvatarImage src="" />
        <AvatarFallback className="font-bold text-lg text-white bg-gray-500 dark:bg-primary-foreground">
          {initials}
        </AvatarFallback>
      </Avatar>
    </>
  );
};

export default UserAvatar;
