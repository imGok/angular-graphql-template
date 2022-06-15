export interface IAccount {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  isAdmin: boolean;
  updatedAt: Date;
  createdAt: Date;
}