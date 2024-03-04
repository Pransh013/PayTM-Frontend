export type User = {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type UserCardProps = {
  _id: string;
  firstName: string;
  lastName: string;
};

export type UserAvatarProps = {
  initials: string;
}