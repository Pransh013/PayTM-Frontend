import { UserCardProps } from "@/lib/types/main";
import UserAvatar from "./UserAvatar";
import { Button } from "./ui/button";

const UserCard: React.FC<UserCardProps> = ({ firstName, lastName }) => {
  return (
    <>
      <div className="w-full border-2 rounded-lg py-2 px-8 bg- dark:bg-secondary flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <UserAvatar initials={firstName[0] + lastName[0]} />
          <p className="text-xl font-semibold">{`${firstName} ${lastName}`}</p>
        </div>
        <Button
          type="button"
          className="py-6 text-primary hover:text-muted border-2 dark:text-secondary-foreground text-lg bg-muted dark:bg-primary-foreground"
        >
          Send Money
        </Button>
      </div>
    </>
  );
};

export default UserCard;
